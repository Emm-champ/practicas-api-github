const API_KEY = 'd5c9ffe9692ebbe70207941f76e9057b';

async function buscarPelicula(){

    const pelicula = document.getElementById('busqueda').value;

    const respuesta = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${pelicula}`
    );

    const datos = await respuesta.json();

    console.log(datos);

    const resultado = document.getElementById('resultado');

    if(datos.results.length > 0){

        const movie = datos.results[0];

        resultado.innerHTML = `
            <h2>${movie.title}</h2>
            <p>${movie.overview}</p>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
        `;
    }
}