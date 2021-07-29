const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.API_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connection Established"))
    .catch(console.error);

const Movie = require('./models/Movie.js');
//Hello Dev

app.get('/movies', async (req, res) => {
    const movies  = await Movie.find(
        { genres: { $all: ["Horror"]}}
    );

    res.json(movies);
});



app.listen(PORT, () => console.log(`Server connected on port ${PORT}`));