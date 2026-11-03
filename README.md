# Soundproof-Genset-3D-Interactive

Interaktif 3D cutaway untuk genset bersilencer (soundproof enclosure) — pintu, dinding, dan atap bisa dibuka, plus panel instrumen untuk menjelaskan tiap komponen.

**Demo online:** https://nihtlouw.github.io/Soundproof-Genset-3D-Interactive/

## Fitur

- Cutaway 3D: pintu, dinding, atap, dan kanopi bisa dibuka atau dibuat transparan.
- **Denah konsep 2D multi-tampak** (tombol *Denah 2D*): lembar berukuran, denah atas, depan, belakang, kiri, kanan, dan atap; ukuran mengikuti versi dan slider dimensi yang aktif. Termasuk zona genset, panel/kWh dan jalur kabel, pintu geser/rel/ganjal, louvre atap, catatan lapangan, serta unduh SVG/cetak. Gambar adalah konsep koordinasi, bukan gambar kerja konstruksi.
- **Dua versi rumah genset** (tab *Rumah → Versi rumah*):
  - **V1 · Dinding plester** — rumah kuning dengan pintu louvre ganda, atap beton, dan kusen ventilasi.
    Ukuran bawaan V1: 5,0 × 4,1 × 3,1 m. Ukuran bawaan V2: 4,0 × 2,0 × 3,0 m **diukur dari dalam pagar**, jadi modul luarnya 4,50 × 2,50 m.
  - **V2 · Pagar wiremesh** — modul bawaan aplikasi **4,50 × 2,50 m** dengan pagar isi **25 cm** (ruang bersih 4,00 × 2,00 m), jaring wiremesh 10 × 10 cm, **hanya empat tiang hollow 60 × 60 mm di sudut**, serta **gable segitiga terbuka** dengan rangka baja ringan yang terlihat (tanpa panel penutup atau louvre di ujung). Louvre tetap ada pada **kedua bidang spandek miring**. Pintu geser terdiri dari dua daun sama lebar dan simetris pada **satu garis rel**: keduanya sejajar dan bertemu tepat di as pintu tanpa tumpang, gagang simetris di stile pertemuan, rel dibatasi modul, dengan ganjal roda saat terbuka.
  - **Koreksi tata letak V2 (revisi sketsa lapangan)** — **panel genset + kWh dipindahkan ke dinding panel tersendiri yang berdiri 2,00 m di luar pagar wiremesh** (bukan menempel di pagar), dihubungkan cable tray dan dua jalur kabel menuju gland pagar; **pondasi 15 cm hanya di bawah dudukan genset** (bukan sloof keliling seluruh rumah genset), sehingga genset terangkat 15 cm di atas lantai kerja sementara pintu, rel, dan lantai servis tetap satu level. Knalpot V2 dibentuk ulang dari turbo melalui elbow dan joint fleksibel ke stack tegak bertudung, berhenti 16 cm di bawah spandek tanpa melubanginya. Kabinet kontrol luar meniru susunan foto (indikator, voltmeter/timer, tombol) dan dipasang pada pelat dudukan solid lokal; meter kWh terpisah serta pasangan kabel ke genset tetap ditampilkan. Downlight tidak dipasang di V2, sedangkan V1 tidak berubah. Nilai model dapat diatur di aplikasi; gambar rencana SVG adalah referensi visual awal, bukan sumber dimensi kerja. Lihat [`docs/rencana-v2.md`](docs/rencana-v2.md) untuk ringkasan keputusan dan batasan model.
- Tab Pintu / Rumah / Kanopi / Bagian / Teks untuk mengatur setiap elemen.
- Sudut kamera siap pakai (depan, belakang, kiri, kanan, atas, 3D).
- Pintu tidak pernah menembus dinding/pagar: di V1 daun pintu berhenti di ±83–86° (pintu belakang kanopi dibatasi sesuai sisa ruang di belakang genset), di V2 daun pintu **meluncur ke samping** di relnya masing-masing sehingga tidak mungkin membentur pagar.
- **Kontrol cahaya** — tab *Rumah → Cahaya* mengatur kekuatan matahari (20–130%) dengan preset *Mendung / Siang / Cerah*. Bawaannya 70% agar siang tidak menyilaukan.
- **Bagikan tampilan** — tombol *Bagikan* di kanan atas menyalin tautan yang memuat sudut kamera, pintu yang terbuka, opasitas, ukuran ruangan, versi rumah, dan sakelar. Siapa pun yang membuka tautan itu langsung melihat tampilan yang sama. Kunci format tautan kini `v2`, jadi tautan lama (dari versi V2 yang lama) tidak menampilkan campuran pengaturan.

## Dasar desain (penyederhanaan praktik lapangan)

Model ini menyederhanakan praktik pemasangan genset yang umum, dengan prioritas efisiensi, keselamatan, dan kemudahan perawatan:

