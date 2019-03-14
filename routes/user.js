const Router = require("express").Router();
const User = require("../models/User");
const uploadCloud = require('../config/cloudinary.js')

Router.get("/animo", (req, res) => {
  const greenSentences = [ 
    "Soy un unicornio y vivo en un arcoiris",
    "Soy un bollito de canela",
    "Wunderbar!",
    "Estan blandito que me quiero morir",
    "Super!",
    "Party Time!"
  ]
  const greenSentence = greenSentences[Math.floor(Math.random()*greenSentences.length)]

  const greenimgs = [
     "verde1.jpg",
     "verde2.jpg",
     "verde3.jpg",
     "verde4.jpg",
     "verde5.jpg",
     "verde6.jpg",
     "verde7.jpg",
     "verde8.jpg",
  ]
  const greenimg = greenimgs[Math.floor(Math.random()*greenimgs.length)]


  const redSentences = [
    "Hacer un merge",
    "Jueves negro en Ironhack",
    "Día de proyecto",
    "Último día de los de primero",
    "El día que se fue Juan",
    "Estoy en un pozo y no veo la luz"
  ]
  
  const redSentence = redSentences[Math.floor(Math.random()*redSentences.length)]

  const redimgs = [
    "rojo1.jpg",
    "rojo2.jpg",
    "rojo3.jpg",
    "rojo4.jpg",
    "rojo5.jpg",
    "rojo6.jpg",
  ]
  const redimg = redimgs[Math.floor(Math.random()*redimgs.length)]
  
    const yellowSentences = [
      "¡Qué te peines!",
      "¡Haber estudiao!",
      "Un día más en la oficina",
      "Sin novedad en el frente",
      "Esto se puede hacer por programación",
      "La insoportable levedad del sel"
    ]
  const yellowSentence = yellowSentences[Math.floor(Math.random()*yellowSentences.length)]


  res.render("user/animo", {greenSentence, redSentence, yellowSentence, greenimg, redimg})
})

Router.get("/verde", (req, res) => {
  console.log({gener: [
    { value: "28", name: "Action" },
    { value: "12", name: "Aventure" },
    { value: "26", name: "Animation" },
    { value: "35", name: "Comedy" },
    { value: "10751", name: "Family" },
    { value: "14", name: "Fantasy" },
    { value: "10749", name: "Romance" },
    { value: "878", name: "Science Fiction" }
  ]})
  res.render("user/form", {
    ruta: "formverde",
    msg: "",
    gener: [
      { value: "28", name: "Action" },
      { value: "12", name: "Aventure" },
      { value: "26", name: "Animation" },
      { value: "35", name: "Comedy" },
      { value: "10751", name: "Family" },
      { value: "14", name: "Fantasy" },
      { value: "10749", name: "Romance" },
      { value: "878", name: "Science Fiction" }
    ]
  })
})

Router.get("/rojo", (req, res) => {
  res.render("user/form", {
    ruta: "formverde",
    msg : "",
    gener: [
      { value: "80", name: "Crime" },
      { value: "18", name: "Drama" },
      { value: "27", name: "Horror" },
      { value: "9648", name: "Mistery" },
      { value: "53", name: "Thriller" },
      { value: "10752", name: "War" }


    ]
  })
})

Router.get("/amarillo", (req, res) => {

  res.render("user/form", {
    ruta: "formverde",
    msg : "",
    gener: [
      { value: "99", name: "Documentary" },
      { value: "36", name: "History" },
      { value: "10402", name: "Music" },
      { value: "10770", name: "TV Movie" },
      { value: "37", name: "Western" }

    ]
  })
})




Router.get("/milista",(req,res) =>{
  User.findById(req.user.id)
  .populate("list")
  .then(user => res.render("user/profile",{user}))
  // .catch(err)
})

Router.get("/milista/update",(req,res) =>{
  User.findById(req.user.id)
  .then(user => res.render("user/edituser",{user}))
  // .catch(err)
})

Router.post("/milista/update" , uploadCloud.single('photo'), (req, res) =>{
  const {username} = req.body
  const img = req.file.secure_url
    User.findByIdAndUpdate( req.user._id, {username, img})
      .then(user => res.redirect(`/user/milista`))
      .catch(err => console.log(err))
})

//User.find({$pull: {list: [req.params.delete_id]}})

Router.get("/milista/:id", (req, res) => {
    User.findByIdAndUpdate(req.user._id, {$pull: {list: req.params.id}})
      .then(() => {
        res.redirect("/user/milista")

      })
      .catch(err => {

      })

})




module.exports = Router;