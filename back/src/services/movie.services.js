//const pushear= require('../controllers/POST.controllers')

//const axios = require('axios');
const { getPeliculasService } = require('./POST.service');
const Movie = require('../models/Movie');

const getMovies = async ()=> {
    try {

     const movies = await Movie.find();
    
      
     const peliculasAdicionales = await getPeliculasService();
        
     const peliculasExternas = [...movies,...peliculasAdicionales]

        return peliculasExternas;
     
     //llamar a este modulo
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = getMovies;
