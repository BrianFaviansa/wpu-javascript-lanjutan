// ! destructuring variabel atau assignment

// * destructuring array
// const perkenalan = ['Halo', 'nama', 'saya', 'Hibou'];

// const [salam, satu, dua, nama] = perkenalan;

// * jika ingin skip items
// const [salam, , , nama] = perkenalan;

// console.log(nama);

// * swap items
// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);

// * return value pada function
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);
// console.log(b);

// * rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// * destructuring object
// const mhs = {
//     nama: 'Hibou',
//     umur: 20
// }

// const {nama, umur} = mhs;
// console.log(nama);
// console.log(umur);

// * assignment tanpa deklarasi object
// ({nama, umur} = {nama: 'Hibou', umur: 20});
// console.log(nama);
// console.log(umur);

// * assign ke variable baru
// const mhs = {
//     nama: 'Hibou',
//     umur: 20
// }

// const { nama: n, umur: u } = mhs;
// console.log(n);
// console.log(u);

// * memberikan default value
// const mhs = {
//     nama: 'Hibou',
//     umur: 20
// }

// const {nama, umur, email = 'email@default.com'} = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);

// * memberi nilai default dan assign ke variable baru
// const mhs = {
//     nama: 'Hibou',
//     umur: 20,
//     email: 'hibou@gmail.com'
// }

// const { nama: n, umur: u, email: e = 'email@default.com' } = mhs;
// console.log(n);
// console.log(u);
// console.log(e);

// * menggunakan rest parameter
// const mhs = {
//     nama: 'Hibou',
//     umur: 20,
//     email: 'hibou@gmail.com'
// }

// const { nama, ...values } = mhs;
// console.log(nama);
// console.log(values);

// * mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 12,
    nama: 'Hibou',
    umur: 20,
    email: 'hibou@gmail.com'
}

function getIdMhs({ id }) {
    return id;
}

console.log(getIdMhs(mhs));




