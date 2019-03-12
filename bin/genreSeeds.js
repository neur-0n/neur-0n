require("dotenv").config()
const mongoose = require("mongoose");
const Genre = require("../models/Genre");

  
mongoose.connect(process.env.DBURL, { useNewUrlParser: true })
  .then(() => {
    console.log(`Connect to mongo ${process.env.DBURL}`)
    return Genre.deleteMany();
  })
  .then(() => Genre.insertMany(genre))
  .then((genre) => {
    console.log(`Movie save ${genre}`)
    return mongoose.connection.close()
  })
  .then(() => console.log("Disconnect"))
  .catch(err => console.log(err));