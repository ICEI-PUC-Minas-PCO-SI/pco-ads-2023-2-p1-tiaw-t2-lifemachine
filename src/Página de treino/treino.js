document.addEventListener('DOMContentLoaded', function () {
    const URL = 'http://localhost:3000/usuarios';
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
    var treinoConcluidos = 0;
    //Adicionar treinos concluidos
    
    var botao_treino = document.getElementById('concluir-treino')
    botao_treino.addEventListener('click',function(event){

        const auxClique = dia;
        const ultimoClique = localStorage.getItem('ultimoClique')

        if(ultimoClique == auxClique) {
            event.preventDefault()
        }
        else(
            treinoConcluidos++
        )

        localStorage.setItem('ultimoClique',auxClique)
    })


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
            
            var dadosDoGrafico = {
                labels: ['Novembro', 'Dezembro', 'Janeiro', 'Fevereiro'],
                datasets: [{
                    label: 'Treinos concluidos',
                    data: [6, 3, 2, 1],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(255, 99, 132, 0.5)',
                        'rgba(255, 99, 132, 0.5)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }]
            };
    
            // Configuração do gráfico
            var config = {
                type: 'bar',
                data: dadosDoGrafico,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            };
    
            // Criação do gráfico
            var ctx = document.getElementById('myBarChart').getContext('2d');
            var myBarChart = new Chart(ctx, config);
        });

 })

