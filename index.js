

document.getElementById("dialogo").value = "Hola!!! Somos una agencia secreta que encripta mensajes. Ingresa tus mensajes el siguiente campo, luego das click en el icono correspondiente y nosotros haremos el trabajo por ti.";


//realizaremos la funcion encriptar para encriptar el texto

function encriptar() {
    let textoAEncriptar = document.getElementById("textoAEncriptar").value;
    let imagenDetective = document.getElementById("imagenDetective");
    
    
    //g=toma toda la linea; m=toma multiples parrafos; i= toma mayusculas y minusculas

    let textoEncriptado = textoAEncriptar
                            .replace(/e/gim, "enter")
                            .replace(/i/gim, "imes")
                            .replace(/a/gim, "ai")
                            .replace(/o/gim, "ober")
                            .replace(/u/gim, "ufat");

    if(document.getElementById("textoAEncriptar").value.length !=0){
        document.getElementById("textoEncriptado").value=textoEncriptado;
        imagenDetective.src = "./img/detectiveEncontro.png";
        document.getElementById("dialogo").value = "¡Hemos encriptado con EXITO tu mensaje! Utilizalo con precuación.";

    }else{
        imagenDetective.src = "./img/detectiveNoEntiende.png";
        document.getElementById("dialogo").value="Algo anda mal. ¡Estamos confundidos.! Ingresa tu mensaje en el siguiente recuadro.";
    }
}

function desencriptar(){
    let textoADesencriptar = document.getElementById("textoAEncriptar").value;
    let imagenDetective = document.getElementById("imagenDetective");

    //g=toma toda la linea; m=toma multiples parrafos; i= toma mayusculas y minusculas

    let textoDesencriptado = textoADesencriptar
                                .replace(/enter/gi, "e")
                                .replace(/imes/gi, "i")
                                .replace(/ai/gi, "a")
                                .replace(/ober/gi, "o")
                                .replace(/ufat/gi, "u");

    if(document.getElementById("textoAEncriptar").value.length !=0){
        document.getElementById("textoEncriptado").value=textoDesencriptado;
        imagenDetective.src = "./img/detectiveEncontro.png";
        document.getElementById("dialogo").value = "¡Hemos Desencriptado con EXITO tu mensaje! Utilizalo con precuación.";
        }
        else{
            imagenDetective.src = "./img/detectiveNoEntiende.png";
            document.getElementById("dialogo").value="Algo anda mal. ¡Estamos confundidos.! Ingresa tu mensaje en el siguiente recuadro.";
            }
}

function iniciar(){
        document.getElementById("textoAEncriptar").value = "";
        document.getElementById("textoEncriptado").value = "";
        document.getElementById("imagenDetective").src="./img/dectectiveBuscando.png";
        dialogo.value = "Hola!! Somos una agencia secreta de expertos en encriptacion de mensajes. Para que puedas utilizarlos en tus misiones secretas, ingresalos en el recuadro izquierdo, luego das click en el icono correspondiente. Nosotros haremos el trabajo por ti.";
}

function copiar(){
    var textoACopiar = document.querySelector("#textoEncriptado");
    textoACopiar.select();
    document.execCommand("copy");

}