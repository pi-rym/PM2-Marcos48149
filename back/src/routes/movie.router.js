



const { Router } = require('express');
const movieController = require('../controllers/movieControllers');
const POSTController = require('../controllers/POST.controllers');
const validateMovies= require("../middlewares/validacion");

const router = Router();

router.get("/", movieController.getAllMovie);
router.get("/",  POSTController.getPeliculasController);
router.post("/",validateMovies, POSTController.postPeliculasController)

module.exports = router;

