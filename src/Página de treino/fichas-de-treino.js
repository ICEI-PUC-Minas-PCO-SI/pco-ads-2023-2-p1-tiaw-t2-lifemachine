const URL1 = 'http://localhost:3000/treinos';
const URL2 = 'http://localhost:3000/usuarios';
var auxID = JSON.parse(localStorage.getItem('atualID'))

//pegar usuario, verificar qtd de treino por dia e objetivo
//pegar ficha de acordo com objetivo e dias
//aplicar dentro do HTML 

fetch(`${URL2}/${auxID}`)
    .then(res => res.json())
    .then(user => {
        const objetivoUser = user.objetivo;
        const diasDisp = user.diasDeTreino

        if(objetivoUser == 'perder-peso'){
            fetch(`${URL1}`)
            .then(res => res.json())
            .then(fichas => {
                var objetivo = fichas.objetivos.emagrecer


            })
        }
        
    });
const fichas3X = document.getElementById('carrossel-fichas')

fichas3X.innerHTML = `

<div class="carousel-item active">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA A</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA B</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA C</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
</div>
</p>
</div>

`

const fichas5X = document.getElementById('carrossel-fichas')

fichas5X.innerHTML = `
<div class="carousel-item active">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA A</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA B</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA C</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA D</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
</div>
</p>
</div>
<div class="carousel-item">
<p>
<div class="ficha">
    <b style="font-size: 30px;">FICHA E</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
    <b>00x${x}</b><br>
</div>
</p>
</div>
`

