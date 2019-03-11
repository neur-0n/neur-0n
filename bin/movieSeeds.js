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
  return User.deleteMany();
})
.then(() => User.insertMany(users))
.then((users) => {
  console.log(`User save ${users}`)
  return mongoose.connection.close()
})
.then(() => console.log("Disconnect"))
.catch(err => console.log(err));