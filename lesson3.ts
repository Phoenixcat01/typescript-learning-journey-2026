// ==========================================
// Poin 3: Object (Objek) di TypeScript
// ==========================================

// Apa itu Object di TypeScript?
// Di JavaScript, objek bersifat sangat dinamis dan bebas. Tapi di TypeScript, 
// kita bisa membuat "cetak biru" (blueprint) atau aturan yang jelas tentang bentuk 
// properti dan tipe data apa saja yang wajib ada di dalam objek tersebut.


// 1. Cara Dasar Membuat Object
// Saat membuat objek, kita mendefinisikan tipe data untuk tiap propertinya di dalam kurung kurawal:

let adminArrosyad: { name: string; age: number; isActive: boolean } = {
    name: "user1",
    age: 21,
    isActive: true,
};

// Cara mengakses nilainya:
console.log(adminArrosyad.name); // Output: Rifan


// 2. Apa yang Terjadi Jika Salah Tipe Data?
// Jika kamu mencoba mengubah nilai properti dengan tipe data yang salah, 
// TypeScript akan langsung memberikan garis merah (error):

// ❌ ERROR! Karena 'age' harus bertipe number, bukan string.
// adminArrosyad.age = "dua puluh satu"; 


// 3. Studi Kasus untuk Proyek Arrosyad
// Bayangkan kamu ingin membuat data untuk Artikel/Berita di website Arrosyad:

let artikelArrosyad: { title: string; views: number; isPublished: boolean } = {
    title: "Kegiatan Santri Arrosyad Bulan Ini",
    views: 1250,
    isPublished: true,
};

console.log(`Artikel berjudul "${artikelArrosyad.title}" memiliki ${artikelArrosyad.views} pembaca.`);


// 4. Kenapa Ini Penting?
// Dengan mendefinisikan tipe objek sejak awal, editor (VS Code) akan memberikan
// bantuan otomatis (IntelliSense) berupa daftar properti saat kamu mengetik titik (.),
// sekaligus mencegah terjadinya salah ketik nama properti atau salah tipe data.