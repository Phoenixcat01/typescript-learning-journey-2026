// 1. TYPE DASAR
const nama: string = "Mada";
let umur: number = 35;
let tinggiBadan: number = 170.5;
let aktif: boolean = true;

// jika kita menulis
// let nama = "Mada", tanpa type, maka ts akan merubah tipe datanya menjadi string, sehingga berikutnya dia harus string

// 2. ARRAY
let nama: Array<string> = ["Mada", "Budi", "Andi"];
let nama: string[] = ["Mada", "Budi", "Andi"];
let angka: number[] = [10, 20, 30];
let aktif: boolean[] = [true, false, true];


// 3. OBJECT
let user: {
    nama: string;
    umur: number;
    aktif: boolean;
} = {
    nama: "Mada",
    umur: 35,
    aktif: true
};
// kalau pakai const, user.nama = 'adam', bisa, yg tidak bisa user = {sesuatu}


// 4. TYPE
// supaya tidak perlu nulis ulang definisi object yg sama
type User = {
    nama: string;
    umur: number;
};
let user: User = {
    nama: "Mada",
    umur: 35
};

type Nama = string;
let nama: Nama = "Mada";

const users: User[] = [
    {
        nama: "Mada",
        umur: 35,
        email: "mada@email.com"
    },
    {
        nama: "Budi",
        umur: 25,
        email: "budi@email.com"
    }
];


// 5. INTERFACE
// bisa extends
interface User {
    nama: string;
    umur: number;
}
interface Admin extends User {
    role: string;
}
let user: Admin = {
    nama: "Mada",
    umur: 35,
    role: "admin"
}


// 6. OPTIONAL PROPERTY ?
// tidak wajib diisi. khusus untuk type dan interface
type User = {
    nama: string;
    umur?: number;
};
type User = {
    nama: string;
    umur?: number;
};
const user2: User = {
    nama: "Budi"
};


// 7. UNION TYPE |
let id: string | number | undefined | null;

id = "ABC123";
id = 123;
id = undefined
id = null

type User = {
    nama: string;
    umur: number | string;
};

let status: "aktif" | "nonaktif";

status = "aktif";
status = "nonaktif";

type Role = "admin" | "user";
let role: Role;

role = "admin";

let data: (string | number)[] = [
    "Mada",
    35,
    "Budi",
    25
];


// 8. FUNCTION
function sapa(nama: string) {
    console.log("Halo " + nama);
}
function tambah(a: number, b: number): number {
    return a + b;
}
function sapa(nama: string, umur?: number) {
    console.log(nama);
}
function tampilkanNama(nama: string): void {
    console.log(nama);
}


// 9. GENERIC DASAR
// bisa nerima tipe apa aja. untuk type, interface, dan function
// huruf T boleh diganti yg lain
type Response<T> = {
    data: T;
    success: boolean;
};

const response: Response<string> = {
    data: "sss",
    success: true
};

function getData<T>(data: T): T {
    return data;
}

// 10. ANY
// ts membebaskan kita melakukan apa aja pada any, ini menghilangkan fungsi ts
let data: any = "Mada";
data = 123;
data = {
    nama: "Mada",
    umur: 35
}




