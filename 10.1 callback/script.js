// ! callback

// * callback adalah function yang dikirimkan sebagai parameter pada function yang lain

// * synchronous callback
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan nama:');
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// * asynchronous callback
// const mhs = [
//     {
//         "nama": "Hibou",
//         "nrp": "123456",
//         "email": "hibou@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "Bebou",
//         "nrp": "123455",
//         "email": "bebou@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 2
//     },
//     {
//         "nama": "Furby",
//         "nrp": "123454",
//         "email": "furby@gmail.com",
//         "jurusan": "Teknik Informatika",
//         "idDosenWali": 1
//     },
// ]

// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 1000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// });
// console.log('selesai');

// * asynchronous callback

// * dengan jQuery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs => {
        mhs.forEach(m => console.log(m.nama));
    }),
    error: (e => console.log(e.responseText))
})
console.log('selesai');

