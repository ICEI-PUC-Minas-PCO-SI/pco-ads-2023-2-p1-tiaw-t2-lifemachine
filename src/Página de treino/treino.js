document.addEventListener('DOMContentLoaded', function () {
    // Dados do exemplo (substitua pelos seus próprios dados)
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