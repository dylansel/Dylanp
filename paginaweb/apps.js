//---------------------------------  CLASE 9  -------------------------------------
//APIS LOCALES

//geolocalizacion   
var selector = document.getElementById("ubicacion");

function obtenerLocalizacion() {
    navigator.geolocation.getCurrentPosition(mostrarPosicion);
}

function mostrarPosicion(posicion) {
    // posicion: Devuelve un objeto llamado "GeolocationPosition"
    console.log(posicion)
    selector.innerHTML = "Latitud: <br>" + posicion.coords.latitude +
        "<br>Longitud: <br>" + posicion.coords.longitude;
}


//Local Storage 


document.querySelector("#guardarCambios").addEventListener("click", guardar)

var body1 = document.querySelector("body");
var div1 = document.querySelector(".padre");
var texto1 = document.querySelector("p");
mostrarFondo()

function guardar() {
    var colorFondoBody = document.getElementById("colorFondoBody").value;
    var colorFondoDiv = document.getElementById("colorFondoDiv").value;
    var colorTexto = document.getElementById("colorTexto").value;

    localStorage.setItem("colorFondoBody", colorFondoBody);
    localStorage.setItem("colorFondoDiv", colorFondoDiv);
    localStorage.setItem("colorTexto", colorTexto);
    mostrarFondo();

}

function mostrarFondo() {

    var colorFondoBody = localStorage.getItem("colorFondoBody")
    var colorFondoDiv = localStorage.getItem("colorFondoDiv");
    var colorTexto = localStorage.getItem("colorTexto");

    document.getElementById("colorFondoBody").value = colorFondoBody;
    document.getElementById("colorFondoDiv").value = colorFondoDiv;
    document.getElementById("colorTexto").value = colorTexto;
    body1.style.background = colorFondoBody;
    div1.style.background = colorFondoDiv;
    texto1.style.color = colorTexto;





}