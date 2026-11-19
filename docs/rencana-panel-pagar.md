# Workspace 02 — Panel Pagar Wiremesh 160 × 120 cm

Dokumen ini mencatat **workspace kedua** pada aplikasi: satu panel pagar wiremesh yang dapat berdiri sendiri, mengikuti foto pagar yang dijadikan acuan (panel persegi dengan isi jaring dan dua kaki segitiga di sisi bawah).

Workspace 01 tetap **Rumah genset wiremesh** (4,50 × 2,50 m) seperti sebelumnya. Keduanya berada dalam satu halaman; pemilihnya ada di HUD kiri atas, dan tautan `#ws=ws01` / `#ws=ws02` membuka lembar yang sesuai.

## 1 · Ukuran yang ditetapkan pengguna

| Bagian | Ukuran | Catatan |
| --- | --- | --- |
| Tinggi panel | **120 cm** | diukur dari lantai ke sisi atas rangka |
| Lebar panel | **160 cm** | diukur dari sisi luar rangka kiri ke kanan |
| Kaki | **segitiga, kedalaman 30 cm** | batang mendatar 30 cm ke belakang + batang miring ke tepi atas |
| Mata jaring | **10 × 10 cm** | bawaan; dapat diubah 5–20 cm |
| Profil rangka | **40 × 40 mm** | bawaan; dapat diubah 25–60 mm |
| Profil kaki | **30 × 30 mm** | bawaan; dapat diubah 20–50 mm |

Semua angka di atas adalah **kontrol aplikasi**, bukan ukuran kerja yang terverifikasi. Model 3D, tabel detail, dan lembar gambar 2D membaca satu sumber nilai yang sama (`PanelWorkspace.F.dims`), sehingga ketiganya tidak dapat berbeda.

## 2 · Bentuk yang dimodelkan

- **Panel** — rangka pipa persegi empat sisi (dua tiang, batang atas, batang bawah) dengan satu **penguat tengah** mendatar bila tinggi ≥ 100 cm. Isi bidang adalah jaring kawat yang dimodelkan sebagai batang kawat individual, bukan tekstur, agar tampak seperti foto pada sudut dekat.
- **Kaki segitiga** — dua kaki, satu di tiap sisi luar rangka bawah. Setiap kaki terdiri dari batang mendatar 30 cm ke belakang dan batang miring dari ujung belakang ke pertemuan batang atas. Bentuknya segitiga siku-siku dengan sudut kemiringan ±76° dari datar (14° dari tegak) pada ukuran bawaan.
- **Alas kaki** — pelat/sepatu di kedua ujung batang mendatar (dapat dimatikan).
- **Hubung silang** — batang mendatar di lantai antara kedua kaki (dapat dimatikan).
- **Pangkuan ujung miring** — blok kecil tempat ujung batang miring bertumpu di batang atas (dapat dimatikan).
- **Pelat segitiga pengaku** — pelat pipih pada bidang kaki (terlihat pada foto acuan) yang dapat dinyalakan/dimatikan di tab *Kaki*; bawaan mati agar bentuk kaki tetap terbaca sebagai batang.

Turunan geometri yang ditampilkan di tab *Kaki* dan di lembar 2D:

- panjang batang miring = √(kedalaman² + (tinggi − profil)²)
- sudut kaki = atan((tinggi − profil) / kedalaman)
- jumlah mata jaring = pembulatan bidang bersih ÷ jarak kawat (bawaan 15 kolom × 11 baris)
- berat konsep ≈ luas panel × 13,5 kg/m² (asumsi jaring + rangka), beban per kaki = setengahnya
- diameter kawat jaring = 2 × 1,5–2,2 mm mengikuti jarak mata jaring (bawaan Ø 4 mm pada jaring 10 cm)

## 3 · Lembar gambar 2D

Tombol **Denah 2D** pada workspace 02 membuka lembar bergaya studio yang dibuat dari nilai aktif:

| Kode | Gambar | Isi |
| --- | --- | --- |
| 01 | Tampak depan | bidang jaring, profil rangka, penguat tengah, rantai dimensi lebar/tinggi |
| 02 | Tampak samping | profil segitiga kaki, sudut, panjang batang miring, alas kaki |
| 03 | Denah | kedudukan panel dan kedua kaki dari atas, kedalaman kaki, jarak antar kaki |
| 04 | Detail kaki | pembesaran segitiga kaki dengan titik las dan panjang batang |
| 05 | Mata jaring | pola anyaman/las dengan jarak kawat dan jumlah kolom/baris |

Lembar dapat diunduh sebagai SVG atau dicetak. Tampilan per gambar (Depan / Samping / Denah / Kaki) juga tersedia untuk memperbesar satu gambar.

## 4 · Batasan

Gambar dan model adalah **konsep visual untuk koordinasi**, bukan gambar kerja. Hal-hal berikut belum dihitung dan perlu diverifikasi tenaga ahli sebelum pelaksanaan:

- kekuatan panel terhadap **beban angin** (panel 160 × 120 cm cenderung ringan dan mudah terdorong; kaki segitiga hanya menahan ke arah belakang),
- sambungan las, tebal kawat, dan mutu baja,
- angkur/bandul bila panel dipakai di area terbuka,
- kelurusan lantai dan cara penopang agar panel tidak goyang.
