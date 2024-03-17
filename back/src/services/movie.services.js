const pushear= require('../controllers/POST.controllers')

const axios = require('axios');
const { getPeliculasService } = require('./POST.service');

const getMovies = async ()=> {
    try {

     const response = await axios.get("https://students-api.up.railway.app/movies")
     const peliculasExternas =response.data;
      
     const peliculasAdicionales = await getPeliculasService();
        
     peliculasExternas.push(...peliculasAdicionales);
        return peliculasExternas;
     
     //llamar a este modulo
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = getMovies;
