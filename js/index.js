// Llamando a la API

// Albums
let topAlbumsEndpoint = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums"

// Trabajando con la API
fetch(topAlbumsEndpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let objeto = data.data
        console.log(objeto);
        let contenedora = document.querySelector(".contenedoralbumes")
        for (let i = 0; i < 5; i++) {
            contenedora.innerHTML += `<div>
        <a href="./detail-album.html?id=${data.data[i].id}" class="hiperindex">
            <div class="albumhija" class="hiperindex">
                <img class="cancionimg" src=${objeto[i].cover_medium} alt="imagen de album">
                <h3 class="nombreartista">
                ${objeto[i].title}
                </h3>
                <h4 class="nombrealbum">
                ${objeto[i].artist.name}
                </h4>   
            </div>
        </a>
    </div>`
        }
    })
    .catch(function (error) {
        console.log(error);
    });

// Bandas
let topTrackEndpoint = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart"

fetch(topTrackEndpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let ol = data.artists
        let ot = data.tracks
        for (let i = 0; i < 5; i++) {
            document.querySelector(".contenedoralbumes2").innerHTML += `<div>
        <a href="./detail-artist.html?id=${ol.data[i].id}" class="hiperindex">
            <div class="artistahija">
                <img class="cancionimg2" src=${ol.data[i].picture_medium} alt="${ol.data[i].name}">
                <h3 class="nombreartista">
                ${ol.data[i].name}
                </h3>
            </div>
        </a>
        </div>`;
        };
// Tracks
        for (let i = 0; i < 5; i++) {
            document.querySelector(".contenedordiscos").innerHTML += `
        <div>
            <a href="./detail-track.html?id=${ot.data[i].id}" class="hiperindex">
                <div class="cancionhija">
                    <img class="cancionimg3" src="${ot.data[i].album.cover_medium}" alt="Music of the spheres">
                    <h3 class="nombreartista">
                    ${ot.data[i].title}
                    </h3>
                    <h4 class="nombrealbum">
                    ${ot.data[i].artist.name}
                    </h4>
                </div>
            </a>
        </div>`;

        }
    })


    .catch(function (error) {
        console.log(error);
    })

