# Soundproof-Genset-3D-Interactive

Interaktif 3D cutaway untuk genset bersilencer (soundproof enclosure) — pintu, dinding, dan atap bisa dibuka, plus panel instrumen untuk menjelaskan tiap komponen.

**Demo online:** https://nihtlouw.github.io/Soundproof-Genset-3D-Interactive/

## Fitur

- Cutaway 3D: pintu, dinding, atap, dan kanopi bisa dibuka atau dibuat transparan.
- Tab Pintu / Rumah / Kanopi / Bagian / Teks untuk mengatur setiap elemen.
- Sudut kamera siap pakai (depan, belakang, kiri, kanan, atas, 3D).
- **Bagikan tampilan** — tombol *Bagikan* di kanan atas menyalin tautan yang memuat sudut kamera, pintu yang terbuka, opasitas, ukuran ruangan, dan sakelar. Siapa pun yang membuka tautan itu langsung melihat tampilan yang sama.

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
