// ==========================================
// Tambahan Penting: Konsep Lanjutan TypeScript
// ==========================================


// ==========================================
// 1. Type Assertion (Memaksa Tipe Data)
// ==========================================
// Terkadang, TypeScript tidak tahu secara pasti apa tipe data dari suatu elemen 
// (misalnya saat mengambil elemen dari DOM HTML atau data mentah dari API).
// Type Assertion adalah cara kita memberi tahu TypeScript: "Percayalah padaku, aku tahu apa tipe data ini."
// Kita menggunakan keyword "as" atau tanda kurung sudut `<tipe>`.

let responseApi: unknown = "Selamat datang di Web Arrosyad";

// Memaksa TypeScript memperlakukan variabel di atas sebagai string agar bisa pakai method string (.length)
let panjangTeks: number = (responseApi as string).length;


// ==========================================
// 2. Any vs Unknown (Tipe Data Misterius)
// ==========================================
// - 'any': Mematikan fitur Type Safety sepenuhnya. Sangat berbahaya karena bisa meloloskan error saat runtime.
let dataBebasAny: any = 10;
dataBebasAny.apapunMethodBisaDipanggil(); // ❌ Lolos dari editor, tapi bisa error saat dijalankan!

// - 'unknown': Versi aman dari 'any'. Boleh diisi data apa saja, tapi sebelum digunakan 
//   kamu *wajib* melakukan pengecekan tipe data terlebih dahulu (Type Narrowing).
let dataBebasUnknown: unknown = "Halo Dunia";

if (typeof dataBebasUnknown === "string") {
    console.log(dataBebasUnknown.toUpperCase()); // ✅ Aman karena sudah dicek tipenya!
}


// ==========================================
// 3. Intersection Types (&)
// ==========================================
// Kebalikan dari Union Type (`|` / ATAU), Intersection Type menggunakan ampersand (`&`) 
// untuk **menggabungkan dua atau lebih tipe data sekaligus**.

type Pegawai = {
    nama: string;
    nip: string;
};

type Kontak = {
    email: string;
    telepon: string;
};

// Menggabungkan Pegawai DAN Kontak menjadi satu tipe baru yang memiliki SEMUA properti dari keduanya
type StaffPesantren = Pegawai & Kontak;

let ustadzAdmin: StaffPesantren = {
    nama: "Ustadz Budi",
    nip: "PEG-001",
    email: "budi@arrosyad.com",
    telepon: "08123456789", // ✅ Wajib mencakup properti Pegawai DAN Kontak sekaligus!
};


// ==========================================
// 4. Literal Types (Nilai Spesifik sebagai Tipe)
// ==========================================
// Menggunakan nilai spesifik secara langsung sebagai tipe data untuk pilihan yang sangat ketat.

type ArahMataAngin = "Utara" | "Selatan" | "Timur" | "Barat";
let posisiRhin: ArahMataAngin = "Timur"; // ✅ Valid


// ==========================================
// 5. Utility Types Bawaan (Partial & Pick)
// ==========================================
// Fitur bawaan TypeScript untuk memodifikasi tipe data yang sudah ada (Sangat berguna untuk CRUD Payload CMS).

type DataSantriLengkap = {
    id: number;
    nama: string;
    email: string;
    usia: number;
};

// A. Partial<T>: Membuat SEMUA properti menjadi opsional (?) secara otomatis (Cocok untuk operasi Update/Patch).
type UpdateSantriPayload = Partial<DataSantriLengkap>;
let updateContoh: UpdateSantriPayload = {
    usia: 19, // ✅ Boleh hanya mengirim sebagian properti saja!
};

// B. Pick<T, K>: Mengambil beberapa properti tertentu saja dari sebuah tipe data.
type RingkasanSantri = Pick<DataSantriLengkap, "nama" | "usia">;
let ringkasan: RingkasanSantri = {
    nama: "Ahmad",
    usia: 18,
};


// ==========================================
// 6. Enum (Enumeration / Pilihan Tetap)
// ==========================================
// `enum` digunakan untuk mendefinisikan sekumpulan nilai konstanta yang memiliki nama yang jelas.
// Sangat sering dipakai di Payload CMS untuk pilihan *select field* (seperti peran user atau status postingan).

