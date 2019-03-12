const Router = require("express").Router();
const User = require("../models/User");


Router.get("/animo", (req,res) =>{
  res.render("user/animo")
})

Router.get("/verde", (req,res)=>{
  res.render("user/form", {
    ruta:"formverde", 
    gener:[
      {value:"28", name:"Action"}, 
      {value:"12", name:"Aventure"},
      {value:"26", name:"Animation"},
      {value:"35", name:"Comedy"},
      {value:"10751", name:"Family"},
      {value:"14", name:"Fantasy"},
      {value:"10749", name:"Romance"},
      {value:"878", name:"Science Fiction"}
    ]})
})

Router.get("/rojo", (req,res)=>{
  res.render("user/form", {
    ruta:"formverde", 
    gener:[
      {value:"80", name:"Crime"}, 
      {value:"18", name:"Drama"},
      {value:"27", name:"Horror"},
      {value:"9648", name:"Mistery"},
      {value:"53", name:"Thriller"},
      {value:"10752", name:"War"}
     
  
    ]})
})


Router.get("/amarillo", (req,res)=>{
  res.render("user/form" , {
    ruta:"formverde", 
    gener:[
      {value:"99", name:"Documentary"}, 
      {value:"36", name:"History"},
      {value:"10402", name:"Music"},
      {value:"10770", name:"TV Movie"},
      {value:"37", name:"Western"}
    
    ]})
  })

  Router.get("/milista",(req,res)=>{
    res.render("user/profile")
  })


module.exports = Router;