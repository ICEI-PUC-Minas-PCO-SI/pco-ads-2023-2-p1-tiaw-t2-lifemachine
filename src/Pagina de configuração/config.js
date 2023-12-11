function atualizarFoto(){
  let elemento = document.getElementById("Emogi");
  let elementoSelect = elemento.options[elemento.selectedIndex].value;
  console.log(elementoSelect);

  let b = document.getElementById("imagemUsuario");

  if(elementoSelect=="Avatar1"){
    let c = './img/avatar/Avatar1.png'
    localStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    Visibilidade();
  }
  if(elementoSelect=="Avatar2"){
    let c = './img/avatar/Avatar2.png'
    localStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    Visibilidade();
  }
  if(elementoSelect=="Avatar3"){
    let c = './img/avatar/Avatar3.png'
    localStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    Visibilidade();
  }
  if(elementoSelect=="Avatar4"){
    let c = './img/avatar/Avatar4.png'
    localStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    Visibilidade();
  }
  if(elementoSelect=="Avatar5"){
    let c = './img/avatar/Avatar5.png'
    localStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    Visibilidade();
  }
  if(elementoSelect=="Avatar6"){
    let c = './img/avatar/Avatar6.png'
    localStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    Visibilidade();
  }
  if(elementoSelect=="Avatar7"){
    let c = './img/avatar/Avatar7.png'
    localStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    Visibilidade();
  }
  if(elementoSelect=="Avatar8"){
    let c = './img/avatar/Avatar8.png'
    localStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    Visibilidade();
  }
  if(elementoSelect=="Avatar9"){
    let c = './img/avatar/Avatar9.png'
    localStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    Visibilidade();
  }
  
}

function Visibilidade(){
  let a = document.getElementById("esconde");
  if (a.style.visibility === "visible") {
    a.style.visibility = "hidden";
  } else {
    a.style.visibility = "visible";
  }
}

function Reload(){
  location.reload()
}

function GetNome() {
  const idUsuario = localStorage.getItem("atualID");
  const url1 = `http://localhost:3000/usuarios/${idUsuario}`;

  const opcoes3 = {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json'
      }
  };

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


function verificarValor(valor) {
  const regex = /[!@#$%^&*()?":{}|<>]/;
  const numero = parseFloat(valor.replace(',', '.'));

  if (regex.test(valor)) {
    return true;
  }
  else if (numero > 200) {
    return true;
  }
  return false;
}

function campo(){
  var disposicao = document.getElementById("DiasDeTreino");
  var peso = document.getElementById("Peso");
  var objetivo = document.getElementById("Objetivo");
  var senha = document.getElementById("password");

  if (!disposicao.value && !objetivo.value && !senha.value && !senha.value){
    alert("Não é possível atualizar, preencha pelo um dos campos!");
  }
  if(verificarValor(peso.value)==false){
    if(disposicao.value){
      GetDiasDeTreino(disposicao.value)
    }
    if(peso.value){
      var pesoFloat = parseFloat(peso.value.replace(',', '.'));
      GetPeso(pesoFloat);
    }
    if(objetivo.value){
      GetObjetivo(objetivo.value)
    }
    if(senha.value){
      GetSenha(senha.value)
    }
  }
  else{
    alert("Valor de Peso inválido");
  }
}

function GetSenha(valorSenha){
  const dadosAtualizados = {
    senha: valorSenha
  };

  const opcoes = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosAtualizados)
  };
  const a = localStorage.getItem("atualID");
  const url1 = `http://localhost:3000/usuarios/${a}`;

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

function GetPeso(valorPeso){
  const dadosAtualizados = {
    peso: valorPeso
  };

  const opcoes = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosAtualizados)
  };
  const a = localStorage.getItem("atualID");
  const url1 = `http://localhost:3000/usuarios/${a}`;

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

function GetObjetivo(valorObjetivo){
  const dadosAtualizados = {
    objetivo: valorObjetivo
  };

  const opcoes = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosAtualizados)
  };
  const a = localStorage.getItem("atualID");
  const url1 = `http://localhost:3000/usuarios/${a}`;

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

function GetDiasDeTreino(valorDiasDeTreino){
  const dadosAtualizados = {
    diasDeTreino: valorDiasDeTreino
  };

  const opcoes = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosAtualizados)
  };
  const a = localStorage.getItem("atualID");
  const url1 = `http://localhost:3000/usuarios/${a}`;

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

function deleteData() {
  const idUsuario = localStorage.getItem("atualID");
 
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
      window.location.href = '../Página de login/login.html';
    })
    .catch(error => {
      console.error('Erro:', error.message);
    });
}
