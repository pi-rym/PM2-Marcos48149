// aqui vamos a definir las rutas atrave sde las cuales nos vamos a comunicar

//tengo definida la solicitud a GET / users => que hace caudno obtiene la solicitud? eso lo define el controlador



const express = require("express");
const Movierouter = require("./movie.router");

const app = express();
app.use("/movies", Movierouter);


module.exports = app;

