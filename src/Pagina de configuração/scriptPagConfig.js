
function teste2(){
const idUsuario = "1";
const novoPeso = "234";

// Dados a serem enviados na requisição PUT
const dadosAtualizados = {
  teste: "teste"
};

// Configuração da requisição
const opcoes = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(dadosAtualizados)
};

// URL do servidor JSON (substitua pelo seu endpoint correto)
const url = `http://localhost:3000/usuarios/${idUsuario}`;

// Envia a requisição
fetch(url, opcoes)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao tentar atualizar o peso do usuário');
    }
    return response.json();
  })
  .then(data => {
    console.log('Peso do usuário atualizado com sucesso:', data);
  })
  .catch(error => {
    console.error('Erro:', error.message);
  });
}