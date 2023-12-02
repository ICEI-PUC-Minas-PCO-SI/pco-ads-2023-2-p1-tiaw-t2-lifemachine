const URL = 'http://localhost:3000/usuarios';

var treinosJAN = 0;
var treinosFEB = 0;
var treinosMAR = 0;
var treinosAPR = 0;
var treinosMAY = 0;
var treinosJUN = 0;
var treinosJUL = 0;
var treinosAUG = 0;
var treinosSEP = 0;
var treinosOCT = 0;
var treinosNOV = 0;
var treinosDEC = 0;


var dataAtual = new Date();
var mes = dataAtual.getMonth();
var jsonMes = `PesoMes` + mes
var auxPeso = JSON.parse(localStorage.getItem('pesoAtual'))
var auxID = JSON.parse(localStorage.getItem('atualID'))

 fetch(`${URL}/${auxID}`)
   .then(response => {
     if (response.ok) {
       // Se o usuário existir, realizar o PATCH apenas se a estrutura do mês não existir
       return fetch(`${URL}/${auxID}`)
         .then(res => res.json())
         .then(usuario => {
           if (!usuario[jsonMes]) {
             return fetch(`${URL}/${auxID}`, {
               method: "PATCH",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify({ [jsonMes]: auxPeso }), // Atualiza apenas o mês atual
             });
           }
         });
     } else {
       console.error("Usuário não encontrado.");
     }
   })
   .catch(error => {
     console.error("Erro durante a operação:", error);
   });            
    

fetch(`${URL}/${auxID}`)
.then(res => res.json())
.then(users => {

const pesos = []

for(let i = 0; i < 12 ; i++){
    const aux = `PesoMes${i}`

    if(users[aux] > 0){
        pesos[i] = users[aux];
    }
    else{
        pesos[i] = 0
    }
}
var data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [{
        label: 'Treinos concluidos',
        data: [
            treinosJAN, 
            treinosFEB, 
            treinosMAR, 
            treinosAPR, 
            treinosMAY, 
            treinosJUN, 
            treinosJUL, 
            treinosAUG, 
            treinosSEP, 
            treinosOCT, 
            treinosNOV, 
            treinosDEC
        ],
        borderColor: 'red',
        borderWidth: 4,
        fill: false
    },
    {
        label: 'Peso (KG)',
        data: [
            pesos[0],
            pesos[1],
            pesos[2],
            pesos[3],
            pesos[4],
            pesos[5],
            pesos[6],
            pesos[7],
            pesos[8],
            pesos[9],
            pesos[10],
            pesos[11]
        ],
        borderColor: 'blue',
        borderWidth: 4,
        fill: false
    }]
};

// Configuração do gráfico
var options = {
    scales: {
        x: {
            type: 'category',
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        },
        y: {
            beginAtZero: true,
            min: 0,
            max: 160
        }
    }
};


// Cria o gráfico de linhas
var ctx = document.getElementById('myLineChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});

})