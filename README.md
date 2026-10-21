# Soundproof-Genset-3D-Interactive

Interaktif 3D cutaway untuk genset bersilencer (soundproof enclosure) — pintu, dinding, dan atap bisa dibuka, plus panel instrumen untuk menjelaskan tiap komponen.

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

## Struktur

| File | Keterangan |
| --- | --- |
| `index.html` | Aplikasi lengkap (HTML, CSS, JS) |
