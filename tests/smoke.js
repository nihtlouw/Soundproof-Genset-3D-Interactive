/* Uji integrasi tanpa build step. Buka smoke.html melalui server statis. */
(function () {
  'use strict';
  var frame = document.querySelector('#app');
  var summary = document.querySelector('#summary');
  var results = document.querySelector('#results');
  var runButton = document.querySelector('#run');
  var serial = 0;
  var failures = 0, passed = 0;

  function assert(condition, message) {
    if (!condition) throw new Error(message);
  }
  function closeTo(a, b) { return Math.abs(a - b) < 0.001; }
  function wait(ms) { return new Promise(function (resolve) { setTimeout(resolve, ms); }); }
  function loadApp(hash) {
    return new Promise(function (resolve, reject) {
      var timer = setTimeout(function () { reject(new Error('Aplikasi tidak selesai dimuat.')); }, 60000);
      frame.onload = function () {
        clearTimeout(timer);
        var win = frame.contentWindow, doc = frame.contentDocument;
        if (!win.THREE || doc.querySelector('.nogl') || !doc.querySelector('#door_gateL')) {
          reject(new Error('Aplikasi atau WebGL tidak berhasil dimuat.'));
          return;
        }
        resolve({ win: win, doc: doc });
      };
      // Query unik memaksa navigasi penuh, bukan hanya perubahan hash.
      frame.src = '../index.html?smoke=' + (++serial) + (hash || '');
    });
  }
  async function test(name, fn) {
    var li = document.createElement('li');
    try {
      await fn();
      li.className = 'pass'; li.textContent = '✓ ' + name; passed++;
    } catch (error) {
      li.className = 'fail'; li.textContent = '✗ ' + name + ': ' + error.message; failures++;
    }
    results.appendChild(li);
  }
  function setRange(app, id, value) {
    var el = app.doc.querySelector('#' + id);
    el.value = value;
    el.dispatchEvent(new app.win.Event('input', { bubbles: true }));
  }
  function click(app, selector) {
    var el = app.doc.querySelector(selector);
    assert(el, 'Kontrol tidak ditemukan: ' + selector);
    el.click();
  }
  function rect(svg, selector) {
    var node = svg.querySelector(selector);
    assert(node, 'Elemen denah tidak ditemukan: ' + selector);
    return { x: Number(node.getAttribute('x')), y: Number(node.getAttribute('y')), w: Number(node.getAttribute('width')), h: Number(node.getAttribute('height')) };
  }
  function checkPlanGates(svg, width) {
    var left = rect(svg, '[data-gate-plan="closed-left"]'), right = rect(svg, '[data-gate-plan="closed-right"]');
    var openL = rect(svg, '[data-gate-plan="open-left"]'), openR = rect(svg, '[data-gate-plan="open-right"]');
    var lp = rect(svg, '[data-post-plan="2"]'), rp = rect(svg, '[data-post-plan="3"]');
    assert(closeTo(left.w, width) && closeTo(right.w, width), 'Lebar daun di denah tidak sesuai model.');
    assert(closeTo(left.x, lp.x + lp.w) && closeTo(right.x + right.w, rp.x), 'Ujung daun di denah tidak mencapai tiang.');
    assert(closeTo(left.x + left.w, right.x), 'Daun di denah tidak bertemu di tengah.');
    assert(closeTo(openL.x, left.x - width) && closeTo(openR.x, right.x + width), 'Posisi geser di denah tidak sesuai model.');
    assert(closeTo(left.y + left.h / 2, lp.y + lp.h / 2 + .12), 'Garis pintu dan tiang tidak sesuai bidang model.');
    var wall = rect(svg, '[data-panel-wall-plan="true"]');
    assert(wall.y + wall.h < openL.y, 'Lintasan daun kiri melewati dinding panel pada denah.');
  }
  function checkFrontGates(svg, width) {
    var left = rect(svg, '[data-gate-elevation="left"]'), right = rect(svg, '[data-gate-elevation="right"]');
    var lp = rect(svg, '[data-post-elevation="left"]'), rp = rect(svg, '[data-post-elevation="right"]');
    assert(closeTo(left.w, width) && closeTo(right.w, width), 'Lebar pintu tampak depan tidak sesuai.');
    assert(closeTo(left.x, lp.x + lp.w) && closeTo(right.x + right.w, rp.x), 'Celah masih terlihat di tiang tampak depan.');
    assert(closeTo(left.x + left.w, right.x), 'Pintu tampak depan tidak bertemu di tengah.');
  }

  async function run() {
    runButton.disabled = true; results.innerHTML = ''; failures = 0; passed = 0;
    summary.textContent = 'Pengujian sedang berjalan…';
    var app, sharedHash = '';
    try {
      app = await loadApp();
      await test('Rumah wiremesh menjadi bawaan tanpa pilihan V1 atau taman', function () {
        var doc = app.doc;
        assert(doc.querySelector('#sub').textContent.indexOf('pagar wiremesh') !== -1, 'Rumah wiremesh tidak ditampilkan.');
        assert(doc.querySelector('#dimW').value === '4' && doc.querySelector('#dimD').value === '2' && doc.querySelector('#dimH').value === '3', 'Dimensi bawaan tidak sesuai.');
        assert(!doc.querySelector('#garden, #lights, [data-variant], [data-plan-variant]'), 'Kontrol yang dihapus masih tersedia.');
        assert(!/pohon palem|dinding plester|V1\s*·/i.test(doc.body.textContent), 'Teks V1 atau taman masih muncul.');
      });
      await test('Geometri hanya berisi rumah wiremesh dan komponen yang dibutuhkan', function () {
        // Parameter lama tidak boleh menghidupkan kembali geometri plester.
        var shelter = app.win.buildShelter(app.win.THREE, { W: 4, D: 2, H: 3, variant: 'plaster' });
        try {
          var parts = [];
          shelter.group.traverse(function (node) { if (node.userData.part) parts.push(node.userData.part); });
          ['shWalls', 'shRoof', 'shPanelWall', 'shDistribution', 'shKwh', 'shExhaust'].forEach(function (part) {
            assert(parts.indexOf(part) !== -1, 'Komponen hilang: ' + part);
          });
          ['shGarden', 'shLights', 'shScreen', 'shVentIn', 'shVentOut', 'shGateStop', 'shATS'].forEach(function (part) {
            assert(parts.indexOf(part) === -1, 'Komponen lama masih ada: ' + part);
          });
          assert(shelter.variant === 'mesh' && closeTo(shelter.genLift, .15), 'Geometri atau pondasi salah.');
          assert(shelter.callouts.every(function (c) { return parts.indexOf(c.part) !== -1; }), 'Ada label untuk komponen yang dihapus.');
          shelter.setExhaust(false); assert(!shelter.isExhaustVisible(), 'Cerobong tidak tersembunyi.');
          shelter.setExhaust(true); assert(shelter.isExhaustVisible(), 'Cerobong tidak kembali tampil.');
        } finally { shelter.dispose(); }
      });
      await test('Panel distribusi dan kWh terpisah, menghadap genset, dan terhubung ke tray', function () {
        var T = app.win.THREE;
        [[3, 2, 2.4], [4, 2, 3], [6.5, 5.2, 3.8]].forEach(function (dims) {
          var shelter = app.win.buildShelter(T, { W: dims[0], D: dims[1], H: dims[2] });
          try {
            shelter.group.updateMatrixWorld(true);
            var dist = shelter.group.getObjectByName('panel-distribution-face');
            var kwh = shelter.group.getObjectByName('panel-kwh-face');
            assert(dist && kwh && dist.parent !== kwh.parent, 'Kedua kabinet belum terpisah.');
            assert(!shelter.group.getObjectByName('panel-ats-face'), 'Muka panel lama masih ada.');
            [dist, kwh].forEach(function (face) {
              var position = face.getWorldPosition(new T.Vector3());
              var normal = new T.Vector3(0, 0, 1).applyQuaternion(face.getWorldQuaternion(new T.Quaternion()));
              assert(position.x > shelter.panelWallX + .15 && normal.x > .99, 'Muka panel tidak menghadap genset di luar dinding.');
            });
            var distBox = new T.Box3().setFromObject(dist.parent), kwhBox = new T.Box3().setFromObject(kwh.parent);
            assert(kwhBox.max.z < distBox.min.z, 'Kabinet saling tumpang.');
            assert(kwhBox.min.z > shelter.panelWallZ - shelter.panelWallLen / 2 + .18 && distBox.max.z < shelter.panelWallZ + shelter.panelWallLen / 2 - .18, 'Kabinet melewati tepi dinding atau menabrak kolom.');
            ['distribution', 'kwh'].forEach(function (name) {
              var wire = shelter.group.getObjectByName('panel-' + name + '-cable');
              var start = wire && wire.geometry.parameters.path.points[0];
              assert(start && start.x > shelter.panelWallX && closeTo(start.z, name === 'distribution' ? shelter.distZ : shelter.kwhZ), 'Kabel tidak berasal dari panel ' + name + '.');
            });
            shelter.setWalls(0); assert(!dist.visible && !kwh.visible, 'Panel tidak mengikuti transparansi pagar.');
            shelter.setWalls(1); assert(dist.visible && kwh.visible, 'Panel tidak kembali tampil.');
          } finally { shelter.dispose(); }
        });
      });
      await test('Detail panel distribusi berisi meter, indikator fasa, dan pemutus tanpa kontrol transfer', function () {
        var proto = app.win.CanvasRenderingContext2D.prototype, original = proto.fillText, labels = [], shelter;
        proto.fillText = function (text) { labels.push(String(text)); return original.apply(this, arguments); };
        try {
          shelter = app.win.buildShelter(app.win.THREE, { W: 4, D: 2, H: 3 });
          ['PANEL DISTRIBUSI', 'PENGUKURAN OUTPUT', 'PEMUTUS UTAMA', 'CABANG BEBAN', '---', 'KONSEP · RATING BELUM DITENTUKAN'].forEach(function (label) {
            assert(labels.indexOf(label) !== -1, 'Label panel distribusi hilang: ' + label);
          });
          assert(!labels.some(function (label) { return /\bATS\b|TRANSFER CONTROL|PLN ON|DELAY START|MAN \/ AUTO/i.test(label); }), 'Label kontrol transfer lama masih ada.');
          ['distribution-phase-R', 'distribution-phase-S', 'distribution-phase-T', 'distribution-main-breaker', 'distribution-branch-1', 'distribution-branch-2', 'distribution-branch-3'].forEach(function (name) {
            assert(shelter.group.getObjectByName(name), 'Komponen panel distribusi hilang: ' + name);
          });
        } finally {
          proto.fillText = original;
          if (shelter) shelter.dispose();
        }
      });
      await test('Talang bulat dan pipa turun dihapus tanpa menghapus empat tiang utama', function () {
        var shelter = app.win.buildShelter(app.win.THREE, { W: 4, D: 2, H: 3 });
        try {
          var roof, posts;
          shelter.group.traverse(function (node) {
            if (node.userData.part === 'shRoof') roof = node;
            if (node.userData.part === 'shPosts') posts = node;
          });
          assert(roof && posts && posts.children.length === 4, 'Rangka atap atau empat tiang sudut tidak lengkap.');
          var round = [];
          roof.traverse(function (node) { if (node.geometry && node.geometry.type === 'CylinderGeometry') round.push(node); });
          assert(round.length === 0, 'Elemen talang atau pipa turun masih ada pada atap.');
        } finally { shelter.dispose(); }
      });
      await test('Pintu menutup sampai kedua tiang dan as, lalu bergeser tanpa benturan', function () {
        var T = app.win.THREE;
        [[3, 2, 2.4], [4, 2, 3], [4.8, 2, 3], [6.5, 2, 3.8], [6.5, 5.2, 3.8]].forEach(function (dims) {
          var shelter = app.win.buildShelter(T, { W: dims[0], D: dims[1], H: dims[2] });
          try {
            var left = shelter.doors.gateL, right = shelter.doors.gateR, posts, panel, panelWall;
            shelter.group.traverse(function (node) {
              if (node.userData.part === 'shPosts') posts = node;
              if (node.userData.part === 'shPanel') panel = node;
              if (node.userData.part === 'shPanelWall') panelWall = node;
            });
            shelter.group.updateMatrixWorld(true);
            var frontPosts = posts.children.filter(function (p) { return closeTo(p.position.z, shelter.zf); }).sort(function (a, b) { return a.position.x - b.position.x; });
            assert(frontPosts.length === 2, 'Tiang depan tidak ditemukan.');
            var lp = new T.Box3().setFromObject(frontPosts[0]), rp = new T.Box3().setFromObject(frontPosts[1]);
            assert(panel && panelWall && closeTo(shelter.panelWallGap, 2), 'Dinding panel atau jarak servis berubah.');
            var panelBox = new T.Box3().setFromObject(panel), wallBox = new T.Box3().setFromObject(panelWall);
            var lb = new T.Box3().setFromObject(left.g), rb = new T.Box3().setFromObject(right.g);
            var width = dims[0] / 2 + .12;
            assert(closeTo(left.slip, width) && closeTo(right.slip, width), 'Lebar daun tidak dihitung sampai muka tiang.');
            assert(closeTo(lb.min.x, lp.max.x) && closeTo(rb.max.x, rp.min.x), 'Masih ada celah pada ujung luar pintu.');
            assert(closeTo(lb.max.x, 0) && closeTo(rb.min.x, 0), 'Daun tidak bertemu tepat di as atau saling tumpang.');
            assert(closeTo(left.g.position.z, right.g.position.z), 'Daun pintu tidak sejajar.');
            ['gateL', 'gateR'].forEach(function (id) {
              var edge = shelter.group.getObjectByName(id + '-edge-return');
              var back = edge && new T.Box3().setFromObject(edge).min.z;
              assert(edge && closeTo(back, shelter.zf + .052), 'Siku tepi tidak mendekati tiang atau menabrak pagar.');
            });
            // Uji beberapa posisi animasi, termasuk saat gagang melewati tiang.
            shelter.toggleDoor('gateL', true); shelter.toggleDoor('gateR', true);
            [0, .25, .5, .75, 1].forEach(function (progress) {
              left.cur = right.cur = progress; shelter.update(0);
              var eased = progress * progress * (3 - 2 * progress);
              assert(closeTo(left.g.position.x, left.home.x - width * eased) && closeTo(right.g.position.x, right.home.x + width * eased), 'Jarak geser tidak sesuai lebar daun.');
              assert(closeTo(left.g.rotation.y, 0) && closeTo(right.g.rotation.y, 0), 'Pintu berputar, bukan bergeser.');
              lb = new T.Box3().setFromObject(left.g); rb = new T.Box3().setFromObject(right.g);
              assert(lb.max.x <= rb.min.x + .001, 'Kedua daun saling bertabrakan.');
              assert(lb.min.z > shelter.zf + .05 && rb.min.z > shelter.zf + .05, 'Daun atau gagang menyentuh ujung pagar samping saat bergeser.');
              assert(!lb.intersectsBox(lp) && !rb.intersectsBox(rp), 'Daun menembus tiang saat bergeser.');
              assert(!lb.intersectsBox(panelBox) && !lb.intersectsBox(wallBox), 'Daun kiri menembus panel atau dinding panel.');
            });
            assert(closeTo(lb.max.x, lp.max.x) && closeTo(rb.min.x, rp.min.x), 'Bukaan tidak terbuka penuh.');
          } finally { shelter.dispose(); }
        });
      });
      await test('Menyembunyikan rumah memulihkan kontrol kanopi', function () {
        var doc = app.doc, rear = doc.querySelector('#door_backL').closest('li').querySelector('.row-sub');
        var limited = rear.textContent;
        click(app, '#shOn');
        assert(doc.querySelector('#shBody').hidden, 'Kontrol rumah seharusnya tersembunyi.');
        assert(doc.querySelector('#door_gateL').closest('li').hidden, 'Pintu rumah masih ditampilkan.');
        assert(!doc.querySelector('[data-id="exhaust"]').closest('li').hidden, 'Knalpot kanopi tidak tersedia.');
        assert(rear.textContent.indexOf('74°') !== -1, 'Sudut pintu belakang tidak dipulihkan.');
        click(app, '#shOn');
        assert(!doc.querySelector('#shBody').hidden && rear.textContent === limited, 'Batas pintu rumah tidak dipulihkan.');
      });
      await test('Kedua panel dapat dipilih dan ditampilkan saat pagar tersembunyi', function () {
        var doc = app.doc;
        setRange(app, 'opWall', '0');
        click(app, '#t-parts');
        click(app, '[data-id="shDistribution"]');
        assert(doc.querySelector('#infoName').textContent === 'Panel distribusi genset', 'Panel distribusi tidak terpilih.');
        assert(/pemutus utama/i.test(doc.querySelector('#infoText').textContent), 'Keterangan panel distribusi tidak sesuai.');
        assert(doc.querySelector('#opWall').value === '100', 'Panel tersembunyi tidak dipulihkan saat dipilih.');
        click(app, '[data-id="shKwh"]');
        assert(doc.querySelector('#infoName').textContent === 'Panel kWh genset', 'Panel kWh tidak terpilih.');
        assert(!doc.querySelector('[data-id="shATS"], [data-id="shGateStop"]'), 'Komponen lama masih muncul di menu.');
        assert(!/\bATS\b|ganjal/i.test(doc.body.textContent), 'Keterangan panel lama atau pengganjal masih muncul.');
      });
      await test('Pintu dan dimensi bertahan saat model dibangun ulang', async function () {
        var doc = app.doc;
        click(app, '#door_gateL');
        setRange(app, 'dimW', '4.8'); setRange(app, 'dimD', '2.5'); setRange(app, 'dimH', '3.2');
        await wait(700);
        assert(doc.querySelector('#door_gateL').checked, 'Status pintu berubah ketika dimensi diperbarui.');
        assert(doc.querySelector('#dimWVal').textContent === '4,8 m' && doc.querySelector('#dimDVal').textContent === '2,5 m', 'Output dimensi tidak diperbarui.');
        assert(doc.querySelector('#sub').textContent.indexOf('5,3 × 3,0') !== -1, 'Ukuran luar tidak diperbarui.');
        assert(doc.querySelector('#infoName').textContent === 'Panel kWh genset' && doc.querySelector('[data-id="shKwh"]').getAttribute('aria-pressed') === 'true', 'Pilihan panel hilang saat model dibangun ulang.');
        click(app, '#infoClose');
      });
      await test('Semua tampak denah mengikuti panel dan ukuran wiremesh', function () {
        var doc = app.doc;
        click(app, '#planOpen');
        assert(!doc.querySelector('#planModal').hidden, 'Denah tidak terbuka.');
        assert(doc.querySelector('#planMetrics').textContent.indexOf('2,52 m / daun') !== -1, 'Lebar daun tidak sesuai model.');
        ['sheet', 'plan', 'front', 'rear', 'left', 'right', 'roof'].forEach(function (view) {
          click(app, '[data-plan-view="' + view + '"]');
          var svg = doc.querySelector('#planSvg');
          assert(svg.children.length > 0 && !/NaN|Infinity/.test(svg.innerHTML) && !/PLESTER|\bATS\b|GANJAL/i.test(svg.innerHTML), 'Tampak tidak valid atau memuat elemen lama: ' + view);
          assert(!svg.querySelector('[fill="#d9ad32"], [fill="#d8ad32"], [data-gate-stop]'), 'Simbol pengganjal masih ada di denah.');
          assert(doc.querySelector('[data-plan-view="' + view + '"]').getAttribute('aria-pressed') === 'true', 'Tampak tidak aktif: ' + view);
          if (view === 'sheet' || view === 'plan') {
            var dist = svg.querySelector('[data-panel="distribution"]'), kwh = svg.querySelector('[data-panel="kwh"]');
            assert(dist && kwh && dist !== kwh, 'Dua panel tidak tergambar terpisah pada denah.');
            assert(Number(dist.getAttribute('y')) > Number(kwh.getAttribute('y')), 'Urutan panel pada denah tidak sesuai model.');
            checkPlanGates(svg, 2.52);
          }
          if (view === 'sheet' || view === 'front') checkFrontGates(svg, 2.52);
          if (view === 'left') assert(svg.querySelector('[data-panel-profile="distribution-kwh"]'), 'Profil dua panel tidak ada pada potongan.');
        });
        click(app, '#planClose');
      });
      await test('Denah dan elevasi menutup kedua sisi pada lebar minimum, bawaan, dan maksimum', async function () {
        var doc = app.doc;
        var sizes = [[3, 1.62, '1,62'], [4, 2.12, '2,12'], [6.5, 3.37, '3,37']];
        for (var i = 0; i < sizes.length; i++) {
          var size = sizes[i];
          setRange(app, 'dimW', String(size[0])); await wait(700);
          click(app, '#planOpen'); click(app, '[data-plan-view="plan"]');
          assert(doc.querySelector('#planMetrics').textContent.indexOf(size[2] + ' m / daun') !== -1, 'Ukuran daun salah pada lebar ' + size[0]);
          checkPlanGates(doc.querySelector('#planSvg'), size[1]);
          click(app, '[data-plan-view="front"]'); checkFrontGates(doc.querySelector('#planSvg'), size[1]);
          click(app, '#planClose');
        }
        setRange(app, 'dimW', '4.8'); await wait(700);
      });
      await test('Posisi panel pada denah tetap mengikuti genset saat kedalaman berubah', async function () {
        var doc = app.doc;
        function panelY(name) {
          var box = doc.querySelector('#planSvg [data-panel="' + name + '"]');
          assert(box, 'Panel tidak ditemukan pada denah: ' + name);
          return Number(box.getAttribute('y')) + Number(box.getAttribute('height')) / 2;
        }
        click(app, '#planOpen'); click(app, '[data-plan-view="plan"]');
        var distY = panelY('distribution'), kwhY = panelY('kwh');
        click(app, '#planClose');
        setRange(app, 'dimD', '5.2'); await wait(700);
        click(app, '#planOpen'); click(app, '[data-plan-view="plan"]');
        assert(closeTo(distY, panelY('distribution')) && closeTo(kwhY, panelY('kwh')), 'Panel bergeser dari dinding saat kedalaman berubah.');
        click(app, '#planClose');
        setRange(app, 'dimD', '2.5'); await wait(700);
      });
      await test('Tautan baru tidak menyimpan versi lama atau dekorasi', function () {
        var doc = app.doc;
        click(app, '#human');
        // Mencegah dialog clipboard pada browser yang tidak memberi izin.
        try { Object.defineProperty(app.win.navigator, 'clipboard', { configurable: true, value: { writeText: function () { return Promise.resolve(); } } }); } catch (e) { /* fallback */ }
        app.win.prompt = function () { return ''; };
        click(app, '#share');
        sharedHash = app.win.location.hash;
        var params = new URLSearchParams(sharedHash.slice(1));
        assert(params.get('v') === 'v3' && params.get('dims') === '4.8,2.5,3.2', 'Tautan baru tidak sesuai.');
        assert(!params.has('hv') && !params.has('garden') && !params.has('lights'), 'Tautan masih menyimpan kontrol yang dihapus.');
      });
      if (sharedHash) {
        var restored = await loadApp(sharedHash);
        await test('Tautan baru memulihkan dimensi, pintu, dan skala manusia', function () {
          var doc = restored.doc;
          assert(doc.querySelector('#dimW').value === '4.8' && doc.querySelector('#dimD').value === '2.5', 'Dimensi tidak dipulihkan.');
          assert(doc.querySelector('#door_gateL').checked && doc.querySelector('#human').checked, 'Pintu atau skala manusia tidak dipulihkan.');
        });
      }
      var legacy = await loadApp('#v=v2&hv=mesh&dims=4.7,2.6,3.2&roof=0.5&wall=0.3&doors=0000011&garden=1&lights=1');
      await test('Tautan wiremesh v2 lama tetap dapat digunakan', function () {
        var doc = legacy.doc;
        assert(doc.querySelector('#dimW').value === '4.7' && doc.querySelector('#dimD').value === '2.6', 'Dimensi tautan lama tidak dipulihkan.');
        assert(doc.querySelector('#opRoof').value === '50' && doc.querySelector('#opWall').value === '30', 'Transparansi tautan lama tidak dipulihkan.');
        assert(doc.querySelector('#door_gateL').checked && doc.querySelector('#door_gateR').checked, 'Pintu tautan lama tidak dipulihkan.');
        assert(!doc.querySelector('#garden, #lights'), 'Kontrol lama kembali muncul.');
      });
      var retired = await loadApp('#v=v2&hv=plaster&dims=5,4.1,3.1&doors=1111111&garden=1');
      await test('Tautan rumah plester lama kembali ke tampilan wiremesh bawaan', function () {
        var doc = retired.doc;
        assert(doc.querySelector('#dimW').value === '4' && doc.querySelector('#dimD').value === '2', 'Dimensi rumah lama ikut dipakai.');
        assert(!doc.querySelector('#door_gateL').checked && doc.querySelector('#sub').textContent.indexOf('pagar wiremesh') !== -1, 'Keadaan rumah lama masih diterapkan.');
      });
    } catch (error) {
      var li = document.createElement('li'); li.className = 'fail'; li.textContent = '✗ ' + error.message;
      results.appendChild(li); failures++;
    }
    summary.textContent = passed + ' lulus, ' + failures + ' gagal.';
    summary.dataset.done = 'true'; summary.dataset.failures = String(failures);
    runButton.disabled = false;
  }
  runButton.addEventListener('click', function () { delete summary.dataset.done; run(); });
  run();
})();
