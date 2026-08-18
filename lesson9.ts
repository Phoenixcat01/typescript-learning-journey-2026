// ==========================================
// Poin 9: Generic Dasar di TypeScript
// ==========================================

// Apa itu Generic?
// Secara sederhana, Generic adalah mekanisme untuk membuat "variabel tipe data" (Type Variable).
// Kalau fungsi biasa menerima parameter berupa *nilai* (value), maka Generic memungkinkan 
// fungsi atau struktur data menerima parameter berupa *tipe data* itu sendiri.
// Simbol yang paling sering digunakan untuk Generic adalah huruf **`<T>`** (singkatan dari *Type*), 
// tapi kamu boleh pakai huruf apa saja (misalnya `<K>`, `<V>`, dll).


// 1. Kenapa Kita Butuh Generic? (Masalah Tanpa Generic)
// Bayangkan kamu ingin membuat sebuah fungsi yang bertugas "membungkus" data apa pun ke dalam sebuah wadah (Array).
// Jika tanpa Generic, kita mungkin harus membuat banyak fungsi terpisah untuk setiap tipe data:
// function bungkusString(item: string): string[] { return [item]; }
// function bungkusNumber(item: number): number[] { return [item]; }
// Tentu ini tidak efisien dan membuat kode berdarah-darah karena duplikasi!


// 2. Solusi Menggunakan Generic `<T>`
// Dengan Generic, kita bisa membuat satu fungsi universal yang bisa menerima tipe data apa pun, 
// dan TypeScript akan secara otomatis "mengingat" tipe data apa yang kamu masukkan.

function bungkusDalamArray<T>(item: T): T[] {
    return [item];
}

// Cara penggunaan:
let hasilString = bungkusDalamArray("Rifan"); // T otomatis menjadi string -> hasilnya string[]
let hasilAngka = bungkusDalamArray(2026);    // T otomatis menjadi number -> hasilnya number[]
let hasilBoolean = bungkusDalamArray(true);  // T otomatis menjadi boolean -> hasilnya boolean[]


// 3. Studi Kasus Generic pada Interface (Sangat Relevan dengan Payload CMS!)
// Di Payload CMS, seringkali kita menerima respons data dari server yang strukturnya selalu sama (punya status, pesan, dll), 
// TAPI isi datanya (*payload* atau *data*) bisa berupa Artikel, Produk, atau User yang berbeda-beda.
// Di sinilah Interface Generic sangat diandalkan!

// Membuat Interface Generic dengan parameter <T>
interface ResponDariServer<T> {
    status: "success" | "error";
    pesan: string;
    data: T; // Tipe data 'data' bersifat dinamis sesuai yang dikirim nanti!
}

// Contoh Kasus A: Respons untuk data Artikel Web Arrosyad
type Artikel = {
    id: number;
    judul: string;
};

let responArtikel: ResponDariServer<Artikel> = {
    status: "success",
    pesan: "Data artikel berhasil diambil",
    data: {
        id: 1,
        judul: "Pentingnya Belajar TypeScript",
    },
};

// Contoh Kasus B: Respons untuk data Profil User
type UserProfile = {
    username: string;
    role: string;
};

let responUser: ResponDariServer<UserProfile> = {
    status: "success",
    pesan: "Data user berhasil diambil",
    data: {
        username: "rifan_dev",
        role: "Admin",
    },
};

// Dengan Generic, kita cukup membuat SATU bentuk interface "ResponDariServer",
// tapi bisa dipakai untuk membungkus berbagai macam tipe data objek di atas!


// 4. Kesimpulan Singkat Generic:
// - Gunakan `<T>` saat kamu ingin membuat fungsi, kelas, atau interface yang fleksibel
//   tetapi tetap menjaga keamanan tipe data (*type safety*).
// - Sangat berguna saat berurusan dengan komponen yang dapat digunakan kembali (*reusable components*
//   atau struktur data API/CMS).