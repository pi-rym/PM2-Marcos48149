const mongoose=require('mongoose')

movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    director:String,
    duration:Number,
    genre:String,
    rate:Number,
    poster:String,
});

const Movie= mongoose.model('MovieCollection', movieSchema);

module.exports= Movie;