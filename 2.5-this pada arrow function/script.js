// konsep this pada arrow function

// constructor function
// const Mahasiswa = function () {
//     this.nama = "Rifki";
//     this.umur = 23;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     };
// }

// arrow function
// const Mahasiswa = function () {
//     this.nama = "Hibou";
//     this.umur = 23;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     };
// }

// const hibou = new Mahasiswa();
// hibou


// object literal
// const mhs1 = {
//     nama: 'Hibou',
//     umur: 23,
//     sayHello: () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }

// mhs1.sayHello(); 

//* arrow function tidak memiliki konsep this, sehingga this pada arrow function akan mengacu pada this yang berada di lexical scopenya, yaitu window/global object. sehingga this.nama dan this.umur akan mengacu pada window.nama dan window.umur yang tidak ada, sehingga akan menghasilkan undefined.

// const Mahasiswa = function () {
//     this.nama = "Rifki";
//     this.umur = 23;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     };

    // setInterval(() => {
    //     console.log(this.umur++)
    // }, 500)
// }

// const hibou = new Mahasiswa();

// kasus real

const box = document.querySelector('.box'); 
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contain(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});