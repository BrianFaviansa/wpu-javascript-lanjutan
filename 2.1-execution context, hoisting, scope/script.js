// 2 fase pada execution context

// 1. Creation phase

// console.log(nama); // undefined
// var nama = 'hibou';

// creation phase pada global context
// nama var = undefined
// nama function = fn()
// hoisting => mengangkat deklarasi variable & function ke atas
// window = global object
// this = window

// 2. Execution phase

// var nama = 'hibou';
// var umur = 33;

// console.log(sayHello());

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// creation phsae pada local context (function)
// hoisting
// argument = undefined
// variable = undefined
// function = fn()
// window = global object
// this = window

// execution phase
// argument = nilai yang dikirim saat function dijalankan
// variable = assign nilai
// function = dijalankan

var nama = 'hibou';
var username = '@hibou';

function cetakURL(username) {
    var instagramURL = 'http://instagram.com/';
    return instagramURL + username;
}

// console.log(cetakURL(username)); // http://instagram.com/@hibou
console.log(cetakURL('furby')); // http://instagram.com/@hibou


// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a(); // ini a, ini b, ini c