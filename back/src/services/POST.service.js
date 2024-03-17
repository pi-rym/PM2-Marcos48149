

let peliculas = [];

const getPeliculasService = async () =>{
    
    return peliculas;
}

const postPeliculasService = async ({title, year, director, duration,genre,rate, poster }) => {

    const newMovie = {
            title,
            year,
            director,
            duration,
            genre,
            rate,
            poster
        }


    peliculas.push(newMovie)
}

module.exports = {getPeliculasService, postPeliculasService }
