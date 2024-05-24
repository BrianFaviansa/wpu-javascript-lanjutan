// Closure

// Lexical Scope => punya akses ke variabel di luar function
// Closure => kemampuan sebuah function untuk mengakses scope di atasnya

// function init() {
//     // var nama = 'hibou'; // local variable
//     return function (nama) { // inner function (closure)
//         console.log(nama); // akses ke parent variable
//     }
//     // return tampilNama;
//     // console.dir(tampilNama); // melihat closure
// }
// // init(); // tidak akan muncul apa-apa

// let panggilNama = init();
// panggilNama('hibou');
// panggilNama('furby');

// Kenapa menggunakan closure?

// 1. untuk membuat function factories

// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// selamatPagi('hibou');

// 2. untuk membuat private method


let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    };
})();

// let a = add();

console.log(add());
console.log(add());
console.log(add());
