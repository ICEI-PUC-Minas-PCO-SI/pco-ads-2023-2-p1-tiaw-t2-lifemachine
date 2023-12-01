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

const pesosUsuario = [[

    {
        "id": "0",
        "peso": 0
    },
    {
        "id": "1",
        "peso": 0
    },
    {
        "id": "2",
        "peso": 0
    },
    {
        "id": "3",
        "peso": 0
    },
    {
        "id": "4",
        "peso": 0
    },
    {
        "id": "5",
        "peso": 0
    },
    {
        "id": "6",
        "peso": 0
    },
    {
        "id": "7",
        "peso": 0
    },
    {
        "id": "8",
        "peso": 0
    },
    {
        "id": "9",
        "peso": 0
    },
    {
        "id": "10",
        "peso": 0
    },
    {
        "id": "11",
        "peso": 0
    },

]]

var dataAtual = new Date();
var mes = dataAtual.getMonth();
var auxPeso = localStorage.getItem('pesoAtual')
var pesoInfo = JSON.parse(auxPeso)

for (let i = 0; i < pesosUsuario[0].length; i++) {
    if (pesosUsuario[0][i].id == mes) {
        pesosUsuario[0][i].peso = pesoInfo
    }                           //Criar uma objeto de peso dentro de cada usuario do JSON Server usando "Fetch"
                                //Sempre que pegar o peso atual no login ou apos atualização mudar dento do JSON
                               //Lembrando que precisa alterar dependendo do mes atual               
}



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
        data: [
            pesosUsuario[0][0].peso,
            pesosUsuario[0][1].peso,
            pesosUsuario[0][2].peso,
            pesosUsuario[0][3].peso,
            pesosUsuario[0][4].peso,
            pesosUsuario[0][5].peso,
            pesosUsuario[0][6].peso,
            pesosUsuario[0][7].peso,
            pesosUsuario[0][8].peso,
            pesosUsuario[0][9].peso,
            pesosUsuario[0][10].peso,
            pesosUsuario[0][11].peso
        ],
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