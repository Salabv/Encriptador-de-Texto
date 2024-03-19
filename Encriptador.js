// Función para encriptar el texto
function encriptar() {
    var textoOriginal = document.getElementById("texto").value;
    var textoEncriptado = '';

    for (var i = 0; i < textoOriginal.length; i++) {
        var charCode = textoOriginal.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            // Si es una letra minúscula, encripta el caracter
            charCode = 219 - charCode;
        }
        textoEncriptado += String.fromCharCode(charCode);
    }

    mostrarMensajeEncriptado(textoEncriptado);
}

// Función para desencriptar el texto
function desencriptar() {
    var textoEncriptado = document.getElementById("texto").value;
    var textoDesencriptado = '';

    for (var i = 0; i < textoEncriptado.length; i++) {
        var charCode = textoEncriptado.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            // Si es una letra minúscula, desencripta el caracter
            charCode = 219 - charCode;
        }
        textoDesencriptado += String.fromCharCode(charCode);
    }

    mostrarMensajeEncriptado(textoDesencriptado);
}

// Función para mostrar el texto encriptado o desencriptado en el área correspondiente
function mostrarMensajeEncriptado(texto) {
    var mensajeEncriptado = document.getElementById("mensaje-encripatado");
    var tituloMensaje = document.getElementById("titulo-mensaje");
    var parrafoMensaje = document.getElementById("parrafo");

    if (texto.trim() !== '') {
        tituloMensaje.innerText = "Mensaje " + (texto === 'Ningun mensaje encontrado' ? "no encontrado" : "encriptado");
        parrafoMensaje.innerText = texto;
        mensajeEncriptado.style.display = "block";
    } else {
        tituloMensaje.innerText = "Ningun mensaje encontrado";
        parrafoMensaje.innerText = "Ingresa el texto que deseas encriptar o desencriptar";
        mensajeEncriptado.style.display = "none";
    }
}

function copiarTexto() {
    var textoACopiar = document.getElementById("mensaje-encripatado").innerText;
    var elementoTemporal = document.createElement("textarea");
    document.body.appendChild(elementoTemporal);
    elementoTemporal.value = textoACopiar;
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
    alert("¡Texto copiado!");
}