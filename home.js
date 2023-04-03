const mapDiv = document.getElementById("map"),
    coords = {
        lat: -33.16,
        lng: -60.51
    };
let map;
console.log("La resolución de tu pantalla es: " + innerWidth + " x " + innerHeight);
var clientWidth = document.querySelector('.main-section').clientWidth;
var clientHeight = document.querySelector('.main-section').clientHeight;
console.log(`Ancho: ${clientWidth} - Alto: ${clientHeight}`);

function initMap() {
    map = new google.maps.Map(mapDiv, {
        center: coords,
        zoom: 17,
    });


    const marker = new google.maps.Marker({
        position: coords,
        map: map,
    });
}

window.initMap = initMap;