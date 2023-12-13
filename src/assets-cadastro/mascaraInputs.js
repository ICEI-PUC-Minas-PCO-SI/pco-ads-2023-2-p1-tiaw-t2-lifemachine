function onlyTel(evento){
    inputTel = document.getElementById("tel");
    var code = evento.keyCode;

    if(code<48 || code>57 && code !== 8 && code !== 46) {
        return false;
    }

    maskTel(inputTel);

}
function maskTel(elemento){
    var content = elemento.value;

    if (content.length === 7){
        var text = "(" + content.substring(0, 2) + ") " + content.substring(2, 3) + " " + content.substring(3, 7) + "-" + content.substring(7);
        elemento.value = text;
    }

}

function onlyAltura(evento){
    inputTel = document.getElementById("Altura");
    var code = evento.keyCode;

    if(code<48 || code>57 && code !== 8 && code !== 46) {
        return false;
    }

    maskAltura(inputTel);

}
function maskAltura(elemento) {
    var content = elemento.value.replace(/[^\d]/g, '');
    var formatado = '';

    if (content.length > 0) {
        formatado = content.substring(0, 1);

        if (content.length > 1) {
            formatado += "," + content.substring(1, 3);
        }

        elemento.value = formatado;
    }
}

function onlyPeso(evento) {
    var inputPeso = document.getElementById("Peso");
    var code = evento.keyCode;

    if ((code < 48 || code > 57) && code !== 8 && code !== 46) {
        evento.preventDefault();
        return false;
    }

    maskPeso(inputPeso);
}

function maskPeso(elemento) {
    var content = elemento.value.replace(/[^\d]/g, '');
    var formatted = '';

    if (content.length > 0) {
        formatted = content.substring(0, 3);
        elemento.value = formatted;
    }
}
