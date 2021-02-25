function empezar() {
    console.log("Empezo")
    let cajapuntos = document.getElementById("cajapuntos");
    cajapuntos.innerHTML = "";
    cajapuntos.style.transition = "0.5s";
    cajapuntos.removeAttribute("onclick");
    cajapuntos.removeAttribute('class');

    cajapuntos.style.background = "rgb(59, 59, 59)";
    setTimeout(activarB1, "500");
    setTimeout(activarB2, "700");
    setTimeout(activarB4, "900");
    setTimeout(activarB3, "1100");

    setTimeout(activarB1, "1300");
    setTimeout(activarB2, "1500");
    setTimeout(activarB4, "1700");
    setTimeout(activarB3, "1900");

    setTimeout(activarB1, "2100");
    setTimeout(activarB2, "2300");
    setTimeout(activarB4, "2500");
    setTimeout(activarB3, "2700");
    setTimeout(reporducirsecunecia, "3500");





    function reporducirsecunecia() {
        setTimeout(reproducion, 600)

        if (secuenciaNivel.length == 0) {
            Agregarsecuencia();
        }
        let record = localStorage.getItem("record")
        cajapuntos.style.flexDirection = "column";
        cajapuntos.innerHTML = "<h3>Nivel: " + nivelUsuario + "</h3><h4> Redord: " + record + "</h4>";

    }



    function reproducion() {


        switch (secuenciaNivel[nivel]) {
            case "G":
                activarB1();
                break;
            case "I":
                activarB2();
                break;
            case "V":
                activarB3();
                break;

            case "R":
            default:
                activarB4();
                break;


        }
        nivel++;
        if (secuenciaNivel.length == nivel) {
            reproduciendo = false;
            juego();
        } else {
            reporducirsecunecia();
        }




    };


    document.getElementById("b1").addEventListener("click", function() {
        if (reproduciendo == false) {
            activarB1()
            secuenciaUsuario.push("G")
            if (secuenciaNivel.length == secuenciaUsuario.length) { validarSecuencia() }
        }

    });


    document.getElementById("b2").addEventListener("click", function() {
        if (reproduciendo == false) {
            activarB2()
            secuenciaUsuario.push("I")
            if (secuenciaNivel.length == secuenciaUsuario.length) { validarSecuencia() }
        }
    });


    document.getElementById("b3").addEventListener("click", function() {
        if (reproduciendo == false) {
            activarB3()
            secuenciaUsuario.push("V")
            if (secuenciaNivel.length == secuenciaUsuario.length) { validarSecuencia() }
        }
    });


    document.getElementById("b4").addEventListener("click", function() {
        if (reproduciendo == false) {
            activarB4()
            secuenciaUsuario.push("R")
            if (secuenciaNivel.length == secuenciaUsuario.length) { validarSecuencia() }
        }
    });

    function juego() {

        console.log("es tu turno");


    }




    function validarSecuencia() {
        console.log("nivel:", secuenciaNivel);
        console.log("usuario:", secuenciaUsuario);
        var arraycorrecto = [];

        var i
        for (i = 0; i < secuenciaNivel.length; i++) {
            if (secuenciaNivel[i] == secuenciaUsuario[i]) {
                arraycorrecto.push("T");
            } else {
                arraycorrecto.push("F");
            }
            console.log("errores:", arraycorrecto);
        }




        if (arraycorrecto.includes("F")) {
            var record = localStorage.getItem("record");
            if (nivelUsuario > record || record == null) {
                localStorage.setItem("record", nivelUsuario);
            }
            record = localStorage.getItem("record");
            alert("Cometiste un error. Tu puntuacion es: " + nivelUsuario + " | Record: " + record);

            location.reload();

        } else {
            console.log("felicidades pasaste de nivel");
            reproduciendo = true;
            nivelUsuario++;
            nivel = 0;
            secuenciaUsuario = [];
            Agregarsecuencia();
            setTimeout(reporducirsecunecia, "1000");


        }
    }

}


var reproduciendo = true;
var nivel = 0;
var nivelUsuario = 1;
var secuenciaNivel = []
var secuenciaUsuario = []


function Agregarsecuencia() {
    var num = parseInt(Math.random() * 10);

    switch (num) {
        case 1:
        case 2:
        case 3:
            secuenciaNivel.push("G");
            break;

        case 4:
        case 5:
            secuenciaNivel.push("I");
            break;

        case 6:
        case 7:
        case 8:
            secuenciaNivel.push("V");
            break;

        case 9:
        default:
            secuenciaNivel.push("R");


    }



}















function activarB1() {
    var b1 = document.getElementById("b1");
    b1.style.transition = "0.2s";
    b1.style.background = "#00fc93"

    setTimeout(function() {
        b1.style.background = "#00fc93c0"
    }, "300");
    b1.innerHTML = '<audio src="sonds/SN1.mp3" autoplay></audio>'

}



function activarB2() {
    var b2 = document.getElementById("b2");
    b2.style.transition = "0.2s";
    b2.style.background = "#d4ff5c"
    setTimeout(function() {
        b2.style.background = "#d4ff5cb4"
    }, "300");
    b2.innerHTML = '<audio src="sonds/SN2.mp3" autoplay></audio>'


}



function activarB3() {
    var b3 = document.getElementById("b3");
    b3.style.transition = "0.2s";
    b3.style.background = "#af04ff"
    setTimeout(function() {
        b3.style.background = "#ac03fabd"
    }, "300");
    b3.innerHTML = '<audio src="sonds/SN4.mp3" autoplay></audio>'

}


function activarB4() {
    var b4 = document.getElementById("b4");
    b4.style.transition = "0.2s";
    b4.style.background = "#fa1876"
    setTimeout(function() {
        b4.style.background = "#fa1876bd"
    }, "300");
    b4.innerHTML = '<audio src="sonds/SN3.mp3" autoplay></audio>'

}