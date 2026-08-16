# Perbaikan halaman hotspot: username, logo, daftar file, latar awan

## 1. Placeholder username dikosongkan

Di `public/hotspot/login.html`, kolom username sekarang memakai `value="$(username)"` — di router MikroTik variabel itu sering terisi MAC address, jadi kolom terlihat sudah berisi. Perbaikan:

- Hapus `value="$(username)"` sehingga kolom benar-benar kosong saat halaman dibuka.
- Placeholder diubah menjadi kosong (tanpa teks), sesuai permintaan; label tetap terbaca dari ikon orang + judul "Login Member". Agar tetap jelas bagi pembaca layar, ditambahkan `aria-label="Username"`.
- Perlakuan sama diterapkan di `rlogin.html` bila ada pola serupa.

## 2. Kotak di belakang logo dihilangkan

Kotak itu berasal dari `.brand .logo-wrap` di `public/hotspot/style.css` (latar gelap semi-transparan + blur + garis tepi), dan ada versi terangnya di aturan `html[data-theme="light"] .brand .logo-wrap`.

- Latar, blur, dan border `.logo-wrap` dihapus untuk tema gelap maupun terang (elemen tetap ada sebagai pembungkus, hanya tanpa kotak).
- Aturan kotak pada mode kontras tinggi / forced-colors juga dinetralkan.
- Bayangan halus (drop-shadow) pada logo dipertahankan supaya logo tetap terbaca di atas foto.

## 3. md5.js tampil di daftar file

`md5.js` sebenarnya sudah masuk ke ZIP (skrip pengemas menyalin seluruh isi `public/hotspot`, total 28 file). Yang bermasalah adalah daftar file di halaman awal: masih daftar lama yang tidak menyebut `md5.js`, `theme.js`, `preload.js`, dan malah mencantumkan `img/bg-login.jpg` serta `img/bg-nature.jpg` yang tidak ada lagi.

- Daftar di `src/routes/index.tsx` diambil dari `src/data/hotspot-manifest.json` (hasil skrip pengemas), jadi selalu sinkron dengan isi ZIP.
- Deskripsi ramah pengguna tetap dipakai untuk file yang dikenal (login, status, md5.js "Enkripsi password login CHAP", theme.js, preload.js, dll.); file gambar dikelompokkan agar daftar tidak terlalu panjang.
- Jalankan ulang `zip:hotspot` agar ZIP dan manifest terbaru berisi semua perubahan.

## 4. Latar burung diganti awan biru

Di halaman login (dan `rlogin.html`) ada lapisan suasana `.fx` berisi 6 elemen burung terbang (`<b class="bird">`) yang tampil pada tema terang.

- Elemen burung dihapus dari `login.html` dan `rlogin.html`, diganti elemen awan (`<b class="cloud">`).
- Di `style.css`, aturan `.fx .bird` / `birdFly` / `birdFlap` diganti aturan `.fx .cloud`: gumpalan awan putih-kebiruan lembut (gradasi radial, biru muda transparan) yang melayang perlahan menyilang layar, hanya pada tema terang, dengan kecepatan dan ukuran berbeda-beda.
- Kunang-kunang, bulan, dan bintang untuk tema gelap tidak diubah.
- `prefers-reduced-motion` tetap mematikan animasi awan.

## Verifikasi

Build + typecheck, lalu buka pratinjau `login.html` pada tema terang dan gelap: kolom username kosong, logo tanpa kotak, awan biru melayang tanpa burung, dan daftar file di halaman awal memuat `md5.js`.
