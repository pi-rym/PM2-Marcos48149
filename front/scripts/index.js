console.log(tempData);

 


const contenedor = document.querySelector('.FlexContainer');

const extraer = tempData.map((el) => {
    // Crear elementos HTML para la tarjeta
    const titulo = document.createElement('h3');
    const año = document.createElement('p');
    const director = document.createElement('p');
    const duracion = document.createElement('p');
    const valoracion = document.createElement('p');
    const genero = document.createElement('p'); // recibe un arreglo de string
    const imagen = document.createElement('img');
    const contenedorTarjeta = document.createElement('div');
    const contenedorHijo = document.createElement('div');
    const contenedorHijo2 = document.createElement('div');

    // Asignar valores a las propiedades correspondientes
    titulo.textContent = el.title;
    año.textContent = el.year;
    director.textContent = el.director;
    duracion.textContent = el.duration;
    genero.textContent = el.genre.join(', '); // Unir los elementos del arreglo con coma y espacio
    valoracion.textContent = el.rate;
    imagen.src = el.poster;


    

    // Agregar clases CSS correspondientes
    titulo.classList.add('tituloForm');
    año.classList.add('año');
    director.classList.add('director');
    duracion.classList.add('duration');
    genero.classList.add('genero');
    valoracion.classList.add('valoracion');
    imagen.classList.add('imagen');
    contenedorTarjeta.classList.add('contenedorForm');

    contenedorHijo.classList.add('contenedorHijo');
    contenedorHijo2.classList.add('contenedorHijo2');
   
    // Appendear elementos al contenedor de la tarjeta
    contenedorHijo.appendChild(imagen);

    contenedorHijo2.appendChild(titulo);
    contenedorHijo2.appendChild(año);
    contenedorHijo2.appendChild(director);
    contenedorHijo2.appendChild(duracion);
    contenedorHijo2.appendChild(genero);
    contenedorHijo2.appendChild(valoracion);
   

    // Agregar la tarjeta al contenedor principal
    
    contenedorTarjeta.appendChild(contenedorHijo);
    contenedorTarjeta.appendChild(contenedorHijo2);
    contenedor.appendChild(contenedorTarjeta);

    // Retornar el contenedor de la tarjeta
    return contenedorTarjeta;
});
