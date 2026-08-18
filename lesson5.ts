// ==========================================
// Poin 5: Interface (Kontrak Bentuk Objek)
// ==========================================

// Apa itu Interface?
// Interface adalah cara lain di TypeScript untuk mendefinisikan bentuk (struktur) dari sebuah objek. 
// Kalau Type Alias ibarat "membuat cetak biru", Interface ibarat "membuat sebuah kontrak resmi" 
// yang wajib dipatuhi oleh objek atau kelas yang menggunakannya.


// 1. Cara Menulis Interface
// Kita menggunakan keyword "interface" diikuti nama interfacenya (biasanya diawali huruf kapital).

interface UserInterface {
    id: number;
    username: string;
    role: string;
    isVerified: boolean;
}


// 2. Menggunakan Interface pada Objek
// Cara pakainya sama seperti type alias, kita jadikan sebagai tipe data variabel:

let santriBaru: UserInterface = {
    id: 101,
    username: "rifan_dev",
    role: "Santri & Frontend Learner",
    isVerified: true,
};

// ❌ ERROR! Jika ada properti dari kontrak yang terlewat, TypeScript akan protes:
// let santriGagal: UserInterface = {
//   id: 102,
//   username: "budi",
//   // Error: Properti 'role' dan 'isVerified' tidak ada!
// };


// 3. Keunggulan Utama Interface: "Declaration Merging" (Penggabungan)
// Berbeda dengan Type Alias yang tidak bisa didefinisikan ulang dengan nama yang sama, 
// Interface bisa digabungkan (di-merge) secara otomatis jika kamu membuat interface dengan nama yang sama.

// Contoh:
interface Profil {
    nama: string;
}

// Kita menambahkan properti baru ke interface "Profil" yang sama di tempat lain:
interface Profil {
    usia: number;
}

// Hasilnya, objek dengan tipe "Profil" WAJIB memiliki 'nama' DAN 'usia':
let dataProfil: Profil = {
    nama: "Ahmad",
    usia: 18,
};


// 4. Pewarisan pada Interface (Extends / Turunan)
// Interface mendukung konsep "extends", artinya kamu bisa membuat interface baru 
// dengan cara mewarisi properti dari interface yang sudah ada tanpa harus menulis ulang.

interface Karyawan {
    idKaryawan: string;
    namaLengkap: string;
}

// Interface Admin mewarisi semua properti Karyawan, ditambah properti khususnya sendiri
interface AdminArrosyad extends Karyawan {
    aksesLevel: "SuperAdmin" | "Moderator";
}

let adminWeb: AdminArrosyad = {
    idKaryawan: "EMP-045",
    namaLengkap: "Ustadz Admin",
    aksesLevel: "SuperAdmin", // ✅ Sukses mewarisi idKaryawan dan namaLengkap!
};


// 5. Perbedaan Singkat: Type vs Interface
// - Interface: Sangat bagus digunakan khusus untuk objek, mendukung "extends" dan "declaration merging".
// - Type: Lebih fleksibel karena bisa untuk Union Type (string | number), Tuple, dll.
// (Di Payload CMS, kamu akan sering melihat penggunaan Interface untuk mendefinisikan Collection data).