enum RoleUser {
    ADMIN = "admin",
    EDITOR = "editor",
    SISWA = "siswa"
}

let peranSaya: RoleUser = RoleUser.ADMIN;
// console.log(peranSaya); // Output: "admin"


// ==========================================
// 7. Record<K, V> (Utility Type untuk Objek Dinamis)
// ==========================================
// `Record` digunakan untuk membuat bentuk objek yang key (kunci) dan value (nilainya) memiliki tipe data yang seragam, 
// terutama saat jumlah propertinya dinamis atau tidak pasti (biasanya untuk kamus data / dictionary / translations).

// Key berupa string, dan value juga berupa string
let terjemahanSitus: Record<string, string> = {
    salam: "Assalamualaikum",
    selamatDatang: "Welcome to Arrosyad Web",
    daftar: "Register Now"
};

// Key berupa string (nama role), value berupa boolean (hak akses)
let hakAksesFitur: Record<string, boolean> = {
    bolehUploadArtikel: true,
    bolehHapusDatabase: false
};


// ==========================================
// 8. Nullish Coalescing Operator (??)
// ==========================================
// Nullish Coalescing adalah operator yang dilambangkan dengan dua tanda tanya (`??`).
// Digunakan untuk memberikan nilai "cadangan" (default value) JIKA sebuah variabel 
// bernilai **`null`** atau **`undefined`**.

// Perbedaan utamanya dengan operator OR (`||`) biasa:
// - `||` menganggap nilai *falsy* (seperti `0`, `""` string kosong, atau `false`) sebagai nilai yang kosong, 
//   sehingga nilai cadangan akan terpilih.
// - `??` **hanya** aktif jika nilainya benar-benar `null` atau `undefined`. Angka `0` atau string kosong `""` 
//   tetap dianggap sebagai nilai yang sah dan tidak akan diganti!

// Contoh Kasus:
let jumlahKunjungan: number | null = null;

// Jika jumlahKunjungan bernilai null/undefined, maka gunakan angka 0 sebagai gantinya
let totalTampil = jumlahKunjungan ?? 0;
console.log(totalTampil); // Output: 0 (karena asalnya null)


// Contoh perbandingan dengan string kosong (""):
let namaInputan: string = "";

// Menggunakan OR (||) -> string kosong dianggap falsy, jadi akan jatuh ke "Tamu" (Mungkin tidak diinginkan!)
let hasilOR = namaInputan || "Tamu";
console.log(hasilOR); // Output: "Tamu"

// Menggunakan Nullish Coalescing (??) -> string kosong "" tetap dianggap ada/sah, jadi tidak diganti
let hasilNullish = namaInputan ?? "Tamu";
console.log(hasilNullish); // Output: "" (tetap string kosong)


// ==========================================
// 9. Optional Chaining (?.) dan Nullish Coalescing (??)
// ==========================================

// Optional Chaining (?.) memungkinkan kita mengakses properti atau memanggil method dari sebuah objek 
// yang mungkin bernilai `null` atau `undefined` tanpa menyebabkan error runtime (crash).
// Jika properti yang diakses pertama kali bernilai `null` atau `undefined`, eksekusi akan berhenti 
// dan mengembalikan `undefined`, bukan error.

// Nullish Coalescing (??) kemudian digunakan untuk memberikan nilai default jika hasil dari optional chaining 
// ternyata `null` atau `undefined`.

// Contoh Kasus:
// Bayangkan kita punya objek data user yang mungkin belum memiliki data alamat lengkap
let dataUser = {
    id: 1,
    nama: "Budi",
    // Belum memiliki properti 'alamat'
};

// Tanpa Optional Chaining (Akan menyebabkan error jika 'alamat' tidak ada):
// console.log(dataUser.alamat.provinsi); // ❌ Error! Cannot read properties of undefined (reading 'provinsi')

// Dengan Optional Chaining (?.) dan Nullish Coalescing (??):

// Kita mencoba mengakses properti 'alamat' -> undefined
// Optional Chaining menghentikan eksekusi dan mengembalikan undefined (aman!)
// Nullish Coalescing mengganti undefined tersebut dengan "Data Tidak Tersedia"
let alamatLengkap = dataUser.alamat?.provinsi ?? "Data Tidak Tersedia";

