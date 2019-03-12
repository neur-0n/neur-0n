const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const movieSchema = new Schema({
  tittle: String,
  genero: String,
  img: String,
  overview: String,
  dates: String,
  popularity: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
