require("dotenv").config()
const mongoose = require("mongoose");
const Movie = require("../models/Movie");

const movies = [
    {
        tittle: "Titanic",
        genero: "Drama"
    },
    {
        tittle: "La insoportable levedad del ser ",
        genero: "Romance"
    },
    {
        tittle: "Hi bitches",
        genero: "Comedia"
    }
]



mongoose.connect(process.env.DBURL,  {useNewUrlParser: true})
.then(() => {
  console.log(`Connect to mongo ${process.env.DBURL}`)
  return Movie.deleteMany();
})
.then(() => Movie.insertMany(movies))
.then((movies) => {
  console.log(`Movie save ${movies}`)
  return mongoose.connection.close()
})
.then(() => console.log("Disconnect"))
.catch(err => console.log(err));