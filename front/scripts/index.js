//console.log(tempData);

const axios= require('axios');
const addUser= require('./renderCard')


const get= ()=>{axios.get("http://localhost:3000/movies")
.then(({data})=> data.forEach(addUser))
.catch((error)=> console.log(error.message))
} 
get();









//$.get('https://students-api.up.railway.app/movies', function( crear){

//crear.map( (movie) => addUser(movie));
//})
    
    
