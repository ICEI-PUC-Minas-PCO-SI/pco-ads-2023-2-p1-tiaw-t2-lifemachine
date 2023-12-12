
function teste2(){
const idUsuario = "2";
const novoPeso = "234";


// Dados a serem enviados na requisição PUT
const dadosAtualizados = {
  testertd: "teste"
};

// Configuração da requisição
const opcoes = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(dadosAtualizados)
};

const opcoes2 = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(dadosAtualizados)
};

const opcoes3 = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

// URL do servidor JSON (substitua pelo seu endpoint correto)
const url1 = `http://localhost:3000/usuarios/${idUsuario}`;
const url2 = `http://localhost:3000/daniel/`;
const url3 = `http://localhost:3000/daniel/id`;


// Envia a requisição
fetch(url1, opcoes3)
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
  alert(ok)
}

function teste3(){
const idUsuario = "2";
const novoPeso = "234";

const opcoes3 = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

// URL do servidor JSON (substitua pelo seu endpoint correto)
const url1 = `http://localhost:3000/usuarios/${idUsuario}`;
const url2 = `http://localhost:3000/daniel/`;
const url3 = `http://localhost:3000/daniel/`;

fetch(url3, opcoes3)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao tentar obter o peso do usuário');
    }
    return response.json();
  })
  .then(data => {
    // Aqui, você pode armazenar o valor obtido em uma variável
    var pesoDoUsuario = data[0].id; // Certifique-se de adaptar conforme a estrutura da resposta
    console.log('Peso do usuário obtido com sucesso:', pesoDoUsuario);

    // Agora você pode usar a variável "pesoDoUsuario" conforme necessário
    // Por exemplo, você pode exibir um alerta com o valor:
    alert(`Peso do usuário: ${pesoDoUsuario}`);
  })
  .catch(error => {
    console.error('Erro:', error.message);
  });


}