console.log(alamatLengkap); // Output: "Data Tidak Tersedia"


// ==========================================
// 10. Non-Null Assertion (!) dan Comparison Operators (==, ===, !=, !==)
// ==========================================

// A. Non-Null Assertion Operator (!)
// Operator "non-null assertion" (tanda seru `!`) adalah cara untuk memberi tahu TypeScript 
// secara paksa bahwa sebuah variabel *pasti* memiliki nilai (bukan `null` atau `undefined`), 
// meskipun TypeScript tidak dapat membuktikannya sendiri.

// Contoh Kasus:
// Misalkan Anda yakin bahwa elemen DOM dengan ID 'judul' pasti ada di halaman HTML.
// TypeScript menganggap `document.getElementById()` bisa mengembalikan `null` jika elemen tidak ditemukan.

// Tanpa Non-Null Assertion (TypeScript akan error):
// let judulElement = document.getElementById('judul');
// judulElement.textContent = "Belajar TypeScript"; // ❌ Error! 'judulElement' может быть null

// Dengan Non-Null Assertion (!):
// Kita memberitahu TypeScript: "Percayalah, ini pasti elemen yang valid"
let judulElement = document.getElementById('judul')!;
judulElement.textContent = "Belajar TypeScript"; // ✅ Aman! TypeScript percaya karena ada tanda !.


// B. Comparison Operators (==, ===, !=, !==)
// Operator perbandingan adalah alat fundamental dalam pemrograman untuk membandingkan nilai.
// Perbedaan krusial terletak pada strictness (ketatnya) perbandingan:

// 1. Loose Equality (==) - Perbandingan Longgar
// Memeriksa kesamaan *nilai* tanpa memperhatikan *tipe data*. 
// TypeScript akan mencoba mengonversi (coercion) tipe data agar perbandingan bisa dilakukan.

console.log(5 == "5"); // true -> String "5" diubah menjadi number 5
console.log(0 == false); // true -> false diubah menjadi number 0


// 2. Strict Equality (===) - Perbandingan Ketat (Rekomendasi)
// Memeriksa kesamaan *nilai* DAN *tipe data*. Tidak ada konversi tipe data otomatis.
// Ini adalah operator yang paling aman dan direkomendasikan untuk digunakan.

console.log(5 === "5"); // false -> Tipe data berbeda (number vs string)
console.log(0 === false); // false -> Tipe data berbeda (number vs boolean)
console.log(10 === 10); // true -> Nilai dan tipe data sama


// 3. Loose Inequality (!=) - Ketidaksetaraan Longgar
// Kebalikan dari `==`. Mengembalikan `true` jika nilai tidak sama (setelah konversi tipe data).

console.log(5 != "6"); // true
console.log(5 != "5"); // false


// 4. Strict Inequality (!==) - Ketidaksetaraan Ketat
// Kebalikan dari `===`. Mengembalikan `true` jika nilai atau tipe data berbeda.

console.log(5 !== "5"); // true -> Tipe data berbeda
console.log(5 !== 5); // false -> Nilai dan tipe data sama


// Rekomendasi Umum:
// Selalu gunakan strict equality (`===`) dan strict inequality (`!==`) untuk menghindari 
// bug yang disebabkan oleh type coercion (konversi tipe data otomatis).
// Gunakan non-null assertion operator (`!`) hanya ketika Anda 100% yakin bahwa 
// nilai tersebut tidak akan pernah `null` atau `undefined`.


// ==========================================
// 11. Readonly (Immutability)
// ==========================================
// 'readonly' adalah modifier yang digunakan untuk memastikan bahwa properti sebuah objek 
// tidak dapat diubah setelah objek tersebut dibuat. Ini adalah konsep penting untuk 
// menjaga keamanan dan prediktabilitas state dalam aplikasi (Immutability).

// Contoh dengan Interface:
interface UserKonstanta {
    readonly id: number; // ID tidak boleh diubah setelah user dibuat
    readonly username: string; // Username juga tidak bisa diubah
    email: string; // Email BISA diubah
}

