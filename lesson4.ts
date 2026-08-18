// ==========================================
// Poin 4: Type Aliases (Membuat Alias Tipe Sendiri)
// ==========================================

// Apa itu Type Alias?
// Type Alias adalah cara untuk "memberikan nama" pada sebuah tipe data kustom di TypeScript. 
// Bayangkan ini seperti membuat cetak biru (blueprint) atau template sendiri, 
// sehingga kita tidak perlu menulis ulang struktur tipe data yang sama berulang-ulang kali.


// 1. Kenapa Kita Butuh Type Alias?
// Coba bayangkan jika kita punya objek user dengan struktur yang cukup banyak:
// let user1: { id: number; name: string; email: string; isActive: boolean } = { ... };
// let user2: { id: number; name: string; email: string; isActive: boolean } = { ... };
// 
// Kalau kita tulis berulang kali, kode jadi berantakan dan melelahkan. 
// Dengan Type Alias, kita bisa mendefinisikannya SEKALI saja, lalu dipakai berkali-kali!


// 2. Cara Menulis Type Alias
// Kita menggunakan keyword "type" diikuti nama aliasnya (biasanya diawali huruf kapital, misal: User, Artikel, dll).

// Membuat cetak biru tipe data untuk User
type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};


// 3. Menggunakan Type Alias yang Sudah Dibuat
// Sekarang kita bisa memakai "User" sebagai tipe data untuk variabel-variabel kita:

let userPertama: User = {
    id: 1,
    name: "Rifan",
    email: "rifan@arrosyad.com",
    isActive: true,
};

let userKedua: User = {
    id: 2,
    name: "Ahmad",
    email: "ahmad@arrosyad.com",
    isActive: false,
};

// ❌ ERROR! Jika ada properti yang kurang atau salah tipe datanya, TypeScript langsung protes:
// let userSalah: User = {
//   id: "3", // Error: id harus number, bukan string!
//   name: "Zaid",
//   email: "zaid@arrosyad.com",
//   isActive: true,
// };


// 4. Studi Kasus untuk Proyek Web Arrosyad (Payload CMS Preparation)
// Nanti di Payload CMS, kamu akan sering mendefinisikan bentuk data koleksi (Collections).
// Contohnya untuk data "Berita" atau "Artikel":

type ArtikelArrosyad = {
    judul: string;
    penulis: string;
    jumlahPembaca: number;
    tags: string[]; // Menggunakan array yang sudah kita pelajari sebelumnya!
    isPublished: boolean;
};

// Menggunakan tipe ArtikelArrosyad untuk artikel baru
let artikel1: ArtikelArrosyad = {
    judul: "Kajian Rutin Santri Akhir Pekan",
    penulis: "Ustadz Arrosyad",
    jumlahPembaca: 340,
    tags: ["Kajian", "Santri", "Pendidikan"],
    isPublished: true,
};


// 5. Type Alias Tidak Hanya untuk Object!
// Type Alias juga bisa digunakan untuk tipe data dasar atau union type (yang akan kita pelajari nanti):
type IDUser = string | number; // Bisa string atau number

let idPegawai: IDUser = "EMP-001"; // ✅ Boleh string
let idSiswa: IDUser = 1024;      // ✅ Boleh number