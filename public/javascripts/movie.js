import Axios from "axios";

const pepe = (movie) => {
  axios.post("http://localhost:3000/userProfile",movie)
  .then(resp=>console.log(resp))
  console.log(movie)
}
