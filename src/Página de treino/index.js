let treinoAtual = 1;

function carregarTreinos() {
    fetch('treinos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            return response.json();
        })
        .then(data => {
            const fichaDiv = document.getElementById('ficha');
            fichaDiv.innerHTML = '';

            const treinoKey = `dia${treinoAtual}`;
            const treino = data.objetivos.emagrecer.treino5xSemana[treinoKey];

            if (treino) {
                const nomeTreino = document.createElement('b');
                nomeTreino.style.fontSize = '25px';
                nomeTreino.textContent = treino.nome;
                fichaDiv.appendChild(nomeTreino);
                fichaDiv.appendChild(document.createElement('br'));

                treino.exercicios.forEach(exercicio => {
                    const nomeExercicio = document.createElement('b');
                    nomeExercicio.textContent = `${exercicio.nome}: `;

                    const lineBreakAfterExercise = document.createElement('br');

                    const infoExercicio = document.createElement('span');
                    if (exercicio.tempo) {
                        infoExercicio.innerHTML = `<b class="info-key">Tempo:</b> ${exercicio.tempo}<br>`;
                    } else {
                        infoExercicio.innerHTML = `<b class="info-key">Séries:</b> ${exercicio.series}<br>
                                                <b class="info-key">Repetições:</b> ${exercicio.repetições}<br>
                                                <b class="info-key">Tempo de Descanso:</b> ${exercicio.tempoDescanso}`;
                    }

                    const lineBreak = document.createElement('br');
                    const separatorLine = document.createElement('hr');

                    fichaDiv.appendChild(nomeExercicio);
                    fichaDiv.appendChild(lineBreakAfterExercise);
                    fichaDiv.appendChild(infoExercicio);
                    fichaDiv.appendChild(separatorLine);
                    fichaDiv.appendChild(lineBreak);
                });

                const button = document.querySelectorAll('.botoes')[1]; // Obtendo o segundo botão
                if (treinoAtual === 1) {
                    button.textContent = 'Ficha B';
                } else if (treinoAtual === 2) {
                    button.textContent = 'Ficha C';
                } else if (treinoAtual === 3) {
                    button.textContent = 'Ficha D';
                } else if (treinoAtual === 4) {
                    button.textContent = 'Ficha E';
                } else if (treinoAtual === 5) {
                    button.textContent = 'Ficha F';
                } else if (treinoAtual === 6) {
                    treinoAtual = 1;
                    button.textContent = 'Ficha A';
                }

                treinoAtual++;
            } else {
                alert('Todos os treinos foram concluídos!');
            }
        })
        .catch(error => {
            console.error('Erro ao carregar os treinos:', error);
        });

   

}

let treinoAtualGanhoMassa = 1;

function carregarTreinoGanhoMassa() {
    fetch('treinosMassa.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            return response.json();
        })
        .then(data => {
            const fichaDiv = document.getElementById('ficha');
            fichaDiv.innerHTML = '';

            const treinoKey = `dia${treinoAtualGanhoMassa}`;
            const treino = data.objetivos.ganharPeso.treino5xSemana[treinoKey];

            if (treino) {
                const nomeTreino = document.createElement('b');
                nomeTreino.style.fontSize = '25px';
                nomeTreino.textContent = treino.nome;
                fichaDiv.appendChild(nomeTreino);
                fichaDiv.appendChild(document.createElement('br'));

                treino.exercicios.forEach(exercicio => {
                    const nomeExercicio = document.createElement('b');
                    nomeExercicio.textContent = `${exercicio.nome}: `;

                    const lineBreakAfterExercise = document.createElement('br');

                    const infoExercicio = document.createElement('span');
                    if (exercicio.tempo) {
                        infoExercicio.innerHTML = `<b class="info-key">Tempo:</b> ${exercicio.tempo}<br>`;
                    } else {
                        infoExercicio.innerHTML = `<b class="info-key">Séries:</b> ${exercicio.series}<br>
                                                <b class="info-key">Repetições:</b> ${exercicio.repetições}<br>
                                                <b class="info-key">Tempo de Descanso:</b> ${exercicio.tempoDescanso}`;
                    }

                    const lineBreak = document.createElement('br');
                    const separatorLine = document.createElement('hr');

                    fichaDiv.appendChild(nomeExercicio);
                    fichaDiv.appendChild(lineBreakAfterExercise);
                    fichaDiv.appendChild(infoExercicio);
                    fichaDiv.appendChild(separatorLine);
                    fichaDiv.appendChild(lineBreak);
                });

                const button = document.querySelector('.botoes');
                if (treinoAtualGanhoMassa === 1) {
                    button.textContent = 'Ficha B';
                } else if (treinoAtualGanhoMassa === 2) {
                    button.textContent = 'Ficha C';
                } else if (treinoAtualGanhoMassa === 3) {
                    button.textContent = 'Ficha D';
                } else if (treinoAtualGanhoMassa === 4) {
                    button.textContent = 'Ficha E';
                } else if (treinoAtualGanhoMassa === 5) {
                    button.textContent = 'Ficha F';
                }

                treinoAtualGanhoMassa++;
                if (treinoAtualGanhoMassa > 6) {
                    treinoAtualGanhoMassa = 1;
                    button.textContent = 'Ficha A';
                }
            } else {
                alert('Todos os treinos foram concluídos!');
            }
        })
        .catch(error => {
            console.error('Erro ao carregar os treinos de ganho de massa:', error);
        });

    
    
}
