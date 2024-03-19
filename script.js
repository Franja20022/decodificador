const textArea = document.querySelector(".area-texto");
const mensaje = document.querySelector(".mensaje-encript")

function ocultarMensaje() {
    var mensaje = document.querySelector('.mensaje-inicial');
    mensaje.style.display = 'none';
}


function btnEncript(){
    const textoEncript = encriptar(textArea.value)
    mensaje.value = textoEncript
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mostrarBotonCopiar();
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai" ],["o","ober"],["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i= 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}


function btnDesencript(){
    const textoEncript = desencriptar(textArea.value)
    mensaje.value = textoEncript
    textArea.value = "";
    mostrarBotonCopiar();
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai" ],["o","ober"],["u", "ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i= 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

const mensajeEncriptado = document.querySelector(".mensaje-encript");
const botonCopiar = document.querySelector(".copiar");

function copiarAlPortapapeles() {
    
    const textoEncriptado = mensajeEncriptado.value;

    
    navigator.clipboard.writeText(textoEncriptado)
        .then(function() {

            alert('El texto encriptado ha sido copiado al portapapeles.');
        })
        .catch(function(error) {

            console.error('Error al intentar copiar el texto al portapapeles: ', error);
            alert('Error al intentar copiar el texto al portapapeles. Por favor, inténtalo de nuevo.');
        });
}


mensajeEncriptado.addEventListener('input', function() {

    if (mensajeEncriptado.value.trim() !== "") {

        botonCopiar.style.display = 'block';
    } else {

        botonCopiar.style.display = 'none';
    }
});


botonCopiar.addEventListener('click', function() {

    copiarAlPortapapeles();
});



function mostrarBotonCopiar() {
    var botonCopiar = document.querySelector('.copiar');
    botonCopiar.style.display = 'block';
}


function ocultarBotonCopiar() {
    var botonCopiar = document.querySelector('.copiar');
    botonCopiar.style.display = 'none';
}

function ocultarMensaje(){
    var mensaje = document.querySelector(".mensaje-inicial");
    mensaje.style.display = "none"
}

const areaTexto = document.querySelector(".area-texto");
const mensajeEncript = document.querySelector(".mensaje-encript");

areaTexto.addEventListener('input', function() {
    if (areaTexto.value.trim() === "") {
        areaTexto.value = "";
    }
});

mensajeEncript.addEventListener('input', function() {
    if (mensajeEncript.value.trim() === "") {
        mensajeEncript.value = "";
    }
});

window.addEventListener('load', function() {
    mensajeEncript.value = "";
});