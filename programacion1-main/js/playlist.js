let recStorage = localStorage.getItem('favoritos');
let favoritos= JSON.parse(recStorage);

console.log(favoritos.length);

let section = document.querySelector('.playlist');

let cancionesFav = '';

if(favoritos == null || favoritos.length == 0){
    section.innerHTML = '<p> No agregaste nada a favoritos </p>'
} 
else{
    for(let i=0; i < favoritos.length; i++){
        let URL = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${favoritos[i]}`;

        fetch(URL)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            cancionesFav += 
            `<article> 
            <img src= ${data.album.cover_xl}>
            <p> Nombre: ${data.title} </p>
            <a href="./detail-track.html?id=${data.id}"> Ir a detalle </a>
            </article>`

            section.innerHTML = cancionesFav; 
        })
    }
}