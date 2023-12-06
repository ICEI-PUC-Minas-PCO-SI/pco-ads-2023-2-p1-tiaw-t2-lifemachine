

function verificarValor(valor) {
  const regex = /[!@#$%^&*(),.?":{}|<>]/;
  const numero = parseInt(valor);

  if (regex.test(valor)) {
    return true;
  }
  else if (numero > 200) {
    return true;
  }
  else if (isNaN(numero)) {
    return true;
  }
  return false
}


function campo(){
  let disposicao = document.getElementById("DiasDeTreino");
  let peso = document.getElementById("Peso");
  let objetivo = document.getElementById("Objetivo");
  let senha = document.getElementById("password");

  if (!disposicao.value && !peso.value && !objetivo.value && !senha.value){
    alert("Não é possível atualizar, preencha pelo um dos campos!");
  }
  if(verificarValor(peso.value)==false){
    if(!disposicao.value){
      methodPost(sessionStorage.getItem("objetivo"), peso.value, objetivo.value, senha.value)
    }
    if(!peso.value){
      methodPost(disposicao.value, sessionStorage.getItem("peso"), objetivo.value, senha.value)
    }
    if(!objetivo.value){
      methodPost(disposicao.value, peso.value, sessionStorage.getItem("objetivo"), senha.value)
    }
    if(!senha.value){
      methodPost(disposicao.value, peso.value, objetivo.value, sessionStorage.getItem("senha"))
    }
    methodPost(disposicao.value, peso.value, objetivo.value, senha.value)
  }
  else{
    alert("Valor de Peso inválido");
  }
}
function methodPost(valorSenha, valorPeso, valorObjetivo, valorDiasDeTreino){



let valorNome = sessionStorage.getItem("nome");
let valorAltura = sessionStorage.getItem("altura");
let valorSexo = sessionStorage.getItem("sexo");
let valorEmail = sessionStorage.getItem("email");

let dadosAtualizados = {
  Nome: valorNome,
  email: valorEmail,
  senha: valorSenha,
  altura: valorAltura,
  peso: valorPeso,
  objetivo: valorObjetivo,
  diasDeTreino: valorDiasDeTreino,
  sexo: valorSexo,
};

// Configuração da requisição
const opcoes = {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(dadosAtualizados)
};

const url1 = `http://localhost:3000/usuarios/1`;

// Envia a requisição
fetch(url1, opcoes)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao tentar atualizar');
    }
    return response.json();
  })
  .then(data => {
    console.log('Atualizado com sucesso:', data);
  })
  .catch(error => {
    console.error('Erro:', error.message);
  });
}


function GetNome() {
  const idUsuario = "1";
  const url1 = `http://localhost:3000/usuarios/${idUsuario}`;

  fetch(url1, opcoes3)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao tentar obter o peso do usuário');
      }
      return response.json();
    })
    .then(data => {
      let a = data.Nome;
      sessionStorage.setItem("nome", a);
    })
    .catch(error => {
      console.error('Erro:', error.message);
    });
}

function GetSexo(){
  const idUsuario = "1";
 
  const opcoes3 = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  // URL do servidor JSON (substitua pelo seu endpoint correto)
  const url1 = `http://localhost:3000/usuarios/${idUsuario}`;
  
  fetch(url1, opcoes3)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao tentar obter o peso do usuário');
      }
      return response.json();
    })
    .then(data => {
      let a = data.sexo;
      sessionStorage.setItem("sexo", a);
    })
    .catch(error => {
      console.error('Erro:', error.message);
    });
}

function GetAltura(){
    const idUsuario = "1";
   
    const opcoes3 = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    // URL do servidor JSON (substitua pelo seu endpoint correto)
    const url1 = `http://localhost:3000/usuarios/${idUsuario}`;
    
    fetch(url1, opcoes3)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao tentar obter o peso do usuário');
        }
        return response.json();
      })
      .then(data => {
         variavel = data.altura;
         sessionStorage.setItem("altura", variavel);
      })
      .catch(error => {
        console.error('Erro:', error.message);
      });
}

function GetEmail(){
  const idUsuario = "1";
 
  const opcoes3 = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  // URL do servidor JSON (substitua pelo seu endpoint correto)
  const url1 = `http://localhost:3000/usuarios/${idUsuario}`;
  
  fetch(url1, opcoes3)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao tentar obter o peso do usuário');
      }
      return response.json();
    })
    .then(data => {
      let variavel = data.email;
      sessionStorage.setItem("email", variavel);
    })
    .catch(error => {
      console.error('Erro:', error.message);
    });
}

function GetSenha(){
  const idUsuario = "1";
 
  const opcoes3 = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  // URL do servidor JSON (substitua pelo seu endpoint correto)
  const url1 = `http://localhost:3000/usuarios/${idUsuario}`;
  
  fetch(url1, opcoes3)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao tentar obter o peso do usuário');
      }
      return response.json();
    })
    .then(data => {
      let variavel = data.senha;
      sessionStorage.setItem("senha", variavel);
    })
    .catch(error => {
      console.error('Erro:', error.message);
    });
}

function GetPeso(){
  const idUsuario = "1";
 
  const opcoes3 = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  // URL do servidor JSON (substitua pelo seu endpoint correto)
  const url1 = `http://localhost:3000/usuarios/${idUsuario}`;
  
  fetch(url1, opcoes3)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao tentar obter o peso do usuário');
      }
      return response.json();
    })
    .then(data => {
      let variavel = data.peso;
      sessionStorage.setItem("email", variavel);
    })
    .catch(error => {
      console.error('Erro:', error.message);
    });
}

function GetObjetivo(){
  const idUsuario = "1";
 
  const opcoes3 = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  // URL do servidor JSON (substitua pelo seu endpoint correto)
  const url1 = `http://localhost:3000/usuarios/${idUsuario}`;
  
  fetch(url1, opcoes3)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao tentar obter o peso do usuário');
      }
      return response.json();
    })
    .then(data => {
      let variavel = data.objetivo;
      sessionStorage.setItem("objetivo", variavel);
    })
    .catch(error => {
      console.error('Objetivo', error.message);
    });
}

function deleteData() {
  const idUsuario = "2";
 
  const opcoes = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  // URL do servidor JSON (substitua pelo seu endpoint correto)
  const url = `http://localhost:3000/usuarios/${idUsuario}`;
  
  fetch(url, opcoes)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao tentar apagar os dados do usuário');
      }
      return response.json();
    })
    .then(data => {
      console.log('Dados apagados com sucesso');
    })
    .catch(error => {
      console.error('Erro:', error.message);
    });
}



//#region Testes
/*

$(document).ready(function() {
  var pesoInput = $("#Peso");
  // Now you can work with the "Peso" input element
  // For example, you can get its value:
  var pesoValue = pesoInput.val();
  console.log(pesoValue);
});

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
*/
//#endregion