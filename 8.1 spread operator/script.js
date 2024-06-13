// ! spread operator

// * spread operator memecah iterables menjadi single element

// const mhs = ['Hibou', 'Bebou', 'Furby'];
// console.log(...mhs);
// console.log(...mhs[0]);

// * menggabungkan lebih dari 1 array

// const mhs = ['Hibou', 'Bebou', 'Furby'];
// const dosen = ['Asep', 'Tini', 'Hendra'];
// const orang = [...mhs, 'Aji', ...dosen]
// const orang = mhs.concat(dosen);
// console.log(orang);

// * melakukan copy pada array
// const mhs = ['Hibou', 'Bebou', 'Furby'];
// const mhs1 = [...mhs];
// mhs1[0] = 'Aji';

// console.log(mhs1);

// * contoh lain
// const liMhs = document.querySelectorAll('li');

// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// * menggunakan map
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

// * ambil nama
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;