var dbMensagens;
var areaMensagem;
var mensagemAleatoria;

// Cria um número aleatório
let min = 1;
let max = 10;
let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

// Puxa dados de uma biblioteca local JSON
fetch('mensagens-motivacionais.json')
  .then(response => response.json())
  .then(data => {
    dbMensagens = data;

    mensagemAleatoria = dbMensagens[numeroAleatorio-1].message;
    
    // Define a variável com a área que será colocada a mensagem
    areaMensagem = document.getElementById("frase-motivacional");
    
    areaMensagem.innerHTML = `${mensagemAleatoria}`;
  })
  .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

// Funcao para enviar feedback
function enviarFeedback() {
 
    var opiniaoUsuario = document.querySelector(".comentario-input").value;
    window.location.href = "mailto:feedback.lifemachine@gmail.com?subject=Feedback&body=" + encodeURIComponent(opiniaoUsuario);
}
