let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre';

for (let i = 1; i < 13; i++){
fetch(url)
    .then(function(response){
    return response.json();
    })
    .then(function(datos){
        console.log(datos)
        let generos = datos.data;
        let contenedor = document.querySelector('.ListaGeneros');
        
        contenedor.innerHTML += 
        `<article class="articlecanc">
        <img src="${generos[i].picture_medium}" alt="" class="fotodiscos">
        <h4>${generos[i].name}</h4>
        <a href="./detalle-genero.html?id=${generos[i].id}" class="verMas">Ver más</a>
        </article>`
        
    })
    .catch(function(error){
        console.log("Error: " + error);
    })}
