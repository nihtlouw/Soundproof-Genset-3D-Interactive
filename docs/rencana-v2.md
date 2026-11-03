# Analisis Sketsa & Implementasi V2 — Rumah Genset Pagar Wiremesh

Dokumen ini awalnya disusun sebagai **analisis + rencana**. Setelah konfirmasi klien,
rancangan V2 telah diterapkan pada model 3D. Koreksi terbaru menambahkan louvre pada
kedua bidang miring atap, merapikan rel/stopper pintu, dan memastikan kabel panel tersambung
ke panel kontrol genset. **V1 · Dinding plester tidak diubah.**

Model V2 tersedia di [Soundproof-Genset-3D-Interactive](https://nihtlouw.github.io/Soundproof-Genset-3D-Interactive/)
pada tab **Rumah → Versi rumah → V2 · Pagar wiremesh**.

Gambar rencana: `docs/img/v2-pagar-rencana.svg` (juga tersedia `.png`).

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
| Lebar daun pintu | **tidak tertulis** | dua daun sama lebar, ±2,16 m per daun; overlap 32 cm di tengah |

## 3 · Perubahan terhadap V2 sebelum revisi

Sebelum rancangan ini diterapkan, V2 masih memakai pagar wiremesh **datar (tanpa atap miring)**, atap seng mendatar di atas balok ring, tinggi pagar ±2,35 m, dan pintu **engsel** dua daun. Tabel berikut mencatat peralihan ke V2 final sesuai sketsa dan keputusan klien:

| Aspek | V2 sebelum revisi | V2 rancangan final |
| --- | --- | --- |
| Atap | seng datar, tanpa kemiringan | **spandek pelana (gable)** dengan bubungan memanjang; ujung atap berbentuk segitiga |
| Tinggi | 2,35 m (dipotong otomatis dari tinggi ruangan) | pagar **2,40 m** + ring 10 cm + naik atap 50 cm = **puncak 3,00 m** |
| Pintu | 2 daun **engsel**, buka ke depan | 2 daun **geser samping** dengan roda (“seperti pagar roda”) |
| Bukaan | pintu menutup sebagian depan | **seluruh sisi depan** bisa dibuka (bukaan 4,00 m) |
| Knalpot & ventilasi | knalpot kanopi menembus atap; belum ada kisi bubungan | **knalpot khusus berhenti di bawah atap**, spandek utuh; outlet melalui **kisi bubungan + bukaan louvre pada dua bidang atap** |
| Kelistrikan | panel distribusi di dalam | **panel + kWh di dinding samping luar**, sepasang kabel tampak tersambung sampai panel kontrol genset |
| Dinding | rangka + jaring | rangka + jaring, **tiang hollow 60 × 60** di sudut, **3 rel** (atas/tengah/bawah) |
| Pondasi | plat beton | **sloof/pondasi 15 cm** + lantai beton |

Jadi ini bukan sekadar “ganti warna” — V2 perlu **dibangun ulang bentuk atap, pintu, dan lantainya**.

## 4 · Rencana bentuk yang saya usulkan

Lihat gambar: `docs/img/v2-pagar-rencana.svg`.

- **Modul**: 4,50 × 2,50 m luar; isi pagar 25 cm → ruang bersih 4,00 × 2,00 m. Sesuai sketsa apa adanya.
- **Dinding**: tiang hollow 60 × 60 di 4 sudut + tiang pembagi tiap ±1,3 m; rel atas, tengah, bawah; wiremesh 10 × 10 cm di semua bidang. Pagar belakang dibuat **panel lepas** (sekrup) supaya servis dari belakang tetap mungkin walau ruangnya sempit.
- **Tinggi dinding**: 2,40 m, ditambah balok ring 10 cm dan naik atap 50 cm → total 3,00 m (keputusan klien).
- **Atap**: baja ringan + spandek pelana (gable), **bubungan memanjang** dengan kemiringan ±19°, naik 50 cm dari balok ring → puncak 3,00 m. Menonjol 35 cm di depan-belakang, dilengkapi nok, lis, dan talang.
- **Ventilasi keluar**: inlet tetap seluruh bidang wiremesh. Outlet berupa **kisi louvre di kedua ujung bubungan** (±86 × 22 cm) dan **bukaan pada kedua bidang miring spandek** (±2,90 × 0,30 m per sisi), dilindungi bilah louvre agar udara panas keluar dan tampias berkurang.
- **Knalpot / cerobong**: tetap di posisi yang sama seperti sketsa (sisi kanan, dekat belakang), tetapi **berhenti di bawah atap** — atap spandek tidak dilubangi. Ujung knalpot diberi collar + tudung hujan dan digantung ke rangka atap supaya tidak menggantung bebas.
- **Pintu geser**: 2 daun simetris @ ±2,16 × 2,30 m, rangka hollow + wiremesh, gagang/pengunci di tepi tengah dan roda bawah. Rel/pemandu hanya sepanjang modul luar 4,50 m; saat daun diparkir di kiri/kanan, roda ditahan pengganjal di lantai.
- **Kelistrikan**: panel genset + kWh di dinding samping luar (kiri); sepasang kabel merah/hitam melewati gland, turun mengikuti dinding dalam, lalu masuk ke slot panel kontrol genset.
- **Pondasi**: sloof 15 × 20 cm + lantai beton 10 cm, dinaikkan 15 cm dari tanah seperti sketsa.

## 5 · Keputusan yang sudah diambil

1. **Tinggi total** — **3,00 m** (pagar 2,40 m + balok ring 10 cm + naik atap 50 cm), supaya panel kanopi genset tetap bisa dibuka di dalam.
2. **Pintu geser** — **2 daun sama lebar**, masing-masing ±2,16 m dengan overlap 32 cm; gagang di tepi pertemuan, roda bawah, dan pengganjal saat diparkir.
3. **Modul** — **4,50 × 2,50 m dipakai apa adanya** (ruang bersih 4,00 × 2,00 m).
4. **Sisi depan** — **sisi panjang 450 cm**, jadi bubungan memanjang.
5. **Atap & knalpot** — atap tetap **spandek bubungan**; **knalpot tidak menembus atap**, berhenti di bawahnya.
6. **Ventilasi keluar** — kisi louvre pada kedua ujung bubungan dan bukaan louvre pada kedua bidang atap sudah dimodelkan; wiremesh tetap menjadi inlet.

## 6 · Implementasi yang sudah selesai

Model statis ini tidak memerlukan build step; geometri dan interaksi berada di `index.html`.

1. **Preset V2 baru**: tombol versi rumah tetap “V2 · Pagar wiremesh”, parameternya modul sketsa (4,50 × 2,50 m, isi 25 cm, total tinggi 3,00 m). Ukuran di slider diukur dari dalam pagar.
2. **Atap bubungan**: dua bidang spandek + reng + lis, plus talang; dibuat bukaan louvre pada kedua bidang miring dan kisi pada kedua ujung bubungan.
3. **Pintu geser**: dua daun sama lebar dengan gagang di tengah, rel bawah sepanjang kotak saja, animasi geser kiri/kanan, serta pengganjal roda di posisi parkir.
4. **Knalpot**: naik hanya di dalam rumah genset, berhenti di bawah atap dengan collar + tudung hujan; atap spandek utuh tanpa lubang.
5. **Panel + kWh di luar**: dipindah ke dinding samping luar; dua kabel merah/hitam digambar kontinu dari panel sampai genset.
6. **Pondasi 15 cm + lantai beton**: diangkat dari tanah, dengan tangga/step di depan pintu.
7. **Label & teks**: semua callout, teks tab Rumah, README, gambar rencana, dan tautan *Bagikan* ikut diperbarui (hash versi dinaikkan supaya tautan lama tidak menampilkan campuran).
8. **Ventilasi atap**: dua kisi louvre ±86 × 22 cm pada ujung bubungan ditambah bukaan louvre ±2,90 × 0,30 m pada masing-masing bidang spandek; jalur inlet wiremesh tetap terbuka.
9. **Pratinjau**: gambar empat sudut diperbarui untuk menampilkan rute kabel, louvre bidang atap, bukaan pintu dengan pengganjal, dan gagang tengah. Jalur knalpot tetap berhenti di bawah spandek; V1 tetap tersedia tanpa perubahan.

Kalau ada angka lain dari lapangan (misal gensetnya 2,5 m atau 3 m panjang), sebutkan saja — modul 4,50 m masih cukup untuk genset sampai 3,2 m.
