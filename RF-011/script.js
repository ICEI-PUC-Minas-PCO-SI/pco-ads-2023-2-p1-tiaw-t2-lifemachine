function myFunction1() {
    let numero1 = document.getElementById("numero1");
    return numero1.value;
}

function myFunction2() {
    let numero2 = document.getElementById("numero2");
    return numero2.value;
}

function criarHora(){
    let Horario = {
        Hora: myFunction1(),
        Minuto: myFunction2(),
    }
    return Horario;
}


function modelarHoras (horas, tempoCiclo){
    if(horas < 9){
        var resultado1 = 24 - (tempoCiclo - horas);
        return  resultado1;
    }else{
        var resultado1 = horas - tempoCiclo;
        return resultado1;
    }
}
function modelarMinutos (minutos, tempoCiclo){
    if(minutos < 9){
        var resultado2 = 60 - (tempoCiclo - minutos);
        return  resultado2;
    }else{
        var resultado2 = minutos - tempoCiclo;
        return resultado2;
    }
}



function teste() {

    var horaMinuto = criarHora();

    var ciclo1 = {
        horaNum: modelarHoras(criarHora().Hora, 9),
        MinNum: modelarHoras(horaMinuto.Hora, 9),
        horaString: modelarMinutos(criarHora().Hora, 9).toString(),
        MinString: modelarMinutos(criarHora().Minuto, 0).toString(),
    };
    
    var ciclo2 = {
        horaNum: modelarHoras(horaMinuto.Horas, 8),
        MinNum: modelarHoras(horaMinuto.Horas, 8),
        horaString: modelarMinutos(criarHora().Hora, 8).toString(),
        MinString: modelarMinutos(criarHora().Minuto, 30).toString(),
    };
    
    var ciclo3 = {
        horaNum: modelarHoras(horaMinuto.Horas, 7),
        MinNum: modelarHoras(horaMinuto.Horas, 7),
        horaString: modelarMinutos(criarHora().Hora, 7).toString(),
        MinString: modelarMinutos(criarHora().Minuto, 30).toString(),
    };
    
    var ciclo4 = {
        horaNum: modelarHoras(horaMinuto.Horas, 6),
        MinNum: modelarHoras(horaMinuto.Horas, 6),
        horaString: modelarMinutos(criarHora().Hora, 6).toString(),
        MinString: modelarMinutos(criarHora().Minuto, 30).toString(),
    };
    
    var ciclo5 = {
        horaNum: modelarHoras(horaMinuto.Horas, 5),
        MinNum: modelarHoras(horaMinuto.Horas, 5),
        horaString: modelarMinutos(criarHora().Hora, 5).toString(),
        MinString: modelarMinutos(criarHora().Minuto, 30).toString(),
    };
    
    
    var ciclo6 = {
        horaNum: modelarHoras(horaMinuto.Horas, 4),
        MinNum: modelarHoras(horaMinuto.Horas, 4),
        horaString: modelarMinutos(criarHora().Hora, 4).toString(),
        MinString: modelarMinutos(criarHora().Minuto, 30).toString(),
    };

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

    Divtela.innerHTML = newDiv;
}



    


/* //Função de teste apenas
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
                        <td>ewrwerer:34234342</td>
                        <td>99999999999999</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>2</td>
                        <td>ewrwerer:34234342</td>
                        <td>450</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>3</td>
                        <td>ewrwerer:34234342</td>
                        <td>360</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>4</td>
                        <td>ewrwerer:34234342</td>
                        <td>360</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>5</td>
                        <td>ewrwerer:34234342</td>
                        <td>360</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                        <td>6</td>
                        <td>ewrwerer:34234342</td>
                        <td>360</td>
                    </tr>
                </tbody>
            </table>
        `;

    Divtela.innerHTML = newDiv;
}
*/


/*
let objeto = {
    nome: 'André',
    idade: 20,
}

let json = JSON.stringify(objeto);
console.log(json);
*/
