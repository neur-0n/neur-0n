const express = require('express');
const router  = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



router.post("/userProfile", (req,res) =>{
  const {title, dates, img, overview, popularity, genero} = req.body
  Movie.findOne({title})
  .then(movie =>{
    if(movie){
    res.json({msg:"yata pesao"})
    return
  }
    const newMovie = new Movie({
      title,
      img, 
      genero, 
      overview,
      dates,
      popularity
    })
    newMovie.save()
    .then(movie => {
      User.findByIdAndUpdate(req.user.id, { $addToSet: { list: movie.id } })
    })

  })
  .catch(err => {
    res.json( { message: "Something went wrong" });
 
})

})
module.exports = router;