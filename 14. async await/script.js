// ! async await

// ? asynronous function adalah function yang bekerja secara asynronous (melalui event loop), yang menghasilkan (implisit) promises sebagai return value-nya, tapi cara penulisan code-nya menggunakan penulisan yang synchronous (standard)

// * berjalan asyncronous
// * menghasilkan promise
// * cara penulisannya synchronous

// ? sebuah async function dapat memiliki keyword await di dalamnya untuk menghentikan sementara eksekusi fungsinya sambil menunggu promise-nya selesai

// * contoh

// const coba = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('selesai')
//   }, 2000);
// });

// console.log(coba);
// coba.then(() => console.log(coba));

// * contoh async await
function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve('selesai')
      }, waktu);
    } else {
      reject('kelamaan')
    }
  });
}

// const coba = cobaPromise();
// coba
//   .then(() => console.log(coba))
//   .catch(() => console.log(coba));

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}

cobaAsync();