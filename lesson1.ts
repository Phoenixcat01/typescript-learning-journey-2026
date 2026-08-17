// Apa itu typeScript?
// TypeScript adalah bahasa pemrograman open-source yang dikembangkan oleh Microsoft. 
// TypeScript adalah superset dari JavaScript, yang berarti bahwa semua kode JavaScript yang valid juga merupakan kode TypeScript yang valid. 
// TypeScript menambahkan fitur-fitur tambahan seperti tipe statis, antarmuka, dan kelas, yang membantu pengembang menulis kode yang lebih aman dan lebih mudah dipelihara.

// manfaat nya:
// 1. TypeScript membantu mengurangi bug dengan memberikan pemeriksaan tipe statis pada saat kompilasi.
// 2. TypeScript menyediakan fitur-fitur canggih seperti antarmuka, kelas, dan modul, yang memudahkan pengembangan aplikasi besar.
// 3. TypeScript memiliki dukungan yang baik untuk editor dan IDE, sehingga meningkatkan produktivitas pengembang.
// semisal suatu saat tidak sengaja memasukkan angka ke dalam variabel teks (namaPesantren = 2026), code editor (seperti VS Code) akan langsung memberi garis merah dan memberi peringatan sebelum kodenya dijalankan atau di-deploy. Ini membuat kode kita jauh lebih minim bug.

// Di JavaScript biasa, kamu bisa membuat variabel dan mengubah isinya dengan bebas, kadang jadi teks, kadang jadi angka. Di TypeScript, kita bisa memberi tahu variabel tersebut isinya harus berupa tipe data apa.

// Ini disebut Type Annotation (penanda tipe data).

// Tipe Data Utama yang Sering Dipakai:
// - string: Untuk teks (contoh: "Halo", 'Ar-Rosyad')
// - number: Untuk angka, baik bulat maupun desimal (contoh: 2026, 3.14)
// - boolean: Untuk nilai benar atau salah (true atau false)
// - undefined: Variabel yang sudah dideklarasikan tapi belum pernah diisi nilai sama sekali.
// - null: Variabel yang secara sengaja dikosongkan atau belum memiliki nilai.

// contoh kasus:
// 1. Variabel bertipe string (teks)
let namaPesantren: string = "Ma'had Ar-Rosyad";
// namaPesantren = 123; // ❌ ERROR! Karena 123 adalah angka, bukan string.
console.log(`Nama Pesantren: ${namaPesantren}`); // ✅ Output: Nama Pesantren: Ma'had Ar-Rosyad

// 2. Variabel bertipe number (angka)
let tahunBerdiri: number = 2003;
console.log(`Tahun Berdiri: ${tahunBerdiri}`); // ✅ Output: Tahun Berdiri: 2003

// 3. Variabel bertipe boolean (benar/salah)
let isAktif: boolean = true;
console.log(`Is Aktif: ${isAktif}`); // ✅ Output: Is Aktif: true

// 4. Variabel bertipe undefined & null
let dataSiswa: string = "Budi";
// dataSiswa = null; // ❌ ERROR! Secara default, string tidak boleh diisi null/undefined jika strict mode aktif.
console.log(`Data Siswa: ${dataSiswa}`); // ✅ Output: Data Siswa: Budi

// Bagaimana jika sebuah variabel boleh berisi string ATAU kosong/null?
let namaTengah: string | null = null; // ✅ Boleh diisi teks atau null
namaTengah = "Ahmad"; // ✅ Boleh diisi teks
namaTengah = null;    // ✅ Boleh dikosongkan jadi null
console.log(`Nama Tengah: ${namaTengah}`); // ✅ Output: Nama Tengah: Ahmad (atau null jika dikosongkan)
// (Catatan: Tanda garis tegak | itu disebut Union Type, yang nanti akan kita pelajari lebih mendalam di poin/lesson nomor 7!)


// Poin-Poin Penting di TypeScript Dasar
// A. Type Inference (Penyimpulan Tipe Otomatis)
// TypeScript itu pintar. Kalau kamu langsung mengisi nilai saat membuat variabel, kamu tidak wajib menuliskan tipe datanya secara manual. TypeScript akan menebaknya sendiri.

