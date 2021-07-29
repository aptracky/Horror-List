const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    plot: {
        type: String
    },
    geners: {
        type: Array
    },
    runtime: {
        type: Number
    },
    cast: {
        type: Array
    },
    title: {
        type: String
    }
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;