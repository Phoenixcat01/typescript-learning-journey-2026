// ==========================================
// Poin 7: Union Type (|) - Pilihan Tipe Data
// ==========================================

// Apa itu Union Type?
// Union Type adalah cara untuk membolehkan sebuah variabel atau parameter memiliki **lebih dari satu jenis tipe data**.
// Kita menggunakan simbol garis tegak atau *pipe* (`|`) sebagai pemisah antar tipe data. 
// Artinya bisa Tipe A **ATAU** Tipe B **ATAU** Tipe C.


// 1. Contoh Dasar Union Type (Gabungan Tipe Dasar)
// Misalkan kita punya variabel status pendaftaran santri yang bisa berupa teks (string) atau angka (number):

let statusPendaftaran: string | number;

statusPendaftaran = "Menunggu Konfirmasi"; // ✅ Boleh string
statusPendaftaran = 2026;                 // ✅ Boleh number
// statusPendaftaran = true;              // ❌ ERROR! Boolean tidak diizinkan karena tidak ada di dalam union.


// 2. Union Type pada Objek / Interface (Sangat Penting untuk Payload CMS!)
// Di Payload CMS, seringkali sebuah field atau data bisa bernilai dari beberapa pilihan yang spesifik.
// Contohnya, status artikel bisa berupa "draft", "published", atau "archived":

type StatusArtikel = "draft" | "published" | "archived";

let statusArtikelSaya: StatusArtikel = "published"; // ✅ Valid
// statusArtikelSaya = "deleted";                   // ❌ ERROR! Kata "deleted" tidak ada dalam pilihan Union Type.


// 3. Studi Kasus untuk Proyek Arrosyad (ID Pengguna)
// Terkadang sistem lama menggunakan ID berupa angka (1, 2, 3), tapi sistem baru menggunakan string UUID ("abc-123").
// Kita bisa menggabungkannya menggunakan Union Type:

type IDPengguna = string | number;

function ambilDataUser(id: IDPengguna) {
    console.log(`Mengambil data untuk ID: ${id}`);
}

ambilDataUser(105);          // ✅ Berhasil pakai angka
ambilDataUser("EMP-009");    // ✅ Berhasil pakai string


// 4. Catatan Penting: Narrowing (Pengecekan Tipe)
// Saat menggunakan Union Type, terkadang kita perlu berhati-hati jika ingin melakukan operasi 
// khusus (misalnya mengubah string menjadi huruf kapital, atau menjumlahkan angka).
// Kita perlu mengecek tipe datanya terlebih dahulu di dalam fungsi:

function prosesId(id: string | number) {
    // Jika tipe data yang masuk adalah string, lakukan sesuatu khusus string
    if (typeof id === "string") {
        console.log(`ID berupa teks: ${id.toUpperCase()}`);
    } else {
        // Jika bukan string (berarti number), lakukan sesuatu khusus number
        console.log(`ID berupa angka: ${id + 1000}`);
    }
}

prosesId("admin"); // Output: ID berupa teks: ADMIN
prosesId(500);     // Output: ID berupa angka: 1500