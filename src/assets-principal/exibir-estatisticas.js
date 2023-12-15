const URL = 'https://db-json-life-machine.onrender.com/usuarios';

var auxID = JSON.parse(sessionStorage.getItem('atualID'))

fetch(`${URL}/${auxID}`)
  .then(res => res.json())
  .then(user => {
    var pesoRefresh = user.peso;
    sessionStorage.setItem('pesoAtual', pesoRefresh)
  });

var dataAtual = new Date();
var mes = dataAtual.getMonth();
var jsonMes = `PesoMes` + mes
var auxPeso = JSON.parse(sessionStorage.getItem('pesoAtual'))


fetch(`${URL}/${auxID}`)
  .then(response => {
    if (response.ok) {
      // Se o usuário existir, realizar o PATCH apenas se a estrutura do mês não existir
      return fetch(`${URL}/${auxID}`)
        .then(res => res.json())
        .then(usuario => {
          if (usuario[jsonMes]) {
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
    const diasTreino = []

    for (let i = 0; i < 12; i++) {
      const aux = `PesoMes${i}`

      if (users[aux] > 0) {
        pesos[i] = users[aux];
      }
      else {
        pesos[i] = 0
      }
    }

    for (let i = 0; i < 12; i++) {
      const aux1 = `QtdTreinoMes${i}`;

      diasTreino[i] = users[aux1] || 0;
    }

    var data = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [{
        label: 'Treinos concluidos',
        data: [
          diasTreino[0],
          diasTreino[1],
          diasTreino[2],
          diasTreino[3],
          diasTreino[4],
          diasTreino[5],
          diasTreino[6],
          diasTreino[7],
          diasTreino[8],
          diasTreino[9],
          diasTreino[10],
          diasTreino[11]
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