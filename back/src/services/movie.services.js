

const axios = require('axios')

const getMovies = async ()=> {
    try {

     const movie = await axios.get("https://students-api.up.railway.app/movies")

     return movie.data
    } catch (error) {
        console.log(error.message);
    }
}



module.exports = getMovies;
