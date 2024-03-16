//const { Router } = require("express");

const express = require("express");
const router = require("./routes/index");
const morgan = require('morgan')
const cors = require('cors')


const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use((req, res, next)=>{
    console.log('mi primer middleware');
    next()
})

const miMiddleware = (req, res, next) => {
    console.log(`He recibido una request del tipo ${req.method} a la ruta ${req.url}`);

    next()
}

app.use(miMiddleware)

app.use(router);


module.exports= app;


