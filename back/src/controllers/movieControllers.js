// en este modulo van a estar las funciones que establecen las LOGICAS DE NEGOCIO de cada una de las rutas

// para esa ruta GET/ users => 
//vamoos a ir a la base de datos a pedir la informacion de los usuarios 
//y responder al cliente con la infoormacion obtenida.

//const getAllMovie= (req,res)=>{
   // res.status(200).send("endpoint para obtener peliculas");
//}


//module.exports= getAllMovie;

const movieService = require('../services/movie.services');

module.exports = {
    getAllMovie: async (req, res) => {
        try {
            const movies= await movieService();
            res.status(200).json(movies);

        } catch (error) {
            res.status(500).json({
                error: "error interno del servidor"});
        }
   
     },
      
 };