let user1: UserKonstanta = {
    id: 101,
    username: "rhin0305",
    email: "[EMAIL_ADDRESS]"
};

user1.email = "[EMAIL_ADDRESS]"; // ✅ Boleh, karena 'email' tidak readonly

// user1.id = 202; 
// ❌ Error! Cannot assign to 'id' because it is a read-only property.
// user1.username = "admin";
// ❌ Error! Cannot assign to 'username' because it is a read-only property.


// Contoh dengan Type Alias:
type Konfigurasi = {
    readonly host: string;
    readonly port: number;
    modeDebug: boolean;
};

let setting: Konfigurasi = {
    host: "localhost",
    port: 3000,
    modeDebug: true
};

setting.modeDebug = false; // ✅ Boleh
// setting.host = "server.com"; // ❌ Error! 'host' is read-only


// Perbandingan dengan 'const':
// 'const' digunakan untuk variabel (nilai) yang tidak boleh diubah.
// 'readonly' digunakan untuk properti (nilai di dalam objek) yang tidak boleh diubah.

const PI = 3.14159; // Nilai PI tidak boleh diubah
// PI = 3.14; // ❌ Error! Cannot assign to 'PI' because it is a constant.


// ==========================================
// 12. Optional Chaining (?.) - Lanjutan
// ==========================================

// Optional Chaining adalah fitur sintaksis yang memungkinkan kita mengakses properti 
// atau memanggil method dari sebuah objek yang mungkin bernilai `null` atau `undefined` 
// tanpa menyebabkan error runtime (crash).

// Jika properti atau method yang diakses pertama kali bernilai `null` atau `undefined`, 
// eksekusi akan berhenti secara otomatis dan mengembalikan `undefined`.

// Contoh Kasus:
// Bayangkan kita punya data user yang mungkin belum memiliki data alamat lengkap
interface User {
    id: number;
    nama: string;
    alamat?: Alamat; // Properti 'alamat' bersifat opsional (bisa ada, bisa tidak)
}

interface Alamat {
    jalan: string;
    kota: string;
    provinsi: string;
}

// User tanpa alamat
let user1: User = {
    id: 1,
    nama: "Budi"
};

// User dengan alamat lengkap
let user2: User = {
    id: 2,
    nama: "Ani",
    alamat: {
        jalan: "Jl. Sudirman No. 123",
        kota: "Jakarta Selatan",
        provinsi: "DKI Jakarta"
    }
};

// Tanpa Optional Chaining (Akan menyebabkan error jika 'alamat' tidak ada):
// console.log(user1.alamat.provinsi); 
// ❌ Error! Cannot read properties of undefined (reading 'provinsi')

// Dengan Optional Chaining (?):

// Untuk user1 (tanpa alamat):
// user1.alamat akan menghasilkan undefined
// ?.provinsi mencoba mengakses properti 'provinsi' dari undefined
// TypeScript menghentikan eksekusi dan mengembalikan undefined (aman!)
console.log(user1.alamat?.provinsi); // Output: undefined

// Untuk user2 (dengan alamat lengkap):
// user2.alamat adalah objek yang valid
// ?.provinsi mengakses properti 'provinsi' dari objek alamat
// Hasilnya adalah nilai properti 'provinsi'
console.log(user2.alamat?.provinsi); // Output: "DKI Jakarta"


// Optional Chaining juga bisa digunakan dengan pemanggilan method:
interface ResponseAPI {
    data?: {
        format: string;
        konversiKeJson(): string;
    };
}

let response1: ResponseAPI = {}; // Tanpa data
let response2: ResponseAPI = {
    data: {
        format: "JSON",
        konversiKeJson() {
            return JSON.stringify({ message: "Data berhasil dikonversi" });
        }
    }
};

// Mencoba memanggil method 'konversiKeJson' tanpa Optional Chaining (akan error jika data tidak ada)
// console.log(response1.data?.konversiKeJson()); // ❌ Error!

// Menggunakan Optional Chaining:
console.log(response1.data?.konversiKeJson()); // Output: undefined (karena data tidak ada)
console.log(response2.data?.konversiKeJson()); // Output: '{"message":"Data berhasil dikonversi"}' (hasil pemanggilan method)