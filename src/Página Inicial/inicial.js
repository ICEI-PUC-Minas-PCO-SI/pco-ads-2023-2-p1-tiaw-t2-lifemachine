var dbMensagens
var mensagemArea
var mensagemAleatoria

// Cria um numero aleatorio
let min = 1;
let max = 10;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

// Puxa dados de uma biblioteca local JSON
fetch('mensagens-motivacionais.json')
  .then(response => response.json())
  .then(data => {
    dbMensagens = data;

    mensagemAleatoria = dbMensagens[numeroAleatorio-1].message;
    
    //Define a variavel com a area que sera colocada a mensagem
    mensagemArea = document.getElementById("frase-motivacional");
    
    mensagemArea.innerHTML = `${mensagemAleatoria}`;
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));


