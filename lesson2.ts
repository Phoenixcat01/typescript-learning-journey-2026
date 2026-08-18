// Array di TypeScript
// Sama seperti JavaScript, Array di TypeScript digunakan untuk menyimpan banyak nilai dalam satu variabel. Bedanya, di TypeScript kita bisa menentukan apa jenis tipe data yang boleh masuk ke dalam array tersebut.


// Cara Menulis Array di TypeScript:
// 1. Menggunakan tanda kurung siku [] (Cara Paling Umum):
// contoh:
// Array ini HANYA boleh berisi data berupa teks (string)
let daftarSantri: string[] = ["Ahmad", "Zaid", "Umar"];
// daftarSantri.push(123); // ❌ ERROR! Angka tidak boleh masuk ke array string.
// Array ini HANYA boleh berisi data berupa angka (number)
let nilaiUjian: number[] = [80, 90, 85];

// 2. Menggunakan Keyword Array<Tipe> (Cara Alternatif):
// Cara ini menggunakan format penulisan generic (yang nanti akan kita pelajari lebih dalam di poin nomor 9/lesson9).
let hobi: Array<string> = ["Membaca", "Bersepeda", "Coding"];
let skorUjian: Array<number> = [90, 85, 95];

// (Catatan: Sebagian besar developer lebih menyukai Cara 1 karena lebih ringkas).


// Kenapa Ini Penting?
// Di JavaScript biasa, terkadang kita tidak sengaja memasukkan data yang salah ke dalam array (misalnya memasukkan angka 123 ke dalam daftar nama yang harusnya string), yang baru akan bikin bug pas programnya jalan. Dengan TypeScript, kesalahan itu langsung dicegah sejak kamu mengetiknya.

// Apa yang Terjadi Jika Kita Melanggar Aturan?
// Keunggulan utama TypeScript adalah Type Safety (keamanan tipe data). Jika kamu mencoba memasukkan tipe data yang salah ke dalam array, editor langsung menolak dan memberi garis merah.
// contoh kasus:
let daftarSiswa: string[] = ["Budi", "Siti", "Andi"];

// ❌ ERROR! Angka 100 tidak boleh dimasukkan ke dalam array string
// daftarSiswa.push(100); 

// ✅ BERHASIL! Teks "Rian" adalah string, jadi diizinkan
daftarSiswa.push("Rian");


// Array dengan Multi Tipe (Union Type di dalam Array)
// Bagaimana jika kamu ingin membuat array yang boleh berisi teks DAN angka sekaligus? Di sinilah kita menggabungkan konsep Array dengan Union Type (yang nanti akan dibahas detail di poin nomor 7/lesson7).
// Caranya adalah dengan membungkus tipenya menggunakan tanda kurung siku dan tanda kurung biasa (tipe1 | tipe2)[]
// contoh kasus:
// Array ini boleh berisi string ATAU number
let dataCampuran: (string | number)[] = ["ID-01", "Admin", 2026, 500];

// ✅ Boleh menambah string
dataCampuran.push("Aktif"); 

// ✅ Boleh menambah number
dataCampuran.push(75); 

// ❌ ERROR! Boolean (true) tidak diizinkan karena tidak ada di dalam (string | number)
// dataCampuran.push(true);


// Mengenal "Tuple" (Array dengan Panjang & Posisi Tetap)

// Tuple adalah tipe data bawaan dari TypeScript yang mirip dengan Array, tetapi dengan dua perbedaan utama:
// 1. Jumlah elemen (panjangnya) sudah pasti / tetap.
// 2.Tipe data pada setiap posisi indeks sudah ditentukan secara spesifik.

// contoh penulisan dasar:
// Contoh tuple yang berisi [string, number, boolean]
let user: [string, number, boolean];

user = ["Rifan", 20, true]; // Benar
// user = [20, "Rifan", true]; // Error: karena urutan tipenya salah!


// Rest Parameters pada Tuple (Variadic Tuples)
// Anda bisa menggabungkan tuple dengan rest operator ... jika ingin menerima sisa elemen dengan tipe data tertentu di bagian akhir:
// Elemen pertama string, selebihnya boleh banyak number
let scores: [string, ...number[]];

scores = ["Matematika", 90, 85, 95]; // Benar


// Readonly Tuple (Immutable)
// Secara default, elemen di dalam tuple bisa diubah nilainya. Jika Anda ingin membuat tuple tersebut terkunci (tidak bisa diubah/read-only), tambahkan keyword readonly:
let point: readonly [number, number] = [10, 20];

// point[0] = 15; // Error! Tidak bisa diubah karena readonly


// Named Tuples (Tuple dengan Nama)
// TypeScript memungkinkan Anda memberi "label" atau nama pada setiap elemen tuple untuk memperjelas maksud dari data tersebut (berguna untuk dokumentasi dan destructuring):
// Memberi nama 'x' dan 'y' pada koordinat
let coordinate: [x: number, y: number] = [10.5, 20.1];

console.log(coordinate[0]); // Tetap bisa diakses via indeks


// Kapan Sebaiknya Menggunakan Tuple?
// 1. Saat Anda memiliki fungsi yang mengembalikan dua nilai atau lebih dengan tipe data yang berbeda (misalnya fungsi React Hook seperti useState yang mengembalikan [state, setState]).
// 2. Untuk merepresentasikan struktur data kecil yang jumlah kolom/propertinya tetap, seperti koordinat [latitude, longitude] atau RGB Color [255, 0, 0].