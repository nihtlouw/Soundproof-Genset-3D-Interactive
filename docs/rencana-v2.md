# Analisis Sketsa & Rencana V2 — Rumah Genset Pagar Wiremesh

Dokumen ini adalah **tahap analisis + rencana**, belum ada perubahan pada model 3D.
Setelah kamu konfirmasi (bagian 6), rencananya langsung saya terapkan ke
[Soundproof-Genset-3D-Interactive](https://nihtlouw.github.io/Soundproof-Genset-3D-Interactive/)
pada tab **Rumah → Versi rumah → V2 · Pagar wiremesh**.

Gambar rencana: `docs/img/v2-pagar-rencana.svg` (juga tersedia `.png`).

---

## 1 · Apa yang ada di sketsa

Ada lima gambar di satu lembar:

| Gambar | Isi |
| --- | --- |
| **Tampak samping** (kiri atas) | Potongan melintang: dinding pagar, **atap spandek berbentuk bubungan (limas)** di atasnya, tiang di tiap sudut, lebar 250 |
| **Tampak depan** (kanan atas) | Tampak memanjang: atap bubungan, **cerobong knalpot menembus atap** dekat salah satu ujung |
| **Tampak atas / denah** (tengah) | Kotak luar **450 × 250**, kotak dalam **400 × 200**, tulisan “genset sound proof”, lingkaran **cerobong knalpot** di sudut kanan belakang |
| **Denah sisi kiri** | Dinding samping, di luarnya ada **panel genset** dan **kWh**, dua jalur **kabel genset** menuju genset |
| **Detail bawah kanan** | **Pintu rumah genset geser samping** (“seperti pagar roda”): dua daun berjaring, masing-masing berpegangan, roda di bawah |

Catatan tepi: **tinggi pondasi 15 cm**, **besi hollow 6×6** (60 × 60 mm) untuk tiang, **baja ringan** untuk rangka atap, dan panah bertuliskan **“bahan rumah genset wiremesh sekeliling”** yang menunjuk ke denah.

## 2 · Angka yang bisa dibaca pasti

| Ukuran | Nilai | Status |
| --- | --- | --- |
| Panjang luar | 450 cm | jelas |
| Lebar luar | 250 cm | jelas |
| Panjang dalam | 400 cm | jelas |
| Lebar dalam | 200 cm | jelas |
| Tebal dinding pagar (dari selisih) | (450−400)/2 = **25 cm** | turunan, konsisten di kedua arah |
| Tinggi pondasi | 15 cm | jelas |
| Profil tiang | hollow 60 × 60 mm | jelas |
| Tinggi dinding | **tidak tertulis** | perlu keputusan (lihat §5) |
| Tinggi atap | **tidak tertulis** | perlu keputusan |
| Lebar daun pintu | **tidak tertulis** | diusulkan 2 × 200 cm |

## 3 · Yang berubah dibanding V2 yang sekarang ada di situs

Versi V2 di situs sekarang: pagar wiremesh **datar (tanpa atap miring)**, atap seng menumpang mendatar di balok ring, tinggi pagar ±2,35 m, pintu **engsel** dua daun.

Sketsa ini berbeda secara mendasar:

| Aspek | V2 di situs sekarang | Sketsa ini |
| --- | --- | --- |
| Atap | seng datar, tanpa kemiringan | **spandek bubungan** (limas), puncak di tengah, tampak samping segitiga |
| Tinggi | 2,35 m (dipotong otomatis dari tinggi ruangan) | **tetap 2,40 m**, tidak mengikuti slider tinggi |
| Pintu | 2 daun **engsel**, buka ke depan | 2 daun **geser samping** dengan roda (“seperti pagar roda”) |
| Bukaan | pintu menutup sebagian depan | **seluruh sisi depan** bisa dibuka (bukaan 4,00 m) |
| Cerobong | hanya knalpot kanopi naik menembus atap | **cerobong khusus** menembus atap, ditandai di denah & tampak depan |
| Kelistrikan | panel distribusi di dalam | **panel + kWh di dinding samping luar**, kabel masuk satu jalur |
| Dinding | rangka + jaring | rangka + jaring, **tiang hollow 60 × 60** di sudut, **3 rel** (atas/tengah/bawah) |
| Pondasi | plat beton | **sloof/pondasi 15 cm** + lantai beton |

Jadi ini bukan sekadar “ganti warna” — V2 perlu **dibangun ulang bentuk atap, pintu, dan lantainya**.

## 4 · Rencana bentuk yang saya usulkan

Lihat gambar: `docs/img/v2-pagar-rencana.svg`.

- **Modul**: 4,50 × 2,50 m luar; isi pagar 25 cm → ruang bersih 4,00 × 2,00 m. Sesuai sketsa apa adanya.
- **Dinding**: tiang hollow 60 × 60 di 4 sudut + tiang pembagi tiap ±1,3 m; rel atas, tengah, bawah; wiremesh 10 × 10 cm di semua bidang. Pagar belakang dibuat **panel lepas** (sekrup) supaya servis dari belakang tetap mungkin walau ruangnya sempit.
- **Tinggi dinding**: 2,40 m (sesuai sketsa “250 = lebar”, bukan tinggi; 2,40 m adalah angka yang paling masuk akal untuk pagar + genset 1,75 m).
- **Atap**: baja ringan + spandek, **bubungan memanjang** dengan kemiringan ±25°, rise 60 cm → puncak ±3,00 m. Menonjol 30 cm di depan-belakang dan 20 cm di samping, plus talang.
- **Cerobong**: pipa dari knalpot genset naik menembus atap di posisi yang sama seperti sketsa (sisi kanan, dekat belakang), dengan collar + flashing + penutup hujan.
- **Pintu geser**: 2 daun @ ±2,00 × 2,30 m, rangka hollow + wiremesh, roda di rel bawah, daun kiri bergeser ke kiri dan daun kanan ke kanan (di luar modul, perlu ruang parkir ±2 m di tiap sisi — atau daun kedua menumpang di belakang daun pertama bila lahan sempit).
- **Kelistrikan**: panel genset + kWh di dinding samping luar (kiri), satu jalur kabel masuk lewat dinding.
- **Pondasi**: sloof 15 × 20 cm + lantai beton 10 cm, dinaikkan 15 cm dari tanah seperti sketsa.

## 5 · Keputusan yang saya butuh darimu

1. **Tinggi total.** Sketsa hanya memberi 450 × 250 tanpa tinggi. Pilih:
   - **2,40 m** — persis seperti yang terbaca dari sketsa; ringkas, cukup untuk genset 1,75 m, tapi **pintu-pintu kanopi genset tidak bisa dibuka penuh** di dalam (kanopi butuh ±2,1 m + ruang buka).
   - **2,75 m** *(usulan saya)* — masih rendah, panel kanopi bisa dibuka, atap tetap terlihat seperti sketsa.
   - **3,00 m** — kalau kamu ingin lebih lega dan mirip V1.
2. **Pintu geser: berapa daun?** Dua daun (seperti sketsa, butuh ±2 m ruang parkir di tiap sisi) atau satu daun besar (±4 m, butuh 4 m ruang parkir satu sisi)? Kalau lahan di depan sangat sempit, alternatifnya pintu lipat.
3. **4,50 × 2,50 m dipakai apa adanya?** Dengan isi 25 cm, ruang bersih cuma 2,00 m sementara genset 1,10 m — masih lega. Tapi kalau mau ruang servis samping lebih baik, bisa dibulatkan ke **4,50 × 2,60 m** (bersih 2,10 m) tanpa mengubah bentuk.
4. **Denah di sketsa: mana sisi depan?** Di sketsa, pintu geser digambar di sisi **panjang** (450). Saya ikuti itu. Kalau sebenarnya pintu ada di sisi **pendek** (250), kabari — bentuk atap dan arah geser akan ikut berubah.

## 6 · Yang akan saya kerjakan setelah konfirmasi

Semua di `index.html`, tanpa build step:

1. **Preset V2 baru**: tombol versi rumah tetap “V2 · Pagar wiremesh”, tapi parameternya diganti ke modul sketsa (450 × 250, isi 25 cm, tinggi dinding dari jawaban §5.1).
2. **Atap bubungan**: ganti atap seng datar dengan dua bidang spandek + reng + lis, plus talang; kamera “3D” tetap enak melihat bubungannya.
3. **Pintu geser**: daun pintu baru dengan rel bawah + roda, animasi geser (bukan putar), label “geser” di tab Pintu, dan pembatas otomatis supaya daun tidak menabrak apa pun.
4. **Cerobong**: naik dari knalpot menembus atap dengan collar/flashing, posisi sesuai sketsa.
5. **Panel + kWh di luar**: dipindah ke dinding samping luar, kabel masuk satu jalur.
6. **Pondasi 15 cm + lantai beton**: diangkat dari tanah, dengan tangga/step di depan pintu.
7. **Label & teks**: semua callout, teks tab Rumah, README, dan tautan *Bagikan* ikut diperbarui (hash versi dinaikkan supaya tautan lama tidak menampilkan campuran).
8. **Cek visual**: render beberapa sudut untuk memastikan tidak ada bagian yang saling menembus.

Kalau ada angka lain dari lapangan (misal gensetnya 2,5 m atau 3 m panjang), sebutkan saja — modul 4,50 m masih cukup untuk genset sampai 3,2 m.
