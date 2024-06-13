// ! materi fetch

// ? fetch adalah sebuah method API pada javascript yang digunakan untuk mengambil resources dari jaringan dan mengambalikan promise yang selesai (fulfilled) ketika ada response yang tersedia

// ? fetch syntax
// * fetch(resources, init);
// * resource bisa url, path, atau request object
// * init adalah object opsional yang berisi konfigurasi untuk request seperti method, headers, dan lain-lain
// * response hasil dari fetch adalah promise yang memiliki property dan method

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function () {
  const searchKeyword = document.querySelector('.search-keyword');
  fetch('http://www.omdbapi.com/?apikey=dd247b32&s=' + searchKeyword.value)
    .then(response => response.json())
    .then(response => {
      const movies = response.Search;
      let cards = '';
      movies.forEach(m => cards += showCards(m));
      const movieContainer = document.querySelector('.movie-container');
      movieContainer.innerHTML = cards;

      // ketika tombol detail diklik
      const modalDetailButton = document.querySelectorAll('.modal-detail-button');
      modalDetailButton.forEach(btn => {
        btn.addEventListener('click', function () {
          const imdbid = this.dataset.imdbid;
          fetch('http://www.omdbapi.com/?apikey=dd247b32&i=' + imdbid)
            .then(response => response.json())
            .then(m => {
              const movieDetail = showMovieDetail(m);
              const modalBody = document.querySelector('.modal-body');
              modalBody.innerHTML = movieDetail;
            })
        });
      });
    });
});




function showCards(m) {
  return `<div class="col-md-4 my-3">
        <div class="card">
            <img src="${m.Poster}" class="card-img-top" alt="${m.Title}">
            <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Details</a>
            </div>
        </div>
    </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid" alt="${m.Title}">
            </div>
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                    <li class="list-group-item"><strong>Director: </strong>${m.Director}</li>
                    <li class="list-group-item"><strong>Actors: </strong>${m.Actors}</li>
                    <li class="list-group-item"><strong>Writer: </strong>${m.Writer}</li>
                    <li class="list-group-item"><strong>Plot: </strong>${m.Plot}</li>
                </ul>
            </div>
        </div>
    </div>`;
}