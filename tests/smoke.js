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
          ['shWalls', 'shRoof', 'shPanelWall', 'shGateStop', 'shExhaust'].forEach(function (part) {
            assert(parts.indexOf(part) !== -1, 'Komponen hilang: ' + part);
          });
          ['shGarden', 'shLights', 'shScreen', 'shVentIn', 'shVentOut'].forEach(function (part) {
            assert(parts.indexOf(part) === -1, 'Komponen lama masih ada: ' + part);
          });
          assert(shelter.variant === 'mesh' && closeTo(shelter.genLift, .15), 'Geometri atau pondasi salah.');
          assert(shelter.callouts.every(function (c) { return parts.indexOf(c.part) !== -1; }), 'Ada label untuk komponen yang dihapus.');
          shelter.setExhaust(false); assert(!shelter.isExhaustVisible(), 'Cerobong tidak tersembunyi.');
          shelter.setExhaust(true); assert(shelter.isExhaustVisible(), 'Cerobong tidak kembali tampil.');
        } finally { shelter.dispose(); }
      });
      await test('Panel ATS dan kWh terpisah, menghadap genset, dan terhubung ke tray', function () {
        var T = app.win.THREE;
        [[3, 2, 2.4], [6.5, 5.2, 3.8]].forEach(function (dims) {
          var shelter = app.win.buildShelter(T, { W: dims[0], D: dims[1], H: dims[2] });
          try {
            shelter.group.updateMatrixWorld(true);
            var ats = shelter.group.getObjectByName('panel-ats-face');
            var kwh = shelter.group.getObjectByName('panel-kwh-face');
            assert(ats && kwh && ats.parent !== kwh.parent, 'Kedua kabinet belum terpisah.');
            [ats, kwh].forEach(function (face) {
              var position = face.getWorldPosition(new T.Vector3());
              var normal = new T.Vector3(0, 0, 1).applyQuaternion(face.getWorldQuaternion(new T.Quaternion()));
              assert(position.x > shelter.panelWallX + .15 && normal.x > .99, 'Muka panel tidak menghadap genset di luar dinding.');
            });
            var atsBox = new T.Box3().setFromObject(ats.parent), kwhBox = new T.Box3().setFromObject(kwh.parent);
            assert(kwhBox.max.z < atsBox.min.z, 'Kabinet saling tumpang.');
            assert(kwhBox.min.z > shelter.panelWallZ - shelter.panelWallLen / 2 + .18 && atsBox.max.z < shelter.panelWallZ + shelter.panelWallLen / 2 - .18, 'Kabinet melewati tepi dinding atau menabrak kolom.');
            ['ats', 'kwh'].forEach(function (name) {
              var wire = shelter.group.getObjectByName('panel-' + name + '-cable');
              var start = wire && wire.geometry.parameters.path.points[0];
              assert(start && start.x > shelter.panelWallX && closeTo(start.z, name === 'ats' ? shelter.atsZ : shelter.kwhZ), 'Kabel tidak berasal dari panel ' + name + '.');
            });
            shelter.setWalls(0); assert(!ats.visible && !kwh.visible, 'Panel tidak mengikuti transparansi pagar.');
            shelter.setWalls(1); assert(ats.visible && kwh.visible, 'Panel tidak kembali tampil.');
          } finally { shelter.dispose(); }
        });
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
      await test('Kedua pintu rumah bergeser simetris tanpa berputar', function () {
        var shelter = app.win.buildShelter(app.win.THREE, { W: 4, D: 2, H: 3 });
        try {
          var left = shelter.doors.gateL, right = shelter.doors.gateR;
          var lx = left.g.position.x, rx = right.g.position.x, z = left.g.position.z;
          assert(closeTo(z, right.g.position.z), 'Daun pintu tidak sejajar.');
          shelter.toggleDoor('gateL', true, true); shelter.toggleDoor('gateR', true, true);
          assert(closeTo(left.g.position.x, lx - 2) && closeTo(right.g.position.x, rx + 2), 'Jarak geser tidak sesuai lebar daun.');
          assert(closeTo(left.g.rotation.y, 0) && closeTo(right.g.rotation.y, 0), 'Pintu berputar, bukan bergeser.');
        } finally { shelter.dispose(); }
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
        click(app, '[data-id="shATS"]');
        assert(doc.querySelector('#infoName').textContent === 'Panel ATS', 'Panel ATS tidak terpilih.');
        assert(doc.querySelector('#opWall').value === '100', 'Panel tersembunyi tidak dipulihkan saat dipilih.');
        click(app, '[data-id="shKwh"]');
        assert(doc.querySelector('#infoName').textContent === 'Panel kWh genset', 'Panel kWh tidak terpilih.');
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
      await test('Semua tampak denah mengikuti ukuran wiremesh', function () {
        var doc = app.doc;
        click(app, '#planOpen');
        assert(!doc.querySelector('#planModal').hidden, 'Denah tidak terbuka.');
        assert(doc.querySelector('#planMetrics').textContent.indexOf('2,4 m / daun') !== -1, 'Lebar daun tidak sesuai model.');
        ['sheet', 'plan', 'front', 'rear', 'left', 'right', 'roof'].forEach(function (view) {
          click(app, '[data-plan-view="' + view + '"]');
          var svg = doc.querySelector('#planSvg');
          assert(svg.children.length > 0 && !/NaN|Infinity|PLESTER/.test(svg.innerHTML), 'Tampak tidak valid: ' + view);
          assert(doc.querySelector('[data-plan-view="' + view + '"]').getAttribute('aria-pressed') === 'true', 'Tampak tidak aktif: ' + view);
          if (view === 'sheet' || view === 'plan') {
            var ats = svg.querySelector('[data-panel="ats"]'), kwh = svg.querySelector('[data-panel="kwh"]');
            assert(ats && kwh && ats !== kwh, 'Dua panel tidak tergambar terpisah pada denah.');
            assert(Number(ats.getAttribute('y')) > Number(kwh.getAttribute('y')), 'Urutan panel pada denah tidak sesuai model.');
          }
          if (view === 'left') assert(svg.querySelector('[data-panel-profile="ats-kwh"]'), 'Profil dua panel tidak ada pada potongan.');
        });
        click(app, '#planClose');
      });
      await test('Posisi panel pada denah tetap mengikuti genset saat kedalaman berubah', async function () {
        var doc = app.doc;
        function panelY(name) {
          var box = doc.querySelector('#planSvg [data-panel="' + name + '"]');
          assert(box, 'Panel tidak ditemukan pada denah: ' + name);
          return Number(box.getAttribute('y')) + Number(box.getAttribute('height')) / 2;
        }
        click(app, '#planOpen'); click(app, '[data-plan-view="plan"]');
        var atsY = panelY('ats'), kwhY = panelY('kwh');
        click(app, '#planClose');
        setRange(app, 'dimD', '5.2'); await wait(700);
        click(app, '#planOpen'); click(app, '[data-plan-view="plan"]');
        assert(closeTo(atsY, panelY('ats')) && closeTo(kwhY, panelY('kwh')), 'Panel bergeser dari dinding saat kedalaman berubah.');
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
