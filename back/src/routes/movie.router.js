



const { Router } = require('express');
const movieController = require('../controllers/movieControllers');

const router = Router();

router.get("/", movieController.getAllMovie);

module.exports = router;