| Aspek | Praktik umum | Penyederhanaan di model |
| --- | --- | --- |
| Akses belakang | NEC 110.26/NFPA 110 menuntut ruang kerja 36 inci *atau* ruang untuk membuka penuh pintu engsel. Bila lahan sempit, enclosure memakai **panel lepas (removable)** | Jarak belakang dinaikkan ke **1,5 m**, jadi dua pintu belakang kanopi **bisa dibuka penuh (±79°)**; panel lepas tetap jadi alternatif bila lahan sempit |
| Jarak servis | Sisi servis 1,5–2,0 m; sisi exhaust/belakang 0,8–1,0 m | Jarak belakang **1,5 m**, jarak depan mengikuti kedalaman ruangan (bawaan **1,5 m**; ruang 5,0 × 4,1 × 3,1 m), ditampilkan di tab Rumah dengan tombol *Samakan ke standar (4,1 m)* |
| Ventilasi | Bukaan masuk 1–1,5× luas radiator, keluar 2–3×; inlet rendah, outlet tinggi | V2: inlet melalui bidang pagar wiremesh; louvre berada pada kedua bidang miring spandek. Kedua gable dibiarkan terbuka dengan rangka baja ringan, bukan panel/kisi ujung |
| Buang asap | Cerobong harus keluar di atas enclosure; pada enclosure rangka, jalur naik lewat atap lebih rapi daripada menembus dinding | **V1:** knalpot mendatar 1,5 m ke dinding belakang lalu naik. **V2:** pagar dan atap spandek tidak dilubangi — ujung knalpot kanopi diberi collar + tudung hujan dan digantung ke rangka atap, seluruh jalur berhenti di bawah atap. Ventilasi atap tetap terbuka melalui louvre pada dua bidang spandek dan gable terbuka |
| Atap | Atap menjorok untuk menahan hujan, bukan menutup rapat | Atap seng/beton menjorok 0,6 m di depan, celah ventilasi tetap terbuka |
| Panjang daun pintu | Daun pintu tidak boleh membentur dinding/pagar | V1: sudut buka dihitung otomatis dari ruang yang tersedia (`asin(ruang / lebar daun)`). V2: dua daun geser simetris; rel/pemandu hanya sepanjang modul 4,50 m, lalu roda ditahan pengganjal saat parkir di samping |
| Jarak servis V2 | Kanopi genset butuh ruang untuk membuka panel | Modul 2,50 m memberi **0,4 m** di belakang dan **0,5 m** di depan kanopi; panel belakang dibuat lepas karena ruangnya sempit. Tinggi 3,00 m dipilih agar panel kanopi tetap bisa dibuka (pagar 2,40 m saja tidak cukup) |
| Peletakan panel listrik | Kabinet kontrol di luar enclosure, dijangkau saat servis | Kabinet + kWh berada di **dinding panel tersendiri 2,00 m dari pagar wiremesh**, bukan menempel di pagar; kabel melintasi jalur servis lewat cable tray dan masuk gland pagar |
| Pondasi genset | Dudukan beton setinggi ±15 cm hanya di bawah unit, bukan sloof keliling | **Pondasi 15 cm hanya seluas dudukan genset**; pagar wiremesh berdiri di atas pelat lantai tipis, jadi pintu geser dan lantai servis tetap rata |

## Menjalankan

Semuanya ada di satu file, tanpa build step:

- Buka `index.html` langsung di browser, atau
- Jalankan static server lokal:

  ```bash
  python3 -m http.server 8000
  ```

  lalu buka http://localhost:8000

## Dependensi

Dimuat dari CDN saat runtime:

- three.js r128 — https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js
- Google Fonts — Barlow Condensed, IBM Plex Sans, IBM Plex Mono

Butuh koneksi internet untuk memuat keduanya.

## Deploy (GitHub Pages)

Repo ini statis, jadi GitHub Pages bisa menyajikan `main` langsung:

1. Buka **Settings → Pages**.
2. Di **Build and deployment → Source**, pilih **Deploy from a branch**.
3. Branch **main**, folder **/(root)**, lalu **Save**.

Situs terbit di https://nihtlouw.github.io/Soundproof-Genset-3D-Interactive/ (perlu ~1 menit).

## Struktur

| File | Keterangan |
| --- | --- |
| `index.html` | Aplikasi lengkap (HTML, CSS, JS) |
| `docs/rencana-v2.md` | Ringkasan keputusan dan batasan V2 terbaru; ukuran kerja berasal dari model aplikasi |
| `docs/img/v2-pagar-rencana.svg` | Referensi visual awal V2 (termasuk gable terbuka); bukan sumber dimensi kerja |
| `docs/img/v2-pagar-pratinjau.png` | Snapshot historis sebelum koreksi visual terbaru; model aktif tersedia di demo |
