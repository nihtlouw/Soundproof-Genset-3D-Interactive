# Soundproof-Genset-3D-Interactive

Interaktif 3D cutaway untuk genset bersilencer (*soundproof enclosure*), dengan rumah pagar wiremesh, pintu yang dapat dibuka, dan panel instrumen untuk menjelaskan komponennya.

**Demo online:** https://nihtlouw.github.io/Soundproof-Genset-3D-Interactive/

## Fitur

- **Rumah genset V2 · pagar wiremesh** menjadi model utama. Ukuran bersih bawaan 4,00 × 2,00 × 3,00 m, dengan isi pagar 25 cm dan ukuran luar 4,50 × 2,50 m. Dimensi dapat diubah melalui tab *Rumah*.
- Pagar memiliki jaring 10 × 10 cm, empat tiang hollow 60 × 60 mm di sudut, gable terbuka dengan rangka baja ringan, dan louvre pada kedua bidang atap spandek. Elemen talang bulat dan pipa turun tidak ditampilkan. Dua pintu geser sama lebar berada pada satu garis rel, bertemu di tengah, dan dilengkapi ganjal roda.
- **Dua kabinet terpisah**—panel ATS dan panel kWh genset—berjajar pada dinding tersendiri 2,00 m di luar pagar, dengan muka panel menghadap genset. Jalur kabel konsep melewati *cable tray* menuju genset. Pondasi 15 cm hanya berada di bawah dudukan genset; lantai servis dan rel pintu tetap rata.
- Cutaway 3D: pintu kanopi, pagar, dan atap dapat dibuka atau dibuat transparan. Cerobong yang dimodelkan tersambung dari turbo dan berhenti di bawah atap tanpa menembus spandek.
- **Denah konsep 2D multi-tampak** (tombol *Denah 2D*): lembar berukuran, denah atas, depan, belakang, kiri, kanan, dan atap mengikuti dimensi yang aktif. Lembar dapat diunduh sebagai SVG atau dicetak.
- Tab *Pintu / Rumah / Kanopi / Bagian / Teks* untuk mengatur elemen, teks, dan cahaya. Sudut kamera siap pakai meliputi depan, belakang, kiri, kanan, atas, dan 3D.
- Sudut pintu kanopi dibatasi sesuai ruang yang tersedia saat rumah ditampilkan; tanpa rumah, sudut aslinya dipulihkan. Pintu rumah bergeser ke samping, bukan berayun ke pagar.
- **Bagikan tampilan** menyimpan kamera, pintu, opasitas, ukuran, dan sakelar dalam tautan `v3`. Tautan `v2` lama untuk rumah wiremesh tetap dapat dibuka; tautan rumah plester lama diabaikan dan memakai tampilan bawaan.

Rumah plester V1 dan dekorasi taman (termasuk pohon palem) sudah dihapus dari model dan kontrol. Lihat [`docs/rencana-v2.md`](docs/rencana-v2.md) untuk ringkasan rancangan wiremesh dan batasan model.

## Batasan desain

Gambar dan model adalah **konsep visual untuk koordinasi**, bukan gambar kerja struktur, pondasi, kelistrikan, atau izin pelaksanaan. Jarak servis, jalur knalpot dan kabel yang ditampilkan adalah penyederhanaan rancangan, bukan verifikasi keselamatan; sistem pembuangan air hujan tidak diperinci. Konsultasikan ventilasi, pembuangan gas dan air, jarak kerja, serta persyaratan setempat dengan tenaga ahli sebelum pelaksanaan.

## Menjalankan

Tidak diperlukan build step. Buka `index.html` di browser, atau jalankan static server:

```bash
python3 -m http.server 8000
```

Lalu buka http://localhost:8000. Model 3D membutuhkan browser dengan WebGL.

### Pengujian

Setelah server berjalan, buka http://localhost:8000/tests/smoke.html untuk memeriksa posisi dan arah kedua panel, atap tanpa talang bulat, pintu geser, kontrol dimensi, semua tampak denah, dan kompatibilitas tautan berbagi. Pengujian memerlukan WebGL dan dapat dijalankan lagi melalui tombol di halaman tersebut.

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
| `docs/img/v2-pagar-rencana.svg` | Referensi visual awal V2; bukan sumber dimensi kerja |
| `docs/img/v2-pagar-pratinjau.png` | Snapshot historis sebelum koreksi visual terbaru |
