# Analisis Sketsa & Implementasi V2 — Rumah Genset Pagar Wiremesh

Dokumen ini awalnya disusun sebagai **analisis + rencana** untuk V2. Model aplikasi kini memakai revisi visual terbaru: kedua ujung gable terbuka dengan rangka baja ringan yang terlihat (tanpa infill atau kisi ujung), hanya empat tiang hollow 60 × 60 mm di sudut, dan dua daun pintu geser simetris dengan gagang di stile pertemuan tanpa bersilangan. Louvre tetap ada pada kedua bidang spandek miring; knalpot berhenti di bawah atap. **V1 · Dinding plester tidak diubah.**

Gambar SVG rencana di bawah adalah referensi visual awal, bukan sumber ukuran kerja. Dimensi model harus dibaca dari kontrol dan denah yang dihasilkan aplikasi.

Model V2 tersedia di [Soundproof-Genset-3D-Interactive](https://nihtlouw.github.io/Soundproof-Genset-3D-Interactive/)
pada tab **Rumah → Versi rumah → V2 · Pagar wiremesh**.

Gambar rencana SVG (`docs/img/v2-pagar-rencana.svg`) adalah referensi visual awal dengan ukuran ilustratif; pratinjau PNG terkait merupakan snapshot historis sebelum koreksi visual terakhir. Model aktif dan ukurannya harus dibaca dari aplikasi.

---

## 1 · Apa yang ada di sketsa

Ada lima gambar di satu lembar:

| Gambar | Isi |
| --- | --- |
| **Tampak samping** (kiri atas) | Potongan melintang: dinding pagar, **atap spandek pelana (gable) dengan bubungan memanjang**, tiang di tiap sudut, lebar 250 |
| **Tampak depan** (kanan atas) | Tampak memanjang: atap bubungan; pada gambar awal, **cerobong knalpot tampak menembus atap**. Pada rancangan final, sesuai revisi klien, knalpot berhenti di bawah spandek |
| **Tampak atas / denah** (tengah) | Kotak luar **450 × 250**, kotak dalam **400 × 200**, tulisan “genset sound proof”, lingkaran **cerobong knalpot** di sudut kanan belakang |
| **Denah sisi kiri** | Dinding samping, di luarnya ada **panel genset** dan **kWh**, dua jalur **kabel genset** menuju genset |
| **Detail bawah kanan** | **Pintu rumah genset geser samping** (“seperti pagar roda”): dua daun berjaring, masing-masing berpegangan, roda di bawah |

Catatan tepi: **tinggi pondasi 15 cm**, **besi hollow 6×6** (60 × 60 mm) untuk tiang, **baja ringan** untuk rangka atap, dan panah bertuliskan **“bahan rumah genset wiremesh sekeliling”** yang menunjuk ke denah.

## 2 · Angka yang terbaca pada referensi (ilustratif)

Label angka pada sketsa menjadi petunjuk visual, bukan konfirmasi dimensi proyek. Nilai model aktual ditentukan oleh preset dan kontrol dimensi aplikasi; nilai bawaan dapat diubah.

| Ukuran | Nilai pada referensi / model bawaan | Status |
| --- | --- | --- |
| Panjang luar | 450 cm | terbaca pada referensi; model aplikasi bawaan, belum dikonfirmasi untuk konstruksi |
| Lebar luar | 250 cm | terbaca pada referensi; model aplikasi bawaan, belum dikonfirmasi untuk konstruksi |
| Panjang dalam | 400 cm | label referensi; model aplikasi bawaan, dapat diubah |
| Lebar dalam | 200 cm | label referensi; model aplikasi bawaan, dapat diubah |
| Tebal pagar (dari selisih gambar) | (450−400)/2 = **25 cm** | hasil hitung dari label ilustratif; bukan ukuran terkonfirmasi |
| Tinggi pondasi | 15 cm | label referensi; belum dikonfirmasi untuk konstruksi |
| Profil tiang | hollow 60 × 60 mm | ditetapkan untuk empat tiang sudut pada koreksi model terbaru |
| Tinggi dinding | **tidak tertulis** | nilai aplikasi; bukan konfirmasi dari gambar |
| Tinggi atap | **tidak tertulis** | nilai aplikasi; bukan konfirmasi dari gambar |
| Lebar daun pintu | **tidak tertulis** | dihitung dari geometri aktif; dua daun sama lebar, ±2,16 m bawaan, overlap 32 cm |

## 3 · Perubahan terhadap V2 sebelum revisi

Sebelum rancangan ini diterapkan, V2 masih memakai pagar wiremesh **datar (tanpa atap miring)**, atap seng mendatar di atas balok ring, tinggi pagar ±2,35 m, dan pintu **engsel** dua daun. Tabel berikut mencatat perubahan geometri aplikasi; ukuran di tabel adalah nilai preset/hasil kontrol, bukan dimensi yang dikonfirmasi oleh gambar referensi:

| Aspek | V2 sebelum revisi | V2 rancangan final |
| --- | --- | --- |
| Atap | seng datar, tanpa kemiringan | **spandek pelana (gable)** dengan bubungan memanjang; kedua ujung segitiga terbuka, hanya rangka baja ringan tampak |
| Tinggi | 2,35 m (dipotong otomatis dari tinggi ruangan) | pagar **2,40 m** + ring 10 cm + naik atap 50 cm = **puncak 3,00 m** |
| Pintu | 2 daun **engsel**, buka ke depan | 2 daun **geser samping** dengan roda (“seperti pagar roda”) |
| Bukaan | pintu menutup sebagian depan | **seluruh sisi depan** bisa dibuka (bukaan 4,00 m) |
| Knalpot & ventilasi | knalpot kanopi menembus atap; ventilasi belum diperinci | Elbow berbalut panas dan joint fleksibel berflens mengalir ke stack tegak bertudung; ujung **16 cm di bawah atap**, spandek utuh; louvre hanya pada kedua bidang miring dan gable tetap terbuka |
| Kelistrikan | panel distribusi di dalam | **Kabinet kontrol + meter kWh di pelat dudukan solid lokal pada sisi luar wiremesh**; indikator, meter/timer, dan tombol mengikuti foto; kabel merah/hitam tampak tersambung ke genset |
| Lampu | fixture downlight dan dua titik lampu di V1 | **Tidak ada fixture/lampu plafon di V2**; versi V1 tetap seperti semula |
| Dinding | rangka + jaring | rangka + jaring, **empat tiang hollow 60 × 60 mm di sudut saja**, **3 rel ringan** (atas/tengah/bawah), tanpa tiang pembagi besar |
| Pondasi | plat beton | **sloof/pondasi 15 cm** + lantai beton |

Jadi ini bukan sekadar “ganti warna” — V2 perlu **dibangun ulang bentuk atap, pintu, dan lantainya**.

## 4 · Rencana bentuk yang saya usulkan

Lihat gambar: `docs/img/v2-pagar-rencana.svg`.

- **Modul**: aplikasi menyediakan preset luar 4,50 × 2,50 m dengan ruang bersih bawaan 4,00 × 2,00 m. Angka ini berasal dari model/slider, bukan pengukuran terkonfirmasi dari sketsa.
- **Dinding**: hanya empat tiang hollow 60 × 60 mm di sudut utama; tiga rel ringan atas/tengah/bawah dan wiremesh 10 × 10 cm mengisi bidang tanpa tiang pembagi besar. Pagar belakang dibuat **panel lepas** (sekrup) supaya servis dari belakang tetap mungkin walau ruangnya sempit.
- **Tinggi dinding**: 2,40 m, ditambah balok ring 10 cm dan naik atap 50 cm → total 3,00 m (keputusan klien).
- **Atap**: baja ringan + spandek pelana (gable), **bubungan memanjang** dengan kemiringan ±19°, naik 50 cm dari balok ring → puncak 3,00 m. Menonjol 35 cm di depan-belakang, dilengkapi nok, lis, dan talang. Kedua ujung segitiga dibiarkan terbuka; rangka segitiga baja ringan terlihat tanpa panel penutup atau kisi ujung.
- **Ventilasi keluar**: inlet melalui bidang wiremesh. Louvre berada pada **kedua bidang miring spandek** (±2,90 × 0,30 m per sisi); gable terbuka tanpa panel/end-louvre.
- **Knalpot / cerobong**: jalur baru menyambung dari outlet turbo melalui elbow berbalut panas dan joint fleksibel berflens ke stack tegak di sisi kanan-belakang. Tudung hujan dan dua hanger menguatkan bentuknya; puncak tetap **16 cm di bawah bidang atap**, spandek tidak dilubangi.
- **Pintu geser**: 2 daun sama lebar dan simetris @ ±2,16 × 2,30 m, rangka hollow + wiremesh, gagang pada stile pertemuan tanpa overlap/silangan visual, dan roda bawah. Rel/pemandu hanya sepanjang modul luar 4,50 m; saat daun diparkir di kiri/kanan, roda ditahan pengganjal di lantai.
- **Kelistrikan**: kabinet kontrol luar berwarna abu-abu mengikuti referensi (dua baris indikator hijau/biru/merah, tampilan voltase dan timer, kontrol bawah), ditambah meter kWh terpisah. Keduanya terpasang pada pelat dudukan solid lokal di sisi kiri luar wiremesh; dua kabel merah/hitam melewati gland, turun mengikuti sisi dalam, lalu masuk ke slot panel kontrol genset.
- **Pondasi**: sloof 15 × 20 cm + lantai beton 10 cm, dinaikkan 15 cm dari tanah seperti sketsa.

## 5 · Keputusan yang sudah diambil

1. **Tinggi total** — **3,00 m** (pagar 2,40 m + balok ring 10 cm + naik atap 50 cm), supaya panel kanopi genset tetap bisa dibuka di dalam.
2. **Pintu geser** — **2 daun sama lebar**, masing-masing ±2,16 m dengan overlap 32 cm; gagang berada simetris pada stile pertemuan, tidak bersilangan, roda bawah, dan pengganjal saat diparkir.
3. **Modul** — **4,50 × 2,50 m dipakai sebagai preset aplikasi** (ruang bersih bawaan 4,00 × 2,00 m); angka gambar rencana awal bukan sumber ukuran kerja.
4. **Sisi depan** — **sisi panjang 450 cm**, jadi bubungan memanjang.
5. **Atap & knalpot** — atap tetap **spandek bubungan**, kedua ujung gable terbuka dengan rangka baja ringan; **knalpot tidak menembus atap**, berhenti di bawahnya.
6. **Ventilasi keluar** — louvre berada pada kedua bidang atap; gable terbuka tanpa panel atau kisi ujung; wiremesh tetap menjadi inlet.

## 6 · Implementasi yang sudah selesai

Model statis ini tidak memerlukan build step; geometri dan interaksi berada di `index.html`.

1. **Preset V2**: tombol versi rumah tetap “V2 · Pagar wiremesh”; nilai bawaan berasal dari geometri aplikasi (ruang bersih 4,00 × 2,00 m, isi 25 cm, tinggi puncak 3,00 m) dan dapat diubah lewat kontrol dimensi. Angka referensi sketsa tidak dianggap ukuran proyek terkonfirmasi.
2. **Atap bubungan**: dua bidang spandek + gording/rangka + lis dan talang; gable ujung dibiarkan terbuka dengan rangka baja ringan, tanpa panel infill atau louvre ujung. Bukaan louvre tetap ada pada kedua bidang miring.
3. **Pintu geser**: dua daun sama lebar dan simetris; gagang masing-masing berada pada stile pertemuan tanpa saling menyilang. Rel hanya sepanjang kotak, dengan animasi geser kiri/kanan dan pengganjal roda di posisi parkir.
4. **Knalpot**: jalur elbow berbalut panas, sambungan fleksibel, stack tegak, tudung hujan, dan dua hanger; ujung stack berjarak 16 cm dari bidang atap dan spandek utuh tanpa lubang.
5. **Panel + kWh di luar**: kabinet kontrol bergaya foto dan meter terpisah dipasang pada pelat dudukan solid lokal di sisi luar; dua kabel merah/hitam tetap kontinu sampai genset.
6. **Pondasi 15 cm + lantai beton**: diangkat dari tanah, dengan tangga/step di depan pintu.
7. **Label & teks**: semua callout, teks tab Rumah, README, gambar rencana, dan tautan *Bagikan* ikut diperbarui (hash versi dinaikkan supaya tautan lama tidak menampilkan campuran).
8. **Ventilasi atap**: bukaan louvre ±2,90 × 0,30 m pada masing-masing bidang spandek; kedua gable terbuka dan tanpa kisi ujung. Jalur inlet wiremesh tetap terbuka.
9. **Penerangan V2**: empat fixture plafon dan lampu titik dihapus dari V2 saja; lampu pada V1 dibiarkan seperti semula.
10. **Pratinjau**: model aktif menampilkan rute kabel, louvre bidang atap, gable terbuka berangka ringan, empat tiang sudut, pintu dengan pengganjal, dan gagang simetris di tengah. Jalur knalpot berhenti di bawah spandek; V1 tetap tersedia tanpa perubahan.

Kalau ada angka lain dari lapangan (misal gensetnya 2,5 m atau 3 m panjang), sebutkan saja — modul 4,50 m masih cukup untuk genset sampai 3,2 m.
