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
// const mhs = {
//     nama: 'Hibou',
//     umur: 20,
//     nrp: '12345678',
//     email: 'hibou@gmail.com'
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;

// console.log(el);

// looping
// const mhs = [
//     {
//         nama: 'Hibou',
//         email: 'hibou@gmail.com'
//     },
//     {
//         nama: 'Bebou',
//         email: 'bebou@gmail.com'
//     },
//     {
//         nama: 'Furby',
//         email: 'furby@gmail.com'
//     },
// ];

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`


// document.body.innerHTML = el;


// conditionals
// ternary
// const lagu = {
//     judul: 'Tetap Dalam Jiwa',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul}  ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
//     </div>`;

// 4. nested html fragments

const mhs = {
    nama: 'Hibou',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
    ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah:</h4>
        ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;