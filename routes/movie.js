const Router = require("express").Router();
const Movie = require("../models/Movie");
const axios = require("axios")
const genreID = require("../bin/genre")



Router.get("/", (req, res) => {

  axios.get("https://api.themoviedb.org/3/discover/movie?api_key=3dfe1cc9f329824a039d8b3aaf2f814e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=28")
  .then((pepeResponde) => {
    console.log(pepeResponde.data.results.map(movie => 
      ({title: movie.title, 
        genero:movie.genre_ids.map(genre => genreID[genre]),
        img:movie.poster_path, 
        overview : movie.overview,
        dates : movie.release_date,
        popularity : movie.popularity})))
    res.render("index")
  })

})

Router.post("/formverde",(req,res) =>{
 
  const genero = req.body.genero
  //pillamos los datos del formulario para capturarlos

  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=3dfe1cc9f329824a039d8b3aaf2f814e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=${genero}`)
  .then((pepeResponde) => {
    const peli = pepeResponde.data.results.map(movie => 
      ({title: movie.title, 
        genero:movie.genre_ids.map(genre => genreID[genre]),
        img:movie.poster_path, 
        overview : movie.overview,
        dates : movie.release_date,
        popularity : movie.popularity}))
    res.render("movie/peli",{peli})
  })

})

// xhr.open("GET", "https://api.themoviedb.org/3/discover/movie?with_genres=Action&vote_average.gte=60.0&release_date.lte=1999&release_date.gte=1990&page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=###");


module.exports = Router;
