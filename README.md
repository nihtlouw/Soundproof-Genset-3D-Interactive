# Soundproof-Genset-3D-Interactive

Interaktif 3D cutaway untuk genset bersilencer (*soundproof enclosure*), dengan rumah pagar wiremesh, pintu yang dapat dibuka, dan panel instrumen untuk menjelaskan komponennya.

**Demo online:** https://nihtlouw.github.io/Soundproof-Genset-3D-Interactive/

## Dua workspace

Halaman ini berisi dua lembar kerja. Pemilihnya ada di HUD kiri atas, dan tautan `#ws=ws01` / `#ws=ws02` membuka lembar yang dituju.

| Workspace | Isi |
| --- | --- |
| **01 · Rumah genset** | Rumah genset pagar wiremesh 4,50 × 2,50 m dengan genset soundproof, dua pintu geser, atap spandek, dan dinding panel terpisah. Ini lembar pertama yang terbuka. |
| **02 · Panel pagar** | Satu panel pagar wiremesh **160 × 120 cm** dengan **kaki segitiga 30 cm**, lengkap dengan kontrol ukuran, tabel detail kaki, dan lembar gambar 2D tersendiri. |

## Fitur

- **Rumah genset V2 · pagar wiremesh** menjadi model utama workspace 01. Ukuran bersih bawaan 4,00 × 2,00 × 3,00 m, dengan isi pagar 25 cm dan ukuran luar 4,50 × 2,50 m. Dimensi dapat diubah melalui tab *Rumah*.
- Pagar memiliki jaring 10 × 10 cm, empat tiang hollow 60 × 60 mm di sudut, gable terbuka dengan rangka baja ringan, dan louvre pada kedua bidang atap spandek. Dua daun geser sejajar bertemu di tengah dan mencapai muka dalam kedua tiang; lebarnya masing-masing 2,12 m pada ukuran bawaan. Elemen talang bulat, pipa turun, dan pengganjal pintu tidak ditampilkan.
- **Dua kabinet terpisah**—panel distribusi genset dan panel kWh genset—berjajar pada dinding tersendiri 2,00 m di luar pagar, dengan muka panel menghadap genset. Pusat dinding dimundurkan 0,45 m dari pusat genset agar tidak menghalangi lintasan pintu. Panel distribusi menampilkan indikator fasa, meter serta pemutus utama dan cabang secara konseptual, tanpa menentukan rating. Jalur kabel konsep melewati *cable tray* menuju genset. Pondasi 15 cm hanya berada di bawah dudukan genset; lantai servis dan rel pintu tetap rata.
- Cutaway 3D: pintu kanopi, pagar, dan atap dapat dibuka atau dibuat transparan. Cerobong yang dimodelkan tersambung dari turbo dan berhenti di bawah atap tanpa menembus spandek.
- **Denah konsep 2D multi-tampak** (tombol *Denah 2D*): satu lembar gambar bergaya studio berisi enam gambar bernomor `01–06` — denah atas, tampak depan, rencana atap, tampak belakang, sisi kiri (panel), dan sisi kanan (cerobong). Tiap gambar memakai rantai dimensi berskala cm dengan takik, penanda elevasi `±0,00 / +2,40 / +3,00`, garis tanah berhatch, dan pola material; kop memuat judul, versi, ukuran, serta legenda, dan dimensi samping berisi ukuran utama serta catatan lapangan. Semua angka mengikuti dimensi yang aktif. Lembar dapat diunduh sebagai SVG atau dicetak.
- Tab *Pintu / Rumah / Kanopi / Bagian / Teks* untuk mengatur elemen, teks, dan cahaya. Sudut kamera siap pakai meliputi depan, belakang, kiri, kanan, atas, dan 3D.
- Sudut pintu kanopi dibatasi sesuai ruang yang tersedia saat rumah ditampilkan; tanpa rumah, sudut aslinya dipulihkan. Pintu rumah bergeser ke samping, bukan berayun ke pagar.
- **Workspace 02 · panel pagar wiremesh**: panel 160 × 120 cm dengan rangka pipa 40 × 40 mm, jaring 10 × 10 cm, dan dua kaki segitiga 30 cm (batang mendatar 30 cm + batang miring ke tepi atas). Tab *Panel* mengatur lebar/tinggi panel, tab *Kaki* mengatur kedalaman kaki, profil, alas, dan hubung silang, sedangkan *Tampilan* mengatur jaring, garis tepi, ukuran di layar, warna, cahaya, dan tautan bagikan. Pelat segitiga pengaku pada kaki (seperti foto) tersedia sebagai sakelar di tab *Kaki*. Lembar 2D-nya berisi lima gambar: tampak depan, tampak samping, denah, detail kaki, dan detail mata jaring; semua angka mengikuti kontrol. Lihat [`docs/rencana-panel-pagar.md`](docs/rencana-panel-pagar.md).
- **Bagikan tampilan** menyimpan kamera, pintu, opasitas, ukuran, dan sakelar dalam tautan `v3` (rumah genset) atau `p1` (panel), beserta kunci `ws` untuk lembar yang aktif. Tautan `v2` lama untuk rumah wiremesh tetap dapat dibuka; tautan rumah plester lama diabaikan dan memakai tampilan bawaan.

