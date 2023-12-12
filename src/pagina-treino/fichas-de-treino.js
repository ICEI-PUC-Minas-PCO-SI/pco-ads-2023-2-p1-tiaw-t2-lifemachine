const URL1 = 'http://localhost:3000/treinos';
const URL2 = 'http://localhost:3000/usuarios';
var auxID = JSON.parse(localStorage.getItem('atualID'))
const fichas3X = document.getElementById('carrossel-fichas')
const fichas5X = document.getElementById('carrossel-fichas')
var btnFicha = document.getElementById('btn-nova-ficha')

btnFicha.addEventListener('click', alterarFicha)
function alterarFicha() {

    let a = JSON.parse(localStorage.getItem('ficha'))
    if (a == 0) {
        localStorage.setItem('ficha', 1)
    }
    else if (a == 1) {
        localStorage.setItem('ficha', 0)
    }
    location.reload()
}


fetch(`${URL2}/${auxID}`)
    .then(res => res.json())
    .then(user => {
        const objetivoUser = user.objetivo;
        const diasDisp = user.diasDeTreino

        if (objetivoUser == 'perder-peso') {
            fetch(`${URL1}`)
                .then(res => res.json())
                .then(fichas => {
                    var objetivo = fichas[0].objetivos[0].emagrecer[JSON.parse(localStorage.getItem('ficha'))]
                    if (diasDisp == '3-dias') {
                        let aux = objetivo.treino3xSemana
                        fichas3X.innerHTML = `
<div class="carousel-item active">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA A</b><br>
    <b>${aux.dia1.exercicios[0].series}x${aux.dia1.exercicios[0].repetições} - ${aux.dia1.exercicios[0].nome}</b><br>
    <b>${aux.dia1.exercicios[1].series}x${aux.dia1.exercicios[1].repetições} - ${aux.dia1.exercicios[1].nome}</b><br>
    <b>${aux.dia1.exercicios[2].series}x${aux.dia1.exercicios[2].repetições} - ${aux.dia1.exercicios[2].nome}</b><br>
    <b>${aux.dia1.exercicios[3].series}x${aux.dia1.exercicios[3].repetições} - ${aux.dia1.exercicios[3].nome}</b><br>
    <b>${aux.dia1.exercicios[4].series}x${aux.dia1.exercicios[4].repetições} - ${aux.dia1.exercicios[4].nome}</b><br>
    <b>${aux.dia1.exercicios[5].series}x${aux.dia1.exercicios[5].repetições} - ${aux.dia1.exercicios[5].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA B</b><br>
    <b>${aux.dia2.exercicios[0].series}x${aux.dia2.exercicios[0].repetições} - ${aux.dia2.exercicios[0].nome}</b><br>
    <b>${aux.dia2.exercicios[1].series}x${aux.dia2.exercicios[1].repetições} - ${aux.dia2.exercicios[1].nome}</b><br>
    <b>${aux.dia2.exercicios[2].series}x${aux.dia2.exercicios[2].repetições} - ${aux.dia2.exercicios[2].nome}</b><br>
    <b>${aux.dia2.exercicios[3].series}x${aux.dia2.exercicios[3].repetições} - ${aux.dia2.exercicios[3].nome}</b><br>
    <b>${aux.dia2.exercicios[4].series}x${aux.dia2.exercicios[4].repetições} - ${aux.dia2.exercicios[4].nome}</b><br>
    <b>${aux.dia2.exercicios[5].series}x${aux.dia2.exercicios[5].repetições} - ${aux.dia2.exercicios[5].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA C</b><br>
    <b>${aux.dia3.exercicios[0].series}x ${aux.dia3.exercicios[0].repetições} - ${aux.dia3.exercicios[0].nome}</b><br>
    <b>${aux.dia3.exercicios[1].series}x ${aux.dia3.exercicios[1].repetições} - ${aux.dia3.exercicios[1].nome}</b><br>
    <b>${aux.dia3.exercicios[2].series}x ${aux.dia3.exercicios[2].repetições} - ${aux.dia3.exercicios[2].nome}</b><br>
    <b>${aux.dia3.exercicios[3].series}x ${aux.dia3.exercicios[3].repetições} - ${aux.dia3.exercicios[3].nome}</b><br>
    <b>${aux.dia3.exercicios[4].series}x ${aux.dia3.exercicios[4].repetições} - ${aux.dia3.exercicios[4].nome}</b><br>
    <b>${aux.dia3.exercicios[5].series}x ${aux.dia3.exercicios[5].repetições} - ${aux.dia3.exercicios[5].nome}</b><br>
</div>
</p>
</div>
`
                    }
                    else if (diasDisp == '5-dias') {
                        let aux = objetivo.treino5xSemana
                        fichas5X.innerHTML = `
<div class="carousel-item active">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA A</b><br>
    <b>${aux.dia1.exercicios[0].series}x${aux.dia1.exercicios[0].repetições} - ${aux.dia1.exercicios[0].nome}</b><br>
    <b>${aux.dia1.exercicios[1].series}x${aux.dia1.exercicios[1].repetições} - ${aux.dia1.exercicios[1].nome}</b><br>
    <b>${aux.dia1.exercicios[2].series}x${aux.dia1.exercicios[2].repetições} - ${aux.dia1.exercicios[2].nome}</b><br>
    <b>${aux.dia1.exercicios[3].series}x${aux.dia1.exercicios[3].repetições} - ${aux.dia1.exercicios[3].nome}</b><br>
    <b>${aux.dia1.exercicios[4].series}x${aux.dia1.exercicios[4].repetições} - ${aux.dia1.exercicios[4].nome}</b><br>
    <b>${aux.dia1.exercicios[5].series}x${aux.dia1.exercicios[5].repetições} - ${aux.dia1.exercicios[5].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA B</b><br>
    <b>${aux.dia2.exercicios[0].series}x${aux.dia2.exercicios[0].repetições} - ${aux.dia2.exercicios[0].nome}</b><br>
    <b>${aux.dia2.exercicios[1].series}x${aux.dia2.exercicios[1].repetições} - ${aux.dia2.exercicios[1].nome}</b><br>
    <b>${aux.dia2.exercicios[2].series}x${aux.dia2.exercicios[2].repetições} - ${aux.dia2.exercicios[2].nome}</b><br>
    <b>${aux.dia2.exercicios[3].series}x${aux.dia2.exercicios[3].repetições} - ${aux.dia2.exercicios[3].nome}</b><br>
    <b>${aux.dia2.exercicios[4].series}x${aux.dia2.exercicios[4].repetições} - ${aux.dia2.exercicios[4].nome}</b><br>
    <b>${aux.dia2.exercicios[5].series}x${aux.dia2.exercicios[5].repetições} - ${aux.dia2.exercicios[5].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA C</b><br>
    <b>${aux.dia3.exercicios[0].series}x${aux.dia3.exercicios[0].repetições} - ${aux.dia3.exercicios[0].nome}</b><br>
    <b>${aux.dia3.exercicios[1].series}x${aux.dia3.exercicios[1].repetições} - ${aux.dia3.exercicios[1].nome}</b><br>
    <b>${aux.dia3.exercicios[2].series}x${aux.dia3.exercicios[2].repetições} - ${aux.dia3.exercicios[2].nome}</b><br>
    <b>${aux.dia3.exercicios[3].series}x${aux.dia3.exercicios[3].repetições} - ${aux.dia3.exercicios[3].nome}</b><br>
    <b>${aux.dia3.exercicios[4].series}x${aux.dia3.exercicios[4].repetições} - ${aux.dia3.exercicios[4].nome}</b><br>
    <b>${aux.dia3.exercicios[5].series}x${aux.dia3.exercicios[5].repetições} - ${aux.dia3.exercicios[5].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA D</b><br>
    <b>${aux.dia4.exercicios[0].series}x${aux.dia4.exercicios[0].repetições} - ${aux.dia4.exercicios[0].nome}</b><br>
    <b>${aux.dia4.exercicios[1].series}x${aux.dia4.exercicios[1].repetições} - ${aux.dia4.exercicios[1].nome}</b><br>
    <b>${aux.dia4.exercicios[2].series}x${aux.dia4.exercicios[2].repetições} - ${aux.dia4.exercicios[2].nome}</b><br>
    <b>${aux.dia4.exercicios[3].series}x${aux.dia4.exercicios[3].repetições} - ${aux.dia4.exercicios[3].nome}</b><br>
    <b>${aux.dia4.exercicios[4].series}x${aux.dia4.exercicios[4].repetições} - ${aux.dia4.exercicios[4].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA E</b><br>
    <b>${aux.dia5.exercicios[0].series}x${aux.dia5.exercicios[0].repetições} - ${aux.dia5.exercicios[0].nome}</b><br>
    <b>${aux.dia5.exercicios[1].series}x${aux.dia5.exercicios[1].repetições} - ${aux.dia5.exercicios[1].nome}</b><br>
    <b>${aux.dia5.exercicios[2].series}x${aux.dia5.exercicios[2].repetições} - ${aux.dia5.exercicios[2].nome}</b><br>
    <b>${aux.dia5.exercicios[3].series}x${aux.dia5.exercicios[3].repetições} - ${aux.dia5.exercicios[3].nome}</b><br>
    <b>${aux.dia5.exercicios[4].series}x${aux.dia5.exercicios[4].repetições} - ${aux.dia5.exercicios[4].nome}</b><br>
    <b>${aux.dia5.exercicios[5].series}x${aux.dia5.exercicios[5].repetições} - ${aux.dia5.exercicios[5].nome}</b><br>
</div>
</p>
</div>
`
                    }

                })
        }
        else if (objetivoUser == 'ganhar-peso') {
            fetch(`${URL1}`)
                .then(res => res.json())
                .then(fichas => {
                    var objetivo = fichas[0].objetivos[0].ganharPeso[JSON.parse(localStorage.getItem('ficha'))]
                    if (diasDisp == '3-dias') {
                        let aux = objetivo.treino3xSemana
                        fichas3X.innerHTML = `
<div class="carousel-item active">
<p>
<div class="ficha">
<b style="font-size: 30px;">FICHA A</b><br>
<b>${aux.dia1.exercicios[0].series}x${aux.dia1.exercicios[0].repetições} - ${aux.dia1.exercicios[0].nome}</b><br>
<b>${aux.dia1.exercicios[1].series}x${aux.dia1.exercicios[1].repetições} - ${aux.dia1.exercicios[1].nome}</b><br>
<b>${aux.dia1.exercicios[2].series}x${aux.dia1.exercicios[2].repetições} - ${aux.dia1.exercicios[2].nome}</b><br>
<b>${aux.dia1.exercicios[3].series}x${aux.dia1.exercicios[3].repetições} - ${aux.dia1.exercicios[3].nome}</b><br>
<b>${aux.dia1.exercicios[4].series}x${aux.dia1.exercicios[4].repetições} - ${aux.dia1.exercicios[4].nome}</b><br>
<b>${aux.dia1.exercicios[5].series}x${aux.dia1.exercicios[5].repetições} - ${aux.dia1.exercicios[5].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
<b style="font-size: 30px;">FICHA B</b><br>
<b>${aux.dia2.exercicios[0].series}x${aux.dia2.exercicios[0].repetições} - ${aux.dia2.exercicios[0].nome}</b><br>
<b>${aux.dia2.exercicios[1].series}x${aux.dia2.exercicios[1].repetições} - ${aux.dia2.exercicios[1].nome}</b><br>
<b>${aux.dia2.exercicios[2].series}x${aux.dia2.exercicios[2].repetições} - ${aux.dia2.exercicios[2].nome}</b><br>
<b>${aux.dia2.exercicios[3].series}x${aux.dia2.exercicios[3].repetições} - ${aux.dia2.exercicios[3].nome}</b><br>
<b>${aux.dia2.exercicios[4].series}x${aux.dia2.exercicios[4].repetições} - ${aux.dia2.exercicios[4].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
<b style="font-size: 30px;">FICHA C</b><br>
<b>${aux.dia3.exercicios[0].series}x ${aux.dia3.exercicios[0].repetições} - ${aux.dia3.exercicios[0].nome}</b><br>
<b>${aux.dia3.exercicios[1].series}x ${aux.dia3.exercicios[1].repetições} - ${aux.dia3.exercicios[1].nome}</b><br>
<b>${aux.dia3.exercicios[2].series}x ${aux.dia3.exercicios[2].repetições} - ${aux.dia3.exercicios[2].nome}</b><br>
<b>${aux.dia3.exercicios[3].series}x ${aux.dia3.exercicios[3].repetições} - ${aux.dia3.exercicios[3].nome}</b><br>
<b>${aux.dia3.exercicios[4].series}x ${aux.dia3.exercicios[4].repetições} - ${aux.dia3.exercicios[4].nome}</b><br>
<b>${aux.dia3.exercicios[5].series}x ${aux.dia3.exercicios[5].repetições} - ${aux.dia3.exercicios[5].nome}</b><br>
</div>
</p>
</div>

`
                    }
                    else if (diasDisp == '5-dias') {
                        let aux = objetivo.treino5xSemana
                        fichas5X.innerHTML = `
<div class="carousel-item active">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA A</b><br>
    <b>${aux.dia1.exercicios[0].series}x${aux.dia1.exercicios[0].repetições} - ${aux.dia1.exercicios[0].nome}</b><br>
    <b>${aux.dia1.exercicios[1].series}x${aux.dia1.exercicios[1].repetições} - ${aux.dia1.exercicios[1].nome}</b><br>
    <b>${aux.dia1.exercicios[2].series}x${aux.dia1.exercicios[2].repetições} - ${aux.dia1.exercicios[2].nome}</b><br>
    <b>${aux.dia1.exercicios[3].series}x${aux.dia1.exercicios[3].repetições} - ${aux.dia1.exercicios[3].nome}</b><br>
    <b>${aux.dia1.exercicios[4].series}x${aux.dia1.exercicios[4].repetições} - ${aux.dia1.exercicios[4].nome}</b><br>
    <b>${aux.dia1.exercicios[5].series}x${aux.dia1.exercicios[5].repetições} - ${aux.dia1.exercicios[5].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA B</b><br>
    <b>${aux.dia2.exercicios[0].series}x${aux.dia2.exercicios[0].repetições} - ${aux.dia2.exercicios[0].nome}</b><br>
    <b>${aux.dia2.exercicios[1].series}x${aux.dia2.exercicios[1].repetições} - ${aux.dia2.exercicios[1].nome}</b><br>
    <b>${aux.dia2.exercicios[2].series}x${aux.dia2.exercicios[2].repetições} - ${aux.dia2.exercicios[2].nome}</b><br>
    <b>${aux.dia2.exercicios[3].series}x${aux.dia2.exercicios[3].repetições} - ${aux.dia2.exercicios[3].nome}</b><br>
    <b>${aux.dia2.exercicios[4].series}x${aux.dia2.exercicios[4].repetições} - ${aux.dia2.exercicios[4].nome}</b><br>
    <b>${aux.dia2.exercicios[5].series}x${aux.dia2.exercicios[5].repetições} - ${aux.dia2.exercicios[5].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA C</b><br>
    <b>${aux.dia3.exercicios[0].series}x${aux.dia3.exercicios[0].repetições} - ${aux.dia3.exercicios[0].nome}</b><br>
    <b>${aux.dia3.exercicios[1].series}x${aux.dia3.exercicios[1].repetições} - ${aux.dia3.exercicios[1].nome}</b><br>
    <b>${aux.dia3.exercicios[2].series}x${aux.dia3.exercicios[2].repetições} - ${aux.dia3.exercicios[2].nome}</b><br>
    <b>${aux.dia3.exercicios[3].series}x${aux.dia3.exercicios[3].repetições} - ${aux.dia3.exercicios[3].nome}</b><br>
    <b>${aux.dia3.exercicios[4].series}x${aux.dia3.exercicios[4].repetições} - ${aux.dia3.exercicios[4].nome}</b><br>
    <b>${aux.dia3.exercicios[5].series}x${aux.dia3.exercicios[5].repetições} - ${aux.dia3.exercicios[5].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA D</b><br>
    <b>${aux.dia4.exercicios[0].series}x${aux.dia4.exercicios[0].repetições} - ${aux.dia4.exercicios[0].nome}</b><br>
    <b>${aux.dia4.exercicios[1].series}x${aux.dia4.exercicios[1].repetições} - ${aux.dia4.exercicios[1].nome}</b><br>
    <b>${aux.dia4.exercicios[2].series}x${aux.dia4.exercicios[2].repetições} - ${aux.dia4.exercicios[2].nome}</b><br>
    <b>${aux.dia4.exercicios[3].series}x${aux.dia4.exercicios[3].repetições} - ${aux.dia4.exercicios[3].nome}</b><br>
    <b>${aux.dia4.exercicios[4].series}x${aux.dia4.exercicios[4].repetições} - ${aux.dia4.exercicios[4].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA E</b><br>
    <b>${aux.dia5.exercicios[0].series}x${aux.dia5.exercicios[0].repetições} - ${aux.dia5.exercicios[0].nome}</b><br>
    <b>${aux.dia5.exercicios[1].series}x${aux.dia5.exercicios[1].repetições} - ${aux.dia5.exercicios[1].nome}</b><br>
    <b>${aux.dia5.exercicios[2].series}x${aux.dia5.exercicios[2].repetições} - ${aux.dia5.exercicios[2].nome}</b><br>
    <b>${aux.dia5.exercicios[3].series}x${aux.dia5.exercicios[3].repetições} - ${aux.dia5.exercicios[3].nome}</b><br>
    <b>${aux.dia5.exercicios[4].series}x${aux.dia5.exercicios[4].repetições} - ${aux.dia5.exercicios[4].nome}</b><br>
    <b>${aux.dia5.exercicios[5].series}x${aux.dia5.exercicios[5].repetições} - ${aux.dia5.exercicios[5].nome}</b><br>
</div>
</p>
</div>
`
                    }
                })
        }
        else if (objetivoUser == 'manter-peso') {
            fetch(`${URL1}`)
                .then(res => res.json())
                .then(fichas => {
                    var objetivo = fichas[0].objetivos[0].manterPeso[JSON.parse(localStorage.getItem('ficha'))]
                    if (diasDisp == '3-dias') {
                        let aux = objetivo.treino3xSemana
                        fichas3X.innerHTML = `
<div class="carousel-item active">
<p>
<div class="ficha">
<b style="font-size: 30px;">FICHA A</b><br>
<b>${aux.dia1.exercicios[0].series}x${aux.dia1.exercicios[0].repetições} - ${aux.dia1.exercicios[0].nome}</b><br>
<b>${aux.dia1.exercicios[1].series}x${aux.dia1.exercicios[1].repetições} - ${aux.dia1.exercicios[1].nome}</b><br>
<b>${aux.dia1.exercicios[2].series}x${aux.dia1.exercicios[2].repetições} - ${aux.dia1.exercicios[2].nome}</b><br>
<b>${aux.dia1.exercicios[3].series}x${aux.dia1.exercicios[3].repetições} - ${aux.dia1.exercicios[3].nome}</b><br>
<b>${aux.dia1.exercicios[4].series}x${aux.dia1.exercicios[4].repetições} - ${aux.dia1.exercicios[4].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
<b style="font-size: 30px;">FICHA B</b><br>
<b>${aux.dia2.exercicios[0].series}x${aux.dia2.exercicios[0].repetições} - ${aux.dia2.exercicios[0].nome}</b><br>
<b>${aux.dia2.exercicios[1].series}x${aux.dia2.exercicios[1].repetições} - ${aux.dia2.exercicios[1].nome}</b><br>
<b>${aux.dia2.exercicios[2].series}x${aux.dia2.exercicios[2].repetições} - ${aux.dia2.exercicios[2].nome}</b><br>
<b>${aux.dia2.exercicios[3].series}x${aux.dia2.exercicios[3].repetições} - ${aux.dia2.exercicios[3].nome}</b><br>
<b>${aux.dia2.exercicios[4].series}x${aux.dia2.exercicios[4].repetições} - ${aux.dia2.exercicios[4].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
<b style="font-size: 30px;">FICHA C</b><br>
<b>${aux.dia3.exercicios[0].series}x ${aux.dia3.exercicios[0].repetições} - ${aux.dia3.exercicios[0].nome}</b><br>
<b>${aux.dia3.exercicios[1].series}x ${aux.dia3.exercicios[1].repetições} - ${aux.dia3.exercicios[1].nome}</b><br>
<b>${aux.dia3.exercicios[2].series}x ${aux.dia3.exercicios[2].repetições} - ${aux.dia3.exercicios[2].nome}</b><br>
<b>${aux.dia3.exercicios[3].series}x ${aux.dia3.exercicios[3].repetições} - ${aux.dia3.exercicios[3].nome}</b><br>
<b>${aux.dia3.exercicios[4].series}x ${aux.dia3.exercicios[4].repetições} - ${aux.dia3.exercicios[4].nome}</b><br>
</div>
</p>
</div>

`
                    }
                    else if (diasDisp == '5-dias') {
                        let aux = objetivo.treino5xSemana
                        fichas5X.innerHTML = `
<div class="carousel-item active">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA A</b><br>
    <b>${aux.dia1.exercicios[0].series}x${aux.dia1.exercicios[0].repeticoes} - ${aux.dia1.exercicios[0].nome}</b><br>
    <b>${aux.dia1.exercicios[1].series}x${aux.dia1.exercicios[1].repeticoes} - ${aux.dia1.exercicios[1].nome}</b><br>
    <b>${aux.dia1.exercicios[2].series}x${aux.dia1.exercicios[2].repeticoes} - ${aux.dia1.exercicios[2].nome}</b><br>
    <b>${aux.dia1.exercicios[3].series}x${aux.dia1.exercicios[3].repeticoes} - ${aux.dia1.exercicios[3].nome}</b><br>
    <b>${aux.dia1.exercicios[4].series}x${aux.dia1.exercicios[4].repeticoes} - ${aux.dia1.exercicios[4].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA B</b><br>
    <b>${aux.dia2.exercicios[0].series}x${aux.dia2.exercicios[0].repeticoes} - ${aux.dia2.exercicios[0].nome}</b><br>
    <b>${aux.dia2.exercicios[1].series}x${aux.dia2.exercicios[1].repeticoes} - ${aux.dia2.exercicios[1].nome}</b><br>
    <b>${aux.dia2.exercicios[2].series}x${aux.dia2.exercicios[2].repeticoes} - ${aux.dia2.exercicios[2].nome}</b><br>
    <b>${aux.dia2.exercicios[3].series}x${aux.dia2.exercicios[3].repeticoes} - ${aux.dia2.exercicios[3].nome}</b><br>
    <b>${aux.dia2.exercicios[4].series}x${aux.dia2.exercicios[4].repeticoes} - ${aux.dia2.exercicios[4].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA C</b><br>
    <b>${aux.dia3.exercicios[0].series}x${aux.dia3.exercicios[0].repeticoes} - ${aux.dia3.exercicios[0].nome}</b><br>
    <b>${aux.dia3.exercicios[1].series}x${aux.dia3.exercicios[1].repeticoes} - ${aux.dia3.exercicios[1].nome}</b><br>
    <b>${aux.dia3.exercicios[2].series}x${aux.dia3.exercicios[2].repeticoes} - ${aux.dia3.exercicios[2].nome}</b><br>
    <b>${aux.dia3.exercicios[3].series}x${aux.dia3.exercicios[3].repeticoes} - ${aux.dia3.exercicios[3].nome}</b><br>
    <b>${aux.dia3.exercicios[4].series}x${aux.dia3.exercicios[4].repeticoes} - ${aux.dia3.exercicios[4].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA D</b><br>
    <b>${aux.dia4.exercicios[0].series}x${aux.dia4.exercicios[0].repeticoes} - ${aux.dia4.exercicios[0].nome}</b><br>
    <b>${aux.dia4.exercicios[1].series}x${aux.dia4.exercicios[1].repeticoes} - ${aux.dia4.exercicios[1].nome}</b><br>
    <b>${aux.dia4.exercicios[2].series}x${aux.dia4.exercicios[2].repeticoes} - ${aux.dia4.exercicios[2].nome}</b><br>
    <b>${aux.dia4.exercicios[3].series}x${aux.dia4.exercicios[3].repeticoes} - ${aux.dia4.exercicios[3].nome}</b><br>
    <b>${aux.dia4.exercicios[4].series}x1min - ${aux.dia4.exercicios[4].nome}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA E</b><br>
    <b>${aux.dia5.exercicios[0].series}x${aux.dia5.exercicios[0].repeticoes} - ${aux.dia5.exercicios[0].nome}</b><br>
    <b>${aux.dia5.exercicios[1].series}x${aux.dia5.exercicios[1].repeticoes} - ${aux.dia5.exercicios[1].nome}</b><br>
    <b>${aux.dia5.exercicios[2].series}x${aux.dia5.exercicios[2].repeticoes} - ${aux.dia5.exercicios[2].nome}</b><br>
    <b>${aux.dia5.exercicios[3].series}x${aux.dia5.exercicios[3].repeticoes} - ${aux.dia5.exercicios[3].nome}</b><br>
    <b>${aux.dia5.exercicios[4].series}x${aux.dia5.exercicios[4].repeticoes} - ${aux.dia5.exercicios[4].nome}</b><br>
</div>
</p>
</div>
`
                    }

                })
        }

    });
