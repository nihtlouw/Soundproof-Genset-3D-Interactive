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
| Knalpot | hanya knalpot kanopi naik menembus atap | **knalpot khusus** di posisi yang ditandai lingkaran pada denah, tetapi (revisi klien) **berhenti di bawah atap** |
| Kelistrikan | panel distribusi di dalam | **panel + kWh di dinding samping luar**, kabel masuk satu jalur |
| Dinding | rangka + jaring | rangka + jaring, **tiang hollow 60 × 60** di sudut, **3 rel** (atas/tengah/bawah) |
| Pondasi | plat beton | **sloof/pondasi 15 cm** + lantai beton |

Jadi ini bukan sekadar “ganti warna” — V2 perlu **dibangun ulang bentuk atap, pintu, dan lantainya**.

## 4 · Rencana bentuk yang saya usulkan

Lihat gambar: `docs/img/v2-pagar-rencana.svg`.

- **Modul**: 4,50 × 2,50 m luar; isi pagar 25 cm → ruang bersih 4,00 × 2,00 m. Sesuai sketsa apa adanya.
- **Dinding**: tiang hollow 60 × 60 di 4 sudut + tiang pembagi tiap ±1,3 m; rel atas, tengah, bawah; wiremesh 10 × 10 cm di semua bidang. Pagar belakang dibuat **panel lepas** (sekrup) supaya servis dari belakang tetap mungkin walau ruangnya sempit.
- **Tinggi dinding**: 2,40 m, ditambah balok ring 10 cm dan naik atap 50 cm → total 3,00 m (keputusan klien).
- **Atap**: baja ringan + spandek, **bubungan memanjang** dengan kemiringan ±21°, naik 50 cm dari balok ring → puncak 3,00 m. Menonjol 35 cm di depan-belakang, dilengkapi nok, lis, dan talang.
- **Knalpot / cerobong**: tetap di posisi yang sama seperti sketsa (sisi kanan, dekat belakang), tetapi **berhenti di bawah atap** — atap spandek tidak dilubangi. Ujung knalpot diberi collar + tudung hujan dan digantung ke rangka atap supaya tidak menggantung bebas.
- **Pintu geser**: 2 daun @ ±2,00 × 2,30 m, rangka hollow + wiremesh, roda di rel bawah, daun kiri bergeser ke kiri dan daun kanan ke kanan (di luar modul, perlu ruang parkir ±2 m di tiap sisi — atau daun kedua menumpang di belakang daun pertama bila lahan sempit).
- **Kelistrikan**: panel genset + kWh di dinding samping luar (kiri), satu jalur kabel masuk lewat dinding.
- **Pondasi**: sloof 15 × 20 cm + lantai beton 10 cm, dinaikkan 15 cm dari tanah seperti sketsa.

## 5 · Keputusan yang sudah diambil

1. **Tinggi total** — **3,00 m** (pagar 2,40 m + balok ring 10 cm + naik atap 50 cm), supaya panel kanopi genset tetap bisa dibuka di dalam.
2. **Pintu geser** — **2 daun**, masing-masing ±2,16 m, roda di rel bawah.
3. **Modul** — **4,50 × 2,50 m dipakai apa adanya** (ruang bersih 4,00 × 2,00 m).
4. **Sisi depan** — **sisi panjang 450 cm**, jadi bubungan memanjang.
5. **Atap & knalpot** — atap tetap **spandek bubungan**; **knalpot tidak menembus atap**, berhenti di bawahnya.

## 6 · Yang sudah dikerjakan

Semua di `index.html`, tanpa build step:

1. **Preset V2 baru**: tombol versi rumah tetap “V2 · Pagar wiremesh”, parameternya modul sketsa (4,50 × 2,50 m, isi 25 cm, total tinggi 3,00 m). Ukuran di slider diukur dari dalam pagar.
2. **Atap bubungan**: ganti atap seng datar dengan dua bidang spandek + reng + lis, plus talang; kamera “3D” tetap enak melihat bubungannya.
3. **Pintu geser**: daun pintu baru dengan rel bawah + roda, animasi geser (bukan putar), rel parkir di kiri-kanan, dan label “geser” di tab Pintu.
4. **Knalpot**: naik hanya di dalam rumah genset, berhenti di bawah atap dengan collar + tudung hujan; atap spandek utuh tanpa lubang.
5. **Panel + kWh di luar**: dipindah ke dinding samping luar, dua jalur kabel masuk.
6. **Pondasi 15 cm + lantai beton**: diangkat dari tanah, dengan tangga/step di depan pintu.
7. **Label & teks**: semua callout, teks tab Rumah, README, gambar rencana, dan tautan *Bagikan* ikut diperbarui (hash versi dinaikkan supaya tautan lama tidak menampilkan campuran).
8. **Cek visual**: render beberapa sudut (pratinjau di `docs/img/v2-pagar-pratinjau.png`) untuk memastikan tidak ada bagian yang saling menembus — termasuk jarak ujung knalpot ke bidang atap.

Kalau ada angka lain dari lapangan (misal gensetnya 2,5 m atau 3 m panjang), sebutkan saja — modul 4,50 m masih cukup untuk genset sampai 3,2 m.
