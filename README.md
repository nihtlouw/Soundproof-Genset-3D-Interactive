# Soundproof-Genset-3D-Interactive

Interaktif 3D cutaway untuk genset bersilencer (soundproof enclosure) — pintu, dinding, dan atap bisa dibuka, plus panel instrumen untuk menjelaskan tiap komponen.

**Demo online:** https://nihtlouw.github.io/Soundproof-Genset-3D-Interactive/

## Fitur

- Cutaway 3D: pintu, dinding, atap, dan kanopi bisa dibuka atau dibuat transparan.
- **Dua versi rumah genset** (tab *Rumah → Versi rumah*):
  - **V1 · Dinding plester** — rumah kuning dengan pintu louvre ganda, atap beton, dan kusen ventilasi.
  - **V2 · Pagar wiremesh** — rangka baja ringan dengan jaring wiremesh 10 × 10 cm setinggi ±2,35 m (lebih pendek dari rumah plester) dan dua daun pintu pagar. Atap seng gelombang **menumpang langsung di balok ring puncak pagar** — tanpa celah ventilasi — jadi tinggi totalnya ±2,45 m; ventilasi sepenuhnya lewat jaring.
- Tab Pintu / Rumah / Kanopi / Bagian / Teks untuk mengatur setiap elemen.
- Sudut kamera siap pakai (depan, belakang, kiri, kanan, atas, 3D).
- Pintu tidak pernah menembus dinding/pagar: daun pintu berhenti di ±83–86°, dan pintu belakang kanopi otomatis dibatasi sesuai sisa ruang di belakang genset (ditampilkan pada label pintu).
- **Kontrol cahaya** — tab *Rumah → Cahaya* mengatur kekuatan matahari (20–130%) dengan preset *Mendung / Siang / Cerah*. Bawaannya 70% agar siang tidak menyilaukan.
- **Bagikan tampilan** — tombol *Bagikan* di kanan atas menyalin tautan yang memuat sudut kamera, pintu yang terbuka, opasitas, ukuran ruangan, versi rumah, dan sakelar. Siapa pun yang membuka tautan itu langsung melihat tampilan yang sama.

## Dasar desain (penyederhanaan praktik lapangan)

Model ini menyederhanakan praktik pemasangan genset yang umum, dengan prioritas efisiensi, keselamatan, dan kemudahan perawatan:

| Aspek | Praktik umum | Penyederhanaan di model |
| --- | --- | --- |
| Akses belakang | NEC 110.26/NFPA 110 menuntut ruang kerja 36 inci *atau* ruang untuk membuka penuh pintu engsel. Bila lahan sempit, enclosure memakai **panel lepas (removable)** | Jarak belakang dinaikkan ke **1,5 m**, jadi dua pintu belakang kanopi **bisa dibuka penuh (±79°)**; panel lepas tetap jadi alternatif bila lahan sempit |
| Jarak servis | Sisi servis 1,5–2,0 m; sisi exhaust/belakang 0,8–1,0 m | Jarak belakang **1,5 m**, jarak depan mengikuti kedalaman ruangan (bawaan **1,5 m**; ruang 5,0 × 4,1 × 3,1 m), ditampilkan di tab Rumah dengan tombol *Samakan ke standar (4,1 m)* |
| Ventilasi | Bukaan masuk 1–1,5× luas radiator, keluar 2–3×; inlet rendah, outlet tinggi | V2: seluruh bidang pagar wiremesh (bukaan ±50–60%) menjadi jalur udara; atap rapat di atas balok ring |
| Buang asap | Cerobong harus keluar di atas enclosure; pada enclosure rangka, jalur naik lewat atap lebih rapi daripada menembus dinding | **V1:** knalpot mendatar 1,5 m ke dinding belakang lalu naik. **V2:** pagar tidak dilubangi — knalpot kanopi naik lurus menembus atap seng lewat collar, ujungnya diberi sambungan + penutup hujan |
| Atap | Atap menjorok untuk menahan hujan, bukan menutup rapat | Atap seng/beton menjorok 0,6 m di depan, celah ventilasi tetap terbuka |
| Panjang daun pintu | Daun pintu tidak boleh membentur dinding/pagar | Sudut buka dihitung otomatis dari ruang yang tersedia (`asin(ruang / lebar daun)`) |

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
