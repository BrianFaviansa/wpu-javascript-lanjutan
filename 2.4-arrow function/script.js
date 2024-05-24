// 1. function declaration

// function sayHello(nama) {
//     return 'Hello ' + nama;
// }

// 2. function expression

// let sayHello = function (nama) {
//     return 'Hello ' + nama;
// }

// 3. arrow function

// let sayHello = (nama) => {
//     alert(`Hello ${nama}`);
// }


// const tampilNama = (nama) => { return `Hello ${nama}`; }
// console.log(tampilNama('Hibou'));

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Hibou', 'Pagi'));


// const tampilNama = nama => `Hello ${nama}`; // tidak perlu menggunakan kurung kurawal, jika parameter hanya satu tidak perlu kurung => disebut implicit return
// console.log(tampilNama('Hibou'));

// const tampilNama = () => `Hello World`; // jika tanpa parameter wajib ada kurung untuk parameter
// console.log(tampilNama());

// Contoh lain

let mahasiswa = ['Hibouu', 'Furby', 'Bebou'];

// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// })

// console.log(jumlahHuruf);

// menggunakan arrow function

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf)
