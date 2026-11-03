# Soundproof-Genset-3D-Interactive

Interaktif 3D cutaway untuk genset bersilencer (soundproof enclosure) — pintu, dinding, dan atap bisa dibuka, plus panel instrumen untuk menjelaskan tiap komponen.

**Demo online:** https://nihtlouw.github.io/Soundproof-Genset-3D-Interactive/

## Fitur

- Cutaway 3D: pintu, dinding, atap, dan kanopi bisa dibuka atau dibuat transparan.
- **Dua versi rumah genset** (tab *Rumah → Versi rumah*):
  - **V1 · Dinding plester** — rumah kuning dengan pintu louvre ganda, atap beton, dan kusen ventilasi.
    Ukuran bawaan V1: 5,0 × 4,1 × 3,1 m. Ukuran bawaan V2: 4,0 × 2,0 × 3,0 m **diukur dari dalam pagar**, jadi modul luarnya 4,50 × 2,50 m.
  - **V2 · Pagar wiremesh** — dibuat dari sketsa lapangan klien: modul **4,50 × 2,50 m** dengan pagar isi **25 cm** (ruang bersih 4,00 × 2,00 m), rangka hollow 60 × 60, jaring wiremesh 10 × 10 cm keliling, **atap spandek pelana (gable) dengan bubungan memanjang** (pagar 2,40 m + balok ring 10 cm + naik atap 50 cm = **3,00 m**), **pintu geser samping 2 daun** dengan roda di rel bawah, **knalpot yang berhenti di bawah atap** (spandek tidak dilubangi) dengan **kisi ventilasi keluar di kedua ujung bubungan**, dan **panel genset + kWh di dinding samping luar**. Analisis, keputusan, dan hasil implementasi didokumentasikan di [`docs/rencana-v2.md`](docs/rencana-v2.md); gambar rencananya ada di [`docs/img/v2-pagar-rencana.svg`](docs/img/v2-pagar-rencana.svg).
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
| Ventilasi | Bukaan masuk 1–1,5× luas radiator, keluar 2–3×; inlet rendah, outlet tinggi | V2: inlet seluruh bidang pagar wiremesh (bukaan ±50–60%), outlet **kisi louvre di kedua ujung bubungan** (titik tertinggi) |
| Buang asap | Cerobong harus keluar di atas enclosure; pada enclosure rangka, jalur naik lewat atap lebih rapi daripada menembus dinding | **V1:** knalpot mendatar 1,5 m ke dinding belakang lalu naik. **V2:** pagar tidak dilubangi dan atap spandek juga tidak dilubangi — ujung knalpot kanopi hanya diberi collar + tudung hujan lalu digantung ke rangka atap, jadi seluruh jalur gas buang berhenti di bawah atap (sesuai revisi klien). Panas yang naik ke rongga bubungan keluar lewat kisi di kedua ujung atap |
| Atap | Atap menjorok untuk menahan hujan, bukan menutup rapat | Atap seng/beton menjorok 0,6 m di depan, celah ventilasi tetap terbuka |
| Panjang daun pintu | Daun pintu tidak boleh membentur dinding/pagar | V1: sudut buka dihitung otomatis dari ruang yang tersedia (`asin(ruang / lebar daun)`). V2: pintu geser, jadi tidak ada sudut buka; rel diperpanjang ke samping sebagai tempat parkir daun |
| Jarak servis V2 | Kanopi genset butuh ruang untuk membuka panel | Modul 2,50 m memberi **0,4 m** di belakang dan **0,5 m** di depan kanopi; panel belakang dibuat lepas karena ruangnya sempit. Tinggi 3,00 m dipilih agar panel kanopi tetap bisa dibuka (pagar 2,40 m saja tidak cukup) |

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
| `docs/rencana-v2.md` | Analisis sketsa klien + rencana V2 (angka, keputusan, daftar pekerjaan) |
| `docs/img/v2-pagar-rencana.svg` | Gambar rencana V2: denah, tampak samping, tampak depan, catatan, bahan |
| `docs/img/v2-pagar-pratinjau.png` | Pratinjau model 3D V2 yang sudah diperbarui (4 sudut) |
