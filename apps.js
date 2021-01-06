
function verificarContra() {
    var contraseña = document.getElementById("contraseñaa").value;
    if (contraseña == "123456") {
        console.log("La contraseña es Correcta");
        error.innerHTML = "La contraseña es Correcta"
        document.getElementById("contenedorSecreto").style.display = "block";
        document.getElementById("error").style.display = "block";
        document.getElementById("error").style.backgroundColor = "#2AFF04";
        document.getElementById("error").style.color = "black";
        document.getElementById("contraseñaa").value = "";

    } else {
        console.log("La contraseña es Incorrecta");
        document.getElementById("contraseñaa").value = "";
        error.innerHTML = "La contraseña es Incorrecta"
        document.getElementById("error").style.display = "block";
        document.getElementById("contenedorSecreto").style.display = "none";
    }
    return false;
}