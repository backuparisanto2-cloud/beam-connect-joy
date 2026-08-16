# Impor proyek "connect-beam-ease" dari GitHub

Repo `backuparisanto2-cloud/connect-beam-ease` bersifat publik dan dibangun di stack yang sama dengan proyek ini (TanStack Start + Tailwind v4 + shadcn). Jadi isinya bisa disalin masuk ke proyek ini, bukan diimpor otomatis (Lovable belum mendukung impor repo langsung).

## Apa yang akan disalin

Berdasarkan isi repo (134 berkas):

- **Halaman**: `/` (beranda), `/preview`, `/manifest`, `/export`
- **Portal hotspot statis** di `public/hotspot/`: `login.html`, `alogin.html`, `rlogin.html`, `logout.html`, `status.html`, `error.html`, `faq.html`, `redirect.html`, plus `style.css`, `theme.js`, `preload.js`, `md5.js`
- **Aset gambar** latar pagi/malam (webp, versi normal + kecil), logo, favicon
- **Paket unduhan** di `public/downloads/` (zip + manifest) dan `scripts/zip-hotspot.mjs`
- **Komponen**: `BrandLogo` + seluruh set komponen shadcn/ui
- **Data**: `src/data/hotspot-manifest.json`
- Design system (`src/styles.css`) dan konfigurasi (`components.json`, `vite.config.ts`, deps di `package.json`)

## Cara pengerjaan

1. Unduh arsip repo (branch `main`) ke area kerja sementara.
2. Salin berkas sumber, aset publik, dan skrip ke proyek ini; berkas biner (webp, zip, favicon) disalin apa adanya.
3. Samakan dependensi `package.json` yang belum ada di proyek ini, lalu install.
4. Biarkan `src/routeTree.gen.ts` dibuat ulang oleh build, bukan disalin mentah.
5. Pertahankan berkas kerangka milik proyek ini (`src/server.ts`, `src/start.ts`, error reporting) bila identik; ganti bila repo punya versi yang lebih lengkap.
6. Verifikasi: build + typecheck, lalu buka `/`, `/preview`, `/manifest`, `/export` di preview dan cek konsol bersih.

## Catatan

- Riwayat commit dan berkas `.lovable/plan/` lama dari repo tidak disalin (bukan bagian aplikasi).
- Kalau repo asli memakai backend/Cloud (tabel, login), itu tidak ikut tersalin; perlu disiapkan terpisah. Dari daftar berkas, tidak terlihat folder `src/integrations/supabase`, jadi kemungkinan besar aplikasi ini sepenuhnya frontend.
- Setelah impor, agar sinkron dua arah, proyek ini bisa dihubungkan ke repo GitHub sendiri lewat menu (+) → GitHub.
