// ==========================================
// Poin 8: Function & Parameter di TypeScript
// ==========================================

// Apa itu Function di TypeScript?
// Fungsi di TypeScript hampir sama persis seperti di JavaScript. Bedanya, di TypeScript 
// kita bisa (dan wajib) memberikan "pengaman tipe" pada:
// 1. Parameter yang masuk (argument).
// 2. Nilai yang dikembalikan oleh fungsi tersebut (return type).


// 1. Dasar Penulisan Fungsi dengan Tipe Data
// Kita menuliskan titik dua (:) diikuti tipe data di belakang setiap parameter dan di akhir kurung buka fungsi.

// Parameter 'nama' bertipe string, dan fungsi ini mengembalikan tipe data string (: string)
function sapaSantri(nama: string): string {
    return `Selamat datang di pondok, ${nama}!`;
}

let pesanSapaan = sapaSantri("Rifan"); // ✅ Benar
// let salahSapa = sapaSantri(123);   // ❌ ERROR! Angka 100 tidak boleh masuk ke parameter string.


// 2. Fungsi yang Tidak Mengembalikan Nilai (void)
// Jika sebuah fungsi hanya menjalankan tugas (seperti mencetak ke konsol atau menyimpan data) 
// dan tidak menggunakan kata kunci `return`, kita beri tipe kembalian **`void`**.

function cetakInfoLog(pesan: string): void {
    console.log(`[LOG ARROSYAD]: ${pesan}`);
    // Tidak ada return di sini
}


// 3. Optional Parameter (Parameter Opsional ?) pada Fungsi
// Sama seperti pada objek, kita bisa membuat parameter fungsi menjadi opsional 
// dengan menambahkan tanda tanya (?) di belakang nama parameter.
// (Catatan: Parameter opsional HARUS diletakkan di urutan paling belakang!).

function hitungDiskonPendaftaran(biayaAsli: number, potonganPersen?: number): number {
    // Jika potonganPersen dikirim (tidak undefined), hitung potongannya
    if (potonganPersen !== undefined) {
        return biayaAsli - (biayaAsli * potonganPersen) / 100;
    }
    // Jika tidak ada potongan, kembalikan biaya asli
    return biayaAsli;
}

let total1 = hitungDiskonPendaftaran(1000000, 10); // Hasil: 900000
let total2 = hitungDiskonPendaftaran(1000000);    // Hasil: 1000000 (aman karena opsional)


// 4. Default Parameter (Nilai Bawaan)
// Kita juga bisa memberikan nilai bawaan langsung pada parameter jika argumennya tidak dikirim saat fungsi dipanggil.

function buatAkunUser(username: string, role: string = "Santri"): string {
    return `Akun ${username} berhasil dibuat dengan role: ${role}`;
}

buatAkunUser("Rifan");           // Output: Akun Rifan berhasil dibuat dengan role: Santri
buatAkunUser("AdminWeb", "Admin"); // Output: Akun AdminWeb berhasil dibuat dengan role: Admin


// 5. Arrow Function dengan Tipe Data
// Jika kamu menggunakan fungsi panah (arrow function), cara menuliskan tipenya tetap serupa:

const hitungLuasPersegi: (sisi: number) => number = (sisi: number): number => {
    return sisi * sisi;
};

// Versi lebih ringkas (implicit return):
const kaliAngka = (a: number, b: number): number => a * b;


// 6. Studi Kasus untuk Payload CMS (Fungsi Mengambil Data)
// Nanti saat mengambil data collection dari Payload CMS, fungsi biasanya mengembalikan Promise.
// Contoh sederhana fungsi yang menerima objek dan mengembalikan format teks:

type SantriData = {
    nama: string;
    tingkatan: string;
};

function formatDataSantri(data: SantriData): string {
    return `Santri bernama ${data.nama} berada di tingkatan ${data.tingkatan}.`;
}

let info = formatDataSantri({ nama: "Ahmad", tingkatan: "Aliyah" });
console.log(info);