Rumah plester V1 dan dekorasi taman (termasuk pohon palem) sudah dihapus dari model dan kontrol. Lihat [`docs/rencana-v2.md`](docs/rencana-v2.md) untuk ringkasan rancangan wiremesh dan batasan model.

## Batasan desain

Gambar dan model adalah **konsep visual untuk koordinasi**, bukan gambar kerja struktur, pondasi, kelistrikan, atau izin pelaksanaan. Rel dan pemandu hanya digambar sepanjang modul luar, sementara animasi membuka daun ke luar modul; dukungan rel saat pintu terbuka dan pengaman operasional perlu dirancang tersendiri. Jarak servis, panel, jalur knalpot dan kabel adalah penyederhanaan, bukan verifikasi keselamatan atau spesifikasi listrik; sistem pembuangan air hujan tidak diperinci. Konsultasikan semua hal tersebut dan persyaratan setempat dengan tenaga ahli sebelum pelaksanaan.

## Menjalankan

Tidak diperlukan build step. Buka `index.html` di browser, atau jalankan static server:

```bash
python3 -m http.server 8000
```

Lalu buka http://localhost:8000. Model 3D membutuhkan browser dengan WebGL.

### Pengujian

Setelah server berjalan, buka http://localhost:8000/tests/smoke.html untuk memeriksa panel distribusi dan kWh, atap, penutupan kedua pintu pada tiang dan as tengah, kontrol dimensi, tampak denah, kompatibilitas tautan berbagi, serta workspace 02 (panel 160 × 120 cm dengan kaki segitiga 30 cm, lembar gambar, dan tautan `p1`). Pengujian memerlukan WebGL dan dapat dijalankan lagi melalui tombol di halaman tersebut.

## Dependensi

- three.js r128 disertakan secara lokal di `vendor/three.min.js` (lisensi MIT di `vendor/THREE-LICENSE.txt`), sehingga model tidak bergantung pada CDN.
- Font Google (Space Grotesk, Inter, JetBrains Mono) dimuat bila tersedia; font sistem digunakan sebagai cadangan saat luring.

## Deploy (GitHub Pages)

Repo ini statis. Pada **Settings → Pages**, pilih **Deploy from a branch**, lalu branch **main** dan folder **/(root)**. Pastikan folder `vendor/` ikut diterbitkan bersama `index.html`.

## Struktur

| File | Keterangan |
| --- | --- |
| `index.html` | Aplikasi HTML, CSS, dan JavaScript |
| `vendor/three.min.js` | Dependensi three.js r128 untuk rendering 3D |
| `tests/smoke.html` | Pengujian regresi interaktif di browser |
| `docs/rencana-v2.md` | Ringkasan keputusan dan batasan rumah wiremesh |
| `docs/rencana-panel-pagar.md` | Ringkasan ukuran, bentuk, dan batasan panel pagar 160 × 120 cm (workspace 02) |
| `docs/img/v2-pagar-rencana.svg` | Referensi visual awal V2; bukan sumber dimensi kerja |
| `docs/img/v2-pagar-pratinjau.png` | Snapshot historis sebelum koreksi visual terbaru |

## Video presentasi

[`docs/genset-16x9-1080p.mp4`](docs/genset-16x9-1080p.mp4) — video 16:9 1920×1080, 30 fps, 2 menit 45 detik, tanpa teks maupun narasi. Urutannya: model 3D berputar dari depan, kiri (sisi dinding panel), belakang, kanan (sisi cerobong), atas, lalu masuk ke dalam rumah; setelah itu lembar denah 2D muncul dan bergerak pelan menyusuri lembar, denah, tampak depan, kiri, kanan, belakang, rencana atap, satu pengambilan detail dimensi, lalu kembali ke lembar penuh.

Video ini dirender dari model yang sama dengan aplikasi (geometri, tekstur, dan lembar SVG diambil langsung dari `index.html`), bukan dari gambar terpisah. Skrip pembuatnya ada di [`tools/video`](../tools/video) dan dijelaskan di README folder tersebut.
