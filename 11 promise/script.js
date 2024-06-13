// ! promise

// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=dd247b32&s=avengers',
//     success: movies => console.log(movies)
// });

// fetch('http://www.omdbapi.com/?apikey=dd247b32&s=avengers')
//   .then(response => response.json())
//   .then(response => console.log(response))

// * promise adalah sebuah objek yg merepresentasikan keberhasilan / kegagalan sebuah event yg asynchronous di masa yg akan datang
// * janji (terpenuhi / ingkar)
// * states (fulfilled / rejected / pending)
// * callback (resolve / reject / finally)
// * aksi (then / catch)

// * contoh promise 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('Janji telah ditepati!');
//   } else {
//     reject('Ingkar janji..');
//   }
// });

// janji1
//   .then(response => console.log('OK! : ' + response))
//   .catch(response => console.log('NOT OK! : ' + response));

// * contoh promise 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve('Ditepati setelah beberapa waktu!');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject('Tidak ditepati setelah beberapa waktu!');
//     }, 2000);
//   }
// });

// console.log('mulai');
// janji2
//   .finally(() => console.log('selesai menunggu!'))
//   .then(response => console.log('OK! : ' + response))
//   .catch(response => console.log('NOT OK! : ' + response));
// console.log('selesai');

// * Promise.all

const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      judul: 'Avengers',
      sutradara: 'Hibou',
      tahun: 2021,
      genre: 'Action'
    }]);
  }, 1000);
});

const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      kota: 'Bandung',
      temp: 26,
      kondisi: 'Cerah Berawan'
    }]);
  }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
  .then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });


