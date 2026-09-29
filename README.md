# Invenora — Sistem Inventaris Barang

Aplikasi web sederhana untuk mengelola inventaris barang. Dibuat dengan HTML, CSS, dan JavaScript murni (tanpa framework, tanpa database/server).

## ✨ Fitur

- Splash screen + logo Invenora
- Register & Login
- Dashboard responsif
- CRUD barang
- Detail barang + gambar dari penyimpanan perangkat
- Kategori & satuan custom
- Search & filter kategori
- Riwayat aktivitas
- Profil pengguna
- Backup/restore data (JSON)
- Responsive (HP/tablet/laptop/PC)
- Tidak membutuhkan database/server (data tersimpan di Local Storage browser)

## 🚀 Cara Menjalankan

1. Clone atau download repository ini.
2. Buka `index.html` langsung di browser, **atau**
3. Gunakan ekstensi "Live Server" di VS Code untuk pengalaman lebih baik.
4. Saat pertama kali dibuka, buat akun melalui "Daftar di sini".
5. Login menggunakan akun tersebut.

## 🌐 Deploy ke GitHub Pages

1. Push repository ini ke GitHub.
2. Masuk ke **Settings → Pages**.
3. Pada bagian **Branch**, pilih `main` (atau branch utama Anda) dan folder `/ (root)`.
4. Klik **Save**. Situs akan tersedia beberapa saat kemudian di:
   `https://<username-anda>.github.io/<nama-repo>/`

## 🖼️ Catatan tentang Logo

Logo Invenora sudah disematkan langsung (base64) ke dalam `index.html` dan `script.js`, jadi logo akan **tetap tampil** meskipun folder `assets/` tidak ikut ter-upload atau tidak sengaja terhapus. File `assets/invenora-logo.png` tetap disertakan sebagai arsip/cadangan jika suatu saat Anda ingin mengganti logo.

Jika ingin mengganti logo, cara termudah:
1. Ganti file `assets/invenora-logo.png` dengan logo baru.
2. Konversi logo baru ke base64 (mis. situs base64-image.de atau `base64 nama-file.png`).
3. Ganti string base64 lama di dalam `index.html` (atribut `src="data:image/png;base64,..."`) dan di `script.js` dengan string base64 yang baru.

## 📌 Catatan Data

Data (inventaris, akun, kategori, satuan, riwayat) tersimpan di **Local Storage** browser/perangkat masing-masing pengguna. Data tidak otomatis tersinkron antar perangkat berbeda. Gunakan fitur **Backup/Restore (JSON)** di halaman Profil untuk memindahkan data.

## 👥 Anggota Kelompok

1. Naura Citra Nathania (03)
2. Pasya Ramadhani Putra Sagita (10)
3. Raditya Gusti Daniswara (14)
4. Rendi Aldiano Eka Saputra (19)
5. Revina Dwi Agustin (21)
6. Sintya Fitri Adevia (28)
7. Yulanda Jihan Amelia (39)
8. Zahrotul Jannah (40)
