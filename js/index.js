const movieList = [
  'https://media.fstatic.com/9ELY9KGlimvZ5gE0aKFLL1HDioU=/290x478/smart/media/movies/covers/2018/02/43294ab698364b0293198a1ca327042b_DLOZ8Q3.jpg',
  'https://br.web.img2.acsta.net/pictures/19/02/20/19/59/4120067.jpg',
  'https://ottvsimg.ottvs.com.br/cov/dmd.152102/0152102_335.jpg',
  'https://br.web.img2.acsta.net/pictures/16/08/18/14/02/023247.jpg'
]

const whereToWatch = [
  'https://www.netflix.com/br/title/80223050',
  'https://www.primevideo.com/dp/amzn1.dv.gti.c6b5287a-1453-743f-072b-b2111439611f?autoplay=1&ref_=atv_cf_strg_wb',
  'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjEnen89oPzAhVDCJEKHbGpDU4YABAAGgJjZQ&ohost=www.google.com&cid=CAESQeD2wYK07McBtaZ3QEsTK7aYwryrmYfcEnZTiY6Qyax_4KU47Xwl3v0HF141cv_l_-4CoHAQaZ6Q0XcDiczsuoWn&sig=AOD64_2VvT0KzA-7IPO1wO7Tk0hzLS_QZw&q&adurl&ved=2ahUKEwi6jNr89oPzAhU6rpUCHWN_CcUQ0Qx6BAgCEAE',
  'https://www.primevideo.com/dp/amzn1.dv.gti.82b70277-a247-b1ee-6064-bfc46309c5be?autoplay=1&ref_=atv_cf_strg_wb'
]

const nameMovie = [
  'Rastros de um Sequestro',
  'Suspíria',
  'Parasita',
  'O Que Fazemos nas Sombras'
]

let i = 0
const result = document.querySelector('.result')
do {
  result.innerHTML += `<div class="div"><h2>${nameMovie[i]}</h2><a href="${whereToWatch[i]}" target="_blank"><img src=${movieList[i]} class= "movies"></a></div>`
  i++
} while (i < movieList.length)

function addMovie() {
  const favoriteMovie = document.querySelector('#movie').value
  if (favoriteMovie.endsWith('.jpg' || '.JPG' || '.jpeg' || '.svg' || '.png')) {
    showMovies(favoriteMovie)
  } else {
    console.error('A imagem inserida deve ser no formato jpg')
  }

  document.querySelector('#movie').value = ''

  ////////////
}

function showMovies(movie) {
  const nameMovie = document.querySelector('#name').value
  const elementFavoriteMovie = `<div class="div"><h2 class="nameMovie">${nameMovie}</h2> <img src= ${movie} ></div>`
  const movieList = document.querySelector('#movieList')
  movieList.innerHTML += elementFavoriteMovie
}
