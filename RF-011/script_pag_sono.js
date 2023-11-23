function myFunction1() {
    let dropdown = document.getElementById("numero1");
    var valorSelecionado = dropdown.options[dropdown.selectedIndex].value;
    return parseInt(valorSelecionado);
}
function myFunction2() {
    let dropdown = document.getElementById("numero2");
    var valorSelecionado = dropdown.options[dropdown.selectedIndex].value;
    return parseInt(valorSelecionado);
}

function adicionarHora(hora, minuto, minutosAdicionais) {
    let totalMinutos = hora * 60 + minuto;

    totalMinutos += minutosAdicionais;
    let novaHora = Math.floor(totalMinutos / 60);

    if(novaHora>23){
     novaHora = novaHora-24;
    }
  
    return novaHora;
}

function adicionarMinutos(hora, minuto, minutosAdicionais) {
    let totalMinutos = hora * 60 + minuto;
    totalMinutos += minutosAdicionais;
    let novoMinuto = totalMinutos % 60;

    if(novoMinuto < 0){
        novoMinuto = 0-novoMinuto;
    }
    return novoMinuto;
}

function subtraiMinutos(hora, minutos, minutosExc) {
    let minutosTotais = hora * 60 + minutos;
    minutosTotais -= minutosExc;

    let novoMinuto = Math.abs(minutosTotais) % 60;

    if(novoMinuto < 0){
    novoMinuto = 0-novoMinuto;
    }
    return novoMinuto;
}

function subtraiHora(hora, minutos, minutosExc) {
    let minutosTotais = hora * 60 + minutos;
    minutosTotais -= minutosExc;

    let novaHora = Math.floor(Math.abs(minutosTotais) / 60);

    if(hora < 9){
    novaHora =  24 - novaHora;
    }
    if(novaHora>23){
    novaHora = novaHora-24;
    }
    return novaHora;
}

function TransformarStrHora(hora){
    if(hora < 10){
        hora = hora.toString();
        hora = "0"+hora.toString();
        return hora;
    }
    return hora.toString();
}

function TransformarStrMinuto(minuto){
    if(minuto < 10){
        minuto = minuto.toString();
        minuto = "0"+ minuto
        return minuto;
    }
    return minuto.toString();
}


function Calcular(){

    var ciclo1 = {
        hora: subtraiHora(myFunction1(),myFunction2(),540),
        minuto: subtraiMinutos(myFunction1(),myFunction2(),540)
    };
    var ciclo2 = {
        hora: adicionarHora(ciclo1.hora, ciclo1.minuto,90),
        minuto: adicionarMinutos(ciclo1.hora, ciclo1.minuto,90)
    };
    var ciclo3 = {
        hora: adicionarHora(ciclo2.hora, ciclo2.minuto,90),
        minuto: adicionarMinutos(ciclo2.hora, ciclo2.minuto,90)
    };
    var ciclo4 = {
        hora: adicionarHora(ciclo3.hora, ciclo3.minuto,90),
        minuto: adicionarMinutos(ciclo3.hora, ciclo3.minuto,90)
    };
    var ciclo5 = {
        hora: adicionarHora(ciclo4.hora, ciclo4.minuto,90),
        minuto: adicionarMinutos(ciclo4.hora, ciclo4.minuto,90)
    };
    var ciclo6 = {
        hora: adicionarHora(ciclo5.hora, ciclo5.minuto,90),
        minuto: adicionarMinutos(ciclo5.hora, ciclo5.minuto,90)
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
                    <tr style="color: green">
                        <th scope="row">6</th>
                        <td>${TransformarStrHora(ciclo1.hora)+":"+TransformarStrMinuto(ciclo1.minuto)}</td>
                        <td>540 minutos</td>
                    </tr>
                    <tr style="color: green">
                        <th scope="row">5</th>
                        <td>${TransformarStrHora(ciclo2.hora)+":"+TransformarStrMinuto(ciclo2.minuto)}</td>
                        <td>450 minutos</td>
                    </tr>
                    <tr style="color: rgb(150, 100, 8);">
                        <th scope="row">4</th>
                        <td>${TransformarStrHora(ciclo3.hora)+":"+TransformarStrMinuto(ciclo3.minuto)}</td>
                        <td>360 minutos</td>
                    </tr>
                    <tr style="color: rgb(185, 0, 0);">
                        <th scope="row">3</th>
                        <td>${TransformarStrHora(ciclo4.hora)+":"+TransformarStrMinuto(ciclo4.minuto)}</td>
                        <td>270 minutos</td>
                    </tr>
                    <tr style="color: rgb(185, 0, 0);">
                        <th scope="row">2</th>
                        <td>${TransformarStrHora(ciclo5.hora)+":"+TransformarStrMinuto(ciclo5.minuto)}</td>
                        <td>180 minutos</td>
                    </tr>
                    <tr style="color: rgb(185, 0, 0);">
                    <th scope="row">1</th>
                        <td>${TransformarStrHora(ciclo6.hora)+":"+TransformarStrMinuto(ciclo6.minuto)}</td>
                        <td>90 Minutos</td>
                    </tr>
                </tbody>
            </table>
        `;

    Divtela.innerHTML = newDiv;
}
