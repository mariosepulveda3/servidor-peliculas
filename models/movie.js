const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Creamos nuestro esquema

const movieSchema = new Schema(
    {
        title: {type: String, required: true},
        director: {type: String, required: true},
        year: {type: Number, required: true},
        genre: {type: String, required: true},
    },
    {
        timestamps: true
    }
);

const Movie = mongoose.model('movies', movieSchema);
module.exports = Movie;
