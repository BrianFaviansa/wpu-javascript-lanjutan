// ! rest parameter

// function myFunc() {
// return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// return myArgs;
// return Array.from(arguments);
// return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// * jumlahkan semua argument yg dikirimkan

// function jumlahkan(...angka) {
// let total = 0;
// for (const a of angka) {
//     total += a
// }

// return total;

// * menggunakan higher order function
// return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// * array destructuring
// const kelompok1 = ['Hibou', 'Bebou', 'Furby', 'Ucup', 'Jajang'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);

// * object destructuring
// const team = {
//     pm: 'Hibou',
//     frontEnd1: 'Bebou',
//     frontEnd2: 'Furby',
//     backEnd: 'Ucup',
//     ux: 'Jajang',
//     devOps: 'Jujun'
// }

// const {pm, ...devTeam} = team;
// console.log(pm);
// console.log(devTeam);

// * filtering pada argument
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}

console.log(filterBy('number', 1, 2, 'Hibou', false, 3, 4, 5, true, 'Bebou'))