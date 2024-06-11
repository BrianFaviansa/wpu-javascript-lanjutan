// template literal / template string

// template literal adalah string literal yang memungkinkan adanya expression di dalamnya
// dibuat menggunakan backtick

const nama = 'Hibou';
const umur = 20;

console.log(`Halo, nama saya ${nama}, saya ${umur} tahun.`);

// embedded expression
console.log(`${1 + 1}`); // 2

const x = 10;

console.log(`${(x & 2 == 0) ? 'genap' : 'ganjil'}`);

// html frafments
const mhs = {
    nama: 'Hibou',
    umur: 20,
    nrp: '12345678',
    email: 'hibou@gmail.com'
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);