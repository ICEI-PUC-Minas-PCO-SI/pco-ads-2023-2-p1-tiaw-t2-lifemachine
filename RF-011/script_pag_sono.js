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

function adicionarMinutos(hora, minuto, minutosAdicionais) {
    // Converter a hora e o minuto para minutos
    let totalMinutos = hora * 60 + minuto;

    totalMinutos += minutosAdicionais;
    let novaHora = Math.floor(totalMinutos / 60);
    let novoMinuto = totalMinutos % 60;

    if(novaHora>23){
      novaHora = novaHora-24;
    }

    if(novaHora < 10){
      novaHora = "0"+novaHora.toString();
    }
    if(novoMinuto < 10){
      novoMinuto = "0"+novoMinuto;
    }

    novaHora = novaHora.toString();
    novoMinuto = novoMinuto.toString();

    let horario = novaHora+":"+novoMinuto;
    return horario;
    
}

function subtraiMinutos(hora, minutos, minutosExc) {
    let minutosTotais = hora * 60 + minutos;

    minutosTotais -= minutosExc;

    let novaHora = Math.floor(Math.abs(minutosTotais) / 60);
    let novoMinuto = Math.abs(minutosTotais) % 60;

      if(hora < 9){
        novaHora =  12 + novaHora;
      }
      if(novoMinuto < 0){
      novoMinuto = 0-novoMinuto;
      }
  
      if(novaHora>23){
        novaHora = novaHora-24;
      }
  
      if(novaHora < 10){
        novaHora = "0"+novaHora.toString();
      }
      if(novoMinuto < 10){
        novoMinuto = "0"+novoMinuto;
      }

      novaHora = novaHora.toString();
      novoMinuto = novoMinuto.toString();
  
      let horario = novaHora+":"+novoMinuto;
      return horario;
}

function teste(){

    var ciclo1 = subtraiMinutos(myFunction1(),myFunction2(),540);
    var ciclo2 = subtraiMinutos(myFunction1(),myFunction2(),450);
    var ciclo3 = subtraiMinutos(myFunction1(),myFunction2(),360);
    var ciclo4 = subtraiMinutos(myFunction1(),myFunction2(),270);
    var ciclo5 = subtraiMinutos(myFunction1(),myFunction2(),180);
    var ciclo6 = subtraiMinutos(myFunction1(),myFunction2(),90);

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
                        <td>${ciclo1}</td>
                        <td>540 minutos</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>2</td>
                        <td>${ciclo2}</td>
                        <td>450 minutos</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>3</td>
                        <td>${ciclo3}</td>
                        <td>360 minutos</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>4</td>
                        <td>${ciclo4}</td>
                        <td>270 minutos</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>5</td>
                        <td>${ciclo5}</td>
                        <td>180 minutos</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                        <td>6</td>
                        <td>${ciclo6}</td>
                        <td>90 Minutos</td>
                    </tr>
                </tbody>
            </table>
        `;

    Divtela.innerHTML = newDiv;
}





//#region Tentativas frustratadas 
/*

function validHora(hora, valor){
    if(hora < 900){
        let resultado = 2400 - (valor - hora);
        return resultado;
    }
    else{
        let resultado = hora - valor;
        return resultado;
    }
}
function aaa (inteiro){
    if(inteiro > 2400){
        let resultado = inteiro - 2400;
        return resultado;
    }
    else{
        return inteiro;
    }
}
function concatenar(resultHora){

    if(resultHora < 100){
        let horaString = "00"+resultHora.toString();
        let hora = horaString.substring(0, 2);
        let minuto = horaString.substring(2, 4);
        let resultado = hora + ":" + minuto;
        return resultado;
    }
    if(resultHora < 1000){
        let horaString = "0"+resultHora.toString();
        let hora = horaString.substring(0, 2);
        let minuto = horaString.substring(2, 4);
        let resultado = hora + ":" + minuto;
        return resultado;
    }
    else{
        let horaString = resultHora.toString();
        let hora = horaString.substring(0, 2);
        let minuto = horaString.substring(2, 4);
        let resultado = hora + ":" + minuto;
        return resultado;
    }
}
function validarMinutos(inteiro){
    let inteiroStr = inteiro.toString();
    let finalInteiro = inteiroStr.substring(2, 4);
    if (finalInteiro == 30)
        return inteiro + 170;
    else{
        return inteiro + 130;
    }
}

function teste(){

    var horaString = myFunction1().toString() + myFunction2().toString();
    var horaInt = parseInt(horaString);
    var HoraValidada = validHora(horaInt, 900);

    var ciclo1 = HoraValidada;
    var ciclo2 = validarMinutos(HoraValidada);
    var ciclo3 = aaa(validarMinutos(parseInt(ciclo2)));
    var ciclo4 = aaa(validarMinutos(parseInt(ciclo3)));
    var ciclo5 = aaa(validarMinutos(parseInt(ciclo4)));
    var ciclo6 = aaa(validarMinutos(parseInt(ciclo5)));

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
                        <td>${concatenar(ciclo1)}</td>
                        <td>540 minutos</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>2</td>
                        <td>${concatenar(ciclo2)}</td>
                        <td>450 minutos</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>3</td>
                        <td>${concatenar(ciclo3)}</td>
                        <td>360 minutos</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>4</td>
                        <td>${concatenar(ciclo4)}</td>
                        <td>270 minutos</td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td>5</td>
                        <td>${concatenar(ciclo5)}</td>
                        <td>180 minutos</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                        <td>6</td>
                        <td>${concatenar(ciclo6)}</td>
                        <td>90 Minutos</td>
                    </tr>
                </tbody>
            </table>
        `;

    Divtela.innerHTML = newDiv;
}


  

/*
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

//#endregion