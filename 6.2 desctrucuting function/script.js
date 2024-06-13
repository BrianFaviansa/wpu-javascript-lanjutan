// ! destructuring function

// function penjumlahanPerkalian(a, b) {
//     return [a + b, a * b];
// };

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// };

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// * urutan indeks harus sama dengan return value

// * buat return value nya sebagai object supaya urutan indeks tidak berpengaruh
// function kalkulasi(a,b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2, 3);
// console.log(tambah);

// * destructuring function arguments
const mhs1 = {
    nama: 'Hibou',
    umur: 20,
    email: 'hibou@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 95
    }
};

// *  contoh tidak menggunakan destructuring
// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, umur saya ${mhs.umur} tahun.`;
// };

// console.log(cetakMhs(mhs1));

// * contoh menggunakan destructuring
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
    return `Halo, nama saya ${nama}, umur saya ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
};

console.log(cetakMhs(mhs1));

