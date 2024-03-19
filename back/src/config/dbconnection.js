const mongoose = require('mongoose');

const URI= 'mongodb+srv://marcosgomez48149:NJvU2ThHLnN0VQmi@movie.fvxv2ny.mongodb.net/movie?retryWrites=true&w=majority&appName=movie'

const dbconnection= async ()=>{
        mongoose.connect(URI)
}

module.exports= dbconnection;
