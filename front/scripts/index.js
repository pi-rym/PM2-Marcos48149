//console.log(tempData);

const addUser= require('./renderCard')

const contenedor = document.querySelector('.FlexContainer');


$.get('https://students-api.2.us-1.fl0.io/movies', function( crear){

crear.map( (movie) => addUser(movie));
})
    
    
