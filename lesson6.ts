// ==========================================
// Poin 6: Optional Property (Properti Opsional ?)
// ==========================================

// Apa itu Optional Property?
// Secara default di TypeScript, semua properti yang kita definisikan di dalam Object, 
// Type, atau Interface bersifat **wajib (required)**. Jika ada satu saja properti yang terlewat, 
// TypeScript akan langsung protes.
//
// Namun, dalam dunia nyata (termasuk saat membuat database di Payload CMS), 
// ada kalanya data tertentu **tidak wajib diisi** (boleh ada, boleh juga kosong). 
// Di sinilah kita menggunakan tanda tanya (?) sebagai penanda properti opsional.


// 1. Contoh Optional Property pada Interface / Type
// Misalkan kita membuat tipe data Artikel untuk website Arrosyad:

interface ArtikelWeb {
    id: number;
    judul: string;
    penulis: string;
    // Tanda tanya (?) di bawah ini membuat properti 'deskripsiSingkat' menjadi opsional
    deskripsiSingkat?: string;
    // Tanda tanya (?) membuat 'tanggalPublish' juga opsional (bisa diisi, bisa tidak)
    tanggalPublish?: string;
}


// 2. Menggunakan Objek dengan Properti Opsional
// Skenario A: Artikel lengkap dengan semua properti terisi
let inilahArtikel1: ArtikelWeb = {
    id: 1,
    judul: "Belajar TypeScript untuk Pemula",
    penulis: "Rifan",
    deskripsiSingkat: "Panduan cepat memahami dasar TS.",
    tanggalPublish: "2026-08-18",
};

// Skenario B: Artikel dibuat tanpa properti opsional (TETAP AMAN DAN TIDAK ERROR!)
let inilahArtikel2: ArtikelWeb = {
    id: 2,
    judul: "Kegiatan Ramadhan di Arrosyad",
    penulis: "Admin",
    // deskripsiSingkat dan tanggalPublish sengaja tidak ditulis, dan TypeScript tidak protes!
};


// 3. Kenapa Ini Sangat Berguna untuk Payload CMS?
// Nanti di Payload CMS, saat kamu membuat struktur data (Collection), 
// ada kolom yang wajib diisi (seperti 'title' atau 'slug'), tapi ada juga kolom 
// yang boleh dikosongkan oleh admin (seperti 'subTitle', 'featuredImage', atau 'bio').
// Dengan optional property (?), kamu bisa mengatur fleksibilitas tersebut dengan aman.


// 4. Catatan Penting Saat Mengakses Properti Opsional
// Karena nilainya bisa jadi "tidak ada" (atau bernilai `undefined`), 
// jika kamu ingin memproses atau menampilkan properti opsional tersebut, 
// biasanya kita perlu melakukan pengecekan kondisi terlebih dahulu:

function cetakInfoArtikel(artikel: ArtikelWeb) {
    console.log(`Judul: ${artikel.judul}`);

    // Mengecek apakah properti opsional ini ada isinya atau tidak sebelum digunakan
    if (artikel.deskripsiSingkat !== undefined) {
        console.log(`Deskripsi: ${artikel.deskripsiSingkat}`);
    } else {
        console.log("Deskripsi: Tidak ada deskripsi singkat.");
    }
}

cetakInfoArtikel(inilahArtikel2);