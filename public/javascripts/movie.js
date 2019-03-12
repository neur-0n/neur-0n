

const pepe = (movie) => {
  axios.post("http://localhost:3000/userProfile", movie) //hago una llamada post mediante axios de las fucking movies
  .then(resp=> console.log(resp))
  //.cath(err => console.log(err))
  
}
