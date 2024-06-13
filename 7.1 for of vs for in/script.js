// ! for of vs for in

// * array
// const mhs = ['Hibou', 'Bebou', 'Furby'];

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// * for .. of
// for (const m of mhs) {
//     console.log(m);
// }

// * string
// const nama = 'Hibou';
// for (const n of nama) {
//     console.log(n);
// }

// const mhs = ["Hibou", "Bebou", "Furby"];
// mhs.forEach((m, i) => {
//     console.log(`${ m } adalah mahasiswa ke ${ i + 1}`);
// })

// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke ${i + 1}`);
// }

// * NodeList
const liNama = document.querySelectorAll('.nama');
// liNama.forEach(n => console.log(n.textContent))
// for (n of liNama) {
//     console.log(n.innerHTML);
// }

// * arguments
// function jumlahkanAngka() {
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// * for .. in => hanya untuk object
const mhs = {
    nama: 'Hibou',
    umur: 20,
    email: 'hibou@gmail.com'
}

for (m in mhs) {
    console.log(mhs[m]);
}
