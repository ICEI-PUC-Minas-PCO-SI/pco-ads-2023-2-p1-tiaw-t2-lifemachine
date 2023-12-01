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

var pesoJAN = 0;
var pesoFEB = 0;
var pesoMAR = 0;
var pesoAPR = 0;
var pesoMAY = 0;
var pesoJUN = 0;
var pesoJUL = 0;
var pesoAUG = 0;
var pesoSEP = 0;
var pesoOCT = 0;
var pesoNOV = 0;
var pesoDEC = 0;



var dataAtual = new Date()
dataAtual = Date()
var users
var pesoAtual

var URL = 'http://localhost:3000/usuarios';
fetch(URL)
    .then(res => res.json())
    .then(usuarios => {
        let storgaLocal = localStorage.getItem(users)
        let storageJSON = JSON.parse(storgaLocal);
        let userAtual = storageJSON[0].email

        for(let i = 0; i<usuarios ; i++){
            if(userAtual == usuarios){}
            //continuar logica
        }

})


var data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [{
        label: 'Treinos concluidos',
        data: [treinosJAN, treinosFEB, treinosMAR, treinosAPR, treinosMAY, treinosJUN, treinosJUL, treinosAUG, treinosSEP, treinosOCT, treinosNOV, treinosDEC],
        borderColor: 'red',
        borderWidth: 4,
        fill: false
    },
    {
        label: 'Peso (KG)',
        data: [pesoJAN, pesoFEB, pesoMAR, pesoAPR, pesoMAY, pesoJUN, pesoJUL, pesoAUG, pesoSEP, pesoOCT, pesoNOV, pesoDEC],
        borderColor: 'blue',
        borderWidth: 4,
        fill: false
    }]
};

// Configurações do gráfico
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


// Criar o gráfico de linhas
var ctx = document.getElementById('myLineChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});