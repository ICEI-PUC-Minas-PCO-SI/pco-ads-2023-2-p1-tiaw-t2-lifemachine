//Exibe o peso atual do usuario na box do meio
const pesoAtualArea = document.getElementById("peso-atual")
var peso = JSON.parse(localStorage.getItem("pesoAtual"))

pesoAtualArea.innerHTML = `${peso}Kg`

//=============================================================================================================

//ao clicar no botao adicionar um treino a mais, no mes atual, porem so pode clicar uma vez ao dia
//atualizar o grafico
//guardar dados no JSON server

var dataAtual = new Date();
var mes = dataAtual.getMonth();
var dia = dataAtual.getDate();
var jsonMes = `QtdTreinoMes` + mes



const URL = 'http://localhost:3000/usuarios';
var auxID = JSON.parse(localStorage.getItem('atualID'))

fetch(`${URL}/${auxID}`)
  .then(res => res.json())
  .then(user => {
    treinoConcluidos = user[jsonMes] || 0;

    // Adicionar treinos concluídos
    var botao_treino = document.getElementById('concluir-treino');
    botao_treino.addEventListener('click', function (event) {
      const auxClique = dia;
      const ultimoClique = localStorage.getItem('ultimoClique');

      if (ultimoClique != auxClique) {
        treinoConcluidos++;
        localStorage.setItem('ultimoClique', auxClique);

        // Atualiza o JSON Server
        fetch(`${URL}/${auxID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ [jsonMes]: treinoConcluidos }), // Atualiza apenas o mês atual
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Falha ao atualizar os treinos.");
            }
        })
        .catch(error => {
            console.error("Erro durante a operação:", error);
        })
        .finally(() => {
            // Após atualizar, atualiza o gráfico
            atualizarGrafico();
        });
    } else {
        event.preventDefault()
    }
});
})

// Função para atualizar o gráfico
function atualizarGrafico() {
    fetch(`${URL}/${auxID}`)
        .then(res => res.json())
        .then(users => {
            const diasTreino = [];

            for (let i = 0; i < 12; i++) {
                const aux = `QtdTreinoMes${i}`;

                diasTreino[i] = users[aux] || 0;
            }

            var dadosDoGrafico = {
                labels: ['Novembro', 'Dezembro', 'Janeiro', 'Fevereiro'],
                datasets: [{
                    label: 'Treinos concluídos',
                    data: [
                        diasTreino[10],
                        diasTreino[11],
                        diasTreino[0],
                        diasTreino[1]
                    ],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            };

            var ctx = document.getElementById('myBarChart').getContext('2d');
            var myBarChart = new Chart(ctx, {
                type: 'bar',
                data: dadosDoGrafico,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            suggestedMin: 0, // Força o valor mínimo a ser zero
                            stepSize: 1 
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error("Erro durante a operação:", error);
        });
}

atualizarGrafico();

