function verificarMail() {
    var mail = document.querySelector("#mail").value;
    if (mail.endsWith("@hotmail.com") || mail.endsWith("@gmail.com") || mail.endsWith("@yahoo.com") || mail.endsWith("@outlook.com")) {
        var mailVerificado = mail;
    } else {
        alert("Este mail no es válido.");
    }
}

function verificarEdad() {
    var fecha = new Date(document.querySelector("#fecha").value);
    var anio = fecha.getFullYear();
    if (anio < 2000) {
        var fechaValidada = fecha;
    } else {
        alert("No puedes participar en este test.");
    }
}

function verificarCaracteres() {
    var nomApe = document.querySelector("#nom-ape").value;
    if (nomApe.length < 50) {
        var nomApeValido = nomApe;
    } else {
        alert("Supera los caracteres necesarios.");
    }
}

function verificarRespuestas() {
    var correctas = 0, incorrectas = 0;

    var pregunta1 = document.querySelector("select[name='pregunta']").value;
    if (pregunta1 === "1997"){
        correctas++;
    } else{
        incorrectas++;
    }

    var pregunta2 = document.querySelector("select[name='pregunta2']").value;
    if (pregunta2 === "1986"){
        correctas++;
    } else{
        incorrectas++;
    }

    var pregunta3 = document.querySelector("select[name='pregunta3']").value;
    if (pregunta3 === "Salas"){
        correctas++;
    } else{
        incorrectas++;
    }

    var pregunta4 = document.querySelector("select[name='pregunta4']").value;
    if (pregunta4 === "38"){
        correctas++;
    } else{
        incorrectas++;
    }

    var pregunta5 = document.querySelector("select[name='pregunta5']").value;
    if (pregunta5 === "1938"){
        correctas++;
    } else{
        incorrectas++;
    }

    var pregunta6 = document.querySelector("select[name='pregunta6']").value;
    if (pregunta6 == "Bernabé Ferreyra"){
        correctas++;
    } else{
        incorrectas++;
    }

    var radioBotones = document.querySelectorAll("input[name='pregunta7']");
    for (var i = 0; i < radioBotones.length; i++) {
        if (radioBotones[i].checked) {
            if (radioBotones[i].value === "Labruna"){
                correctas++;
            } else{
                incorrectas++;
            }
        }
    }

    var anios = document.querySelector("input[name='anios']").value;
    if (anios == 18) correctas++; else incorrectas++;

    var fundacion = document.querySelector("input[name='fundacion']").value;
    if (fundacion == 1901){
        correctas++;
    } else{
        incorrectas++;
    }

    if (correctas === 9) {
        alert("Felicitaciones!! Hiciste 9/9");
    }
    if (correctas > 6) {
        alert("Felicidades aprobaste. Hiciste " + correctas + "/9");
    }
    if (correctas <= 6){
        alert("Muy mal, por bostero desaprobaste. Hiciste " + correctas + "/9");
    }
}

document.querySelector("input[value='Enviar']").addEventListener('click', function(){
    verificarMail();
    verificarEdad();
    verificarCaracteres();
    verificarRespuestas()
})