// contoh kasus:
let kota = "Kediri"; 
// TypeScript otomatis tahu bahwa 'kota' adalah bertipe string karena langsung diisi teks.
// kota = 123; 
// ❌ ERROR! Walaupun tidak ditulis `: string`, TS tetap melarang karena sudah dianggap string.
console.log(`Kota: ${kota}`); // ✅ Output: Kota: Kediri

// B. Tipe any (Zona Bahaya ⚠️)
// Tipe any berarti "bebas / tipe apa saja". Jika kamu memakai any, TypeScript akan menonaktifkan semua aturan pengamannya (kembali seperti JavaScript biasa).

// contoh kasus:
let serbaguna: any = "Halo";
serbaguna = 2026;   // ✅ Boleh (tidak error)
serbaguna = true;   // ✅ Boleh (tidak error)
console.log(`Serbaguna: ${serbaguna}`); // ✅ Output: Serbaguna: true
// Tips: Hindari penggunaan any kecuali benar-benar terpaksa, karena menghilangkan tujuan utama menggunakan TypeScript.

// C. Tipe unknown (Versi Aman dari any)
// Tipe unknown mirip dengan any, tapi lebih aman. Kamu tidak bisa langsung menggunakan nilai bertipe unknown tanpa melakukan pengecekan tipe terlebih dahulu.

// contoh kasus:
// Kasus paling umum penggunaan unknown adalah ketika kita menerima data dari luar yang bentuk atau tipe datanya belum bisa dipastikan saat menulis kode—misalnya saat mengambil data dari API (Network Request) atau membaca parsing file JSON eksternal.

// Contoh: Kita menerima data respons dari server (misal: umur user)
let responsDariServer: unknown = 25; 
// Bisa jadi nilainya angka, bisa jadi teks, atau bahkan null/undefined

// ❌ KASUS 1: Jika langsung dipakai, TypeScript akan protes (Error)
// let hasil = responsDariServer + 5; // Error: Object is of type 'unknown'.

// ✅ KASUS 2: Cara aman menggunakannya (harus dicek dulu tipe datanya)
if (typeof responsDariServer === "number") {
    // Di dalam blok ini, TypeScript sekarang "tahu" bahwa variabel ini pasti 'number'
    let hasil = responsDariServer + 5; 
    console.log(hasil); // Berhasil dijalankan!
} 
else if (typeof responsDariServer === "string") {
    // Jika ternyata isinya string
    console.log(responsDariServer.toUpperCase());
}

// Kenapa Menggunakan unknown Lebih Baik Daripada any?
// Dengan any: Kamu bisa saja tidak sengaja memanggil fungsi yang salah pada data tersebut (misal memanggil .toUpperCase() pada angka), dan kodenya tidak akan ketahuan error saat diketik, tapi akan crash (rusak) saat dijalankan.
// Dengan unknown: TypeScript memaksa kamu untuk mengecek tipe datanya terlebih dahulu (typeof), sehingga aplikasi jauh lebih aman dari bug tak terduga.

// cek pemahaman:
// Pertanyaan 1:
// Jika kamu membuat variabel seperti ini: let statusAktif = true;, apakah kamu wajib menuliskan tipe data : boolean secara manual di sampingnya? Mengapa?

// Pertanyaan 2:
// Apa perbedaan utama antara tipe data any dan unknown saat kita ingin mengolah data dari variabel tersebut?

// jawaban:
// jawaban nomor 1, kalau kita tidak menuliskan tipe data boolean, sebenarnya tidak papa karena typescript punya fitur type inference. tapi sebaik nya dituliskan.
// jawaban nomor 2, Kita tidak bisa langsung menggunakan nilai bertipe unknown tanpa melakukan pengecekan tipe terlebih dahulu tapi kalau any masih memungkinkan.
// pembahasan soal:
// Nomor 1: TypeScript punya fitur Type Inference yang bisa mendeteksi tipe data secara otomatis dari nilai yang dimasukkan. (Catatan kecil: Kalau nilainya sudah jelas seperti true, biasanya developer justru membiarkannya tanpa ditulis manual agar kodenya lebih bersih, tapi tahu konsepnya saja sudah sangat bagus!).
// Nomor 2: unknown memaksa kita melakukan pengecekan tipe (seperti typeof) sebelum digunakan demi keamanan, sedangkan any membebaskan kita menggunakan nilai apa saja tanpa pengaman sama sekali.