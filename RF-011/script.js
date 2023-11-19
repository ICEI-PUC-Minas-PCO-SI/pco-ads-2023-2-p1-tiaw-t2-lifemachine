function myFunction1(){
    var numero1 = document.querySelector("numero1").value;
    console.log(numero1);
}

/*
function myFunction1() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    return numero1;
}

function myFunction2() {
    var numero2 = parseInt(document.getElementById("numero2").value);
    return numero2;
}

let horaMinuto = new Date();
horaMinuto.setHours(myFunction1());
horaMinuto.setMinutes(myFunction2());


function modelarHoras (horas, tempoCiclo){
    if(horas < 9){
        let resultado = 24 - (tempoCiclo - horas);
        return  resultado;
    }else{
        let resultado = horas - tempoCiclo;
        return resultado;
    }
}
function modelarMinutos (minutos, tempoCiclo){
    if(horas < 9){
        let resultado = 60 - (tempoCiclo - minutos);
        return  resultado;
    }else{
        let resultado = minutos - tempoCiclo;
        return resultado;
    }
}

var ciclo1 = {
    horaNum: modelarHoras(horaMinuto.getHours(), 9),
    MinNum: modelarHoras(horaMinuto.getMinutes(), 9),
    horaString: modelarMinutos(horaMinuto.getHours(), 0).toString(),
    MinString: modelarMinutos(horaMinuto.getMinutes(), 0).toString(),
};

var ciclo2 = {
    horaNum: modelarHoras(horaMinuto.getHours(), 8),
    MinNum: modelarHoras(horaMinuto.getMinutes(), 8),
    horaString: modelarMinutos(horaMinuto.getHours(), 30).toString(),
    MinString: modelarMinutos(horaMinuto.getMinutes(), 30).toString(),
};

var ciclo3 = {
    horaNum: modelarHoras(horaMinuto.getHours(), 7),
    MinNum: modelarHoras(horaMinuto.getMinutes(), 7),
    horaString: modelarMinutos(horaMinuto.getHours(), 30).toString(),
    MinString: modelarMinutos(horaMinuto.getMinutes(), 30).toString(),
};

var ciclo4 = {
    horaNum: modelarHoras(horaMinuto.getHours(), 6),
    MinNum: modelarHoras(horaMinuto.getMinutes(), 6),
    horaString: modelarMinutos(horaMinuto.getHours(), 30).toString(),
    MinString: modelarMinutos(horaMinuto.getMinutes(), 30).toString(),
};

var ciclo5 = {
    horaNum: modelarHoras(horaMinuto.getHours(), 6),
    MinNum: modelarHoras(horaMinuto.getMinutes(), 6),
    horaString: modelarMinutos(horaMinuto.getHours(), 30).toString(),
    MinString: modelarMinutos(horaMinuto.getMinutes(), 30).toString(),
};


var ciclo6 = {
    horaNum: modelarHoras(horaMinuto.getHours(), 5),
    MinNum: modelarHoras(horaMinuto.getMinutes(), 5),
    horaString: modelarMinutos(horaMinuto.getHours(), 30).toString(),
    MinString: modelarMinutos(horaMinuto.getMinutes(), 30).toString(),
};


function teste() {
    let Divtela = document.getElementById("x");
    let newDiv = `
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Ciclo</th>
                        <th scope="col">Hora de adormecer</th>
                        <th scope="col">Tempo de Sono</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>1</td>
                        <td>${ciclo1.horaString}:${ciclo1.MinString}</td>
                        <td>99999999999999</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>2</td>
                        <td>${ciclo2.horaString}:${ciclo2.MinString}</td>
                        <td>450</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>3</td>
                        <td>${ciclo3.horaString}:${ciclo3.MinString}</td>
                        <td>360</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>4</td>
                        <td>${ciclo4.horaString}:${ciclo4.MinString}</td>
                        <td>360</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>5</td>
                        <td>${ciclo5.horaString}:${ciclo5.MinString}</td>
                        <td>360</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                        <td>6</td>
                        <td>${ciclo6.horaString}:${ciclo6.MinString}</td>
                        <td>360</td>
                    </tr>
                </tbody>
            </table>
        `;

    Divtela.innerHTML(newDiv);
}




    




/*
let objeto = {
    nome: 'André',
    idade: 20,
}

let json = JSON.stringify(objeto);
console.log(json);
*/
