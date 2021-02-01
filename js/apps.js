document.querySelector("#bEntrar").addEventListener("click", validarDatos);
cargarconfiguracion()
var perfil1 = [
    "Dylan",
    "Seltzer",
    "17",
    "Desarollador Web",
    "Dylanseltzer4@gmail.com",
    "img/avatar.png"
]

function validarDatos() {
    var inputUsuario = document.getElementById("inputUsuario").value;
    var inputContrasenia = document.getElementById("inputContrasenia").value;
    var usuario1 = "dylan";
    var contrasenia1 = "123";

    if (usuario1 == inputUsuario && contrasenia1 == inputContrasenia) {
        console.log("Contraseña correcta");
        document.querySelector(".caja1").style.display = "block"
        mostrarPerfil();
    } else {
        document.getElementById("inputUsuario").value = "";
        document.getElementById("inputContrasenia").value = "";
        error.style.color = "red";
        error.innerHTML = "Datos incorrectos, Vuelva a intentarlo";
    }


}





function mostrarPerfil() {

    //document.querySelector("#padre").style.display = "none"
    document.querySelector(".caja1").innerHTML = (
        '<header><h2>Tu Perfil</h2></header>' +
        '<div class="caja2 cajaPerfil" id="caja2">' +
        '<i class="fas fa-cog configuracion" id="configuracion"></i>' +
        '<img id="imgPerfil" src="' + perfil1[5] + '">' +
        '<h3 class="h16">' + perfil1[0] + " " + perfil1[1] + '</h3>' +
        '<p class="h16">' + perfil1[2] + ' años </p>' +
        '<br>' +
        '<hr>' +
        '<p class="h16">' + perfil1[3] + '</p>' +
        '<hr>' +
        '<p class="h16">' + perfil1[4] + '</p>' +
        '<br>' +
        '<div id="info"></div>' +
        '<button type="button" class="boton" id="bAgregarInfo">Agregar info</button>' +
        '</div>'
    );

    document.querySelector("#configuracion").addEventListener("click", abrirConfiguracion);
    document.querySelector("#bAgregarInfo").addEventListener("click", agregarInfo);
    cargarInfo();
    cargarconfiguracion();
}

function agregarInfo() {

    var info = prompt("ingresa una descripcion:");
    localStorage.setItem("info1", info)
    cargarInfo();
}

function cargarInfo() {
    var info1 = localStorage.getItem("info1");
    if (info1 != null && info1 != "null" && (info1.includes("<") == false) && info1 != "" && info1 != " ") {
        var info = localStorage.getItem("info1");
        document.querySelector("#info").innerHTML = ('<hr><p class="info">' + info + '</p>');
        document.querySelector("#bAgregarInfo").textContent = "Modificar Descripcion";
    } else {
        document.querySelector("#info").innerHTML = ('');
    }





}

function abrirConfiguracion() {
    cargarconfiguracion();
    document.querySelector(".caja1").innerHTML = (

        '<div class="caja2 cajaPerfil" id="caja2">' +
        '<i class="fas fa-cog configuracion" id="configuracion"></i>' +
        '<img id="imgPerfil" src="' + perfil1[5] + '">' +
        '<h3 class="h16">' + perfil1[0] + " " + perfil1[1] + '</h3>' +
        '<p class="h16">' + perfil1[2] + ' años </p>' +
        '<br>' +
        '<hr>' +
        '<p class="h16">' + perfil1[3] + '</p>' +
        '<hr>' +
        '<p class="h16">' + perfil1[4] + '</p>' +
        '<br>' +
        '<div id="info"></div>' +
        '<button type="button" class="boton" id="bAgregarInfo">Agregar info</button>' +
        '</div>' +

        '<div class="caja2 cajaPerfil cajaConfiguracion" id="divConfiguracion">' +

        '<label for="">Fondo General: </label>' +
        '<input type="color" id="colorFondo"> ' +
        '<label for="">Fondo Perfil: </label>' +
        '<input type="color" id="colorFondoPerfil"> ' +
        '<label for="">Color Botones: </label>' +
        '<input type="color" id="colorBotones"> ' +

        '<br>' +
        '<button type="button" class="boton" id="guardarConfiguracion">Guardar Cambios</button>' +
        '<button type="button" class="boton" id="RestablecerConfiguracion">Restablecer</button>' +
        '</div>'
    );
    cargarconfiguracion();

    var colorFondo = document.getElementById("colorFondo");
    var colorFondoPerfil = document.getElementById("colorFondoPerfil");
    var colorBotones = document.getElementById("colorBotones");
    if (localStorage.getItem("colorFondo") == null) {
        colorFondo.value = "#1f1f1f";
        colorFondoPerfil.value = "#ebebeb";
        colorBotones.value = "#161616";
    } else {
        colorFondo.value = localStorage.getItem("colorFondo");
        colorFondoPerfil.value = localStorage.getItem("colorFondoPerfil");
        colorBotones.value = localStorage.getItem("colorBotones");
    }






    function guardarConfiguracion() {
        localStorage.setItem("colorFondo", colorFondo.value);
        localStorage.setItem("colorFondoPerfil", colorFondoPerfil.value);
        localStorage.setItem("colorBotones", colorBotones.value);
        mostrarPerfil();
        cargarconfiguracion()


    }


    document.getElementById("configuracion").style.color = "red";
    document.getElementById("configuracion").style.cursor = "default";
    document.querySelector("#guardarConfiguracion").addEventListener("click", guardarConfiguracion);
    document.querySelector("#RestablecerConfiguracion").addEventListener("click", RestablecerConfiguracion);
}

function cargarconfiguracion() {
    document.querySelector(".padre").style.background = localStorage.getItem("colorFondo");
    var colorFondo = localStorage.getItem("colorFondoPerfil");
    document.querySelector(".caja2").style.background = colorFondo;
    var colorBotones = localStorage.getItem("colorBotones");
    var boton = document.getElementsByTagName("button");
    boton[0].style.background = colorBotones;









}

function RestablecerConfiguracion() {

    localStorage.removeItem("colorFondo");
    localStorage.removeItem("colorFondoPerfil");
    localStorage.removeItem("colorBotones");
    cargarconfiguracion();
    mostrarPerfil();
}