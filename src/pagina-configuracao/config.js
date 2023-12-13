function inicial(){
  sessionStorage.setItem("atualID","1")
}

function onlyPeso(evento) {
  var inputPeso = document.getElementById("Peso");
  var code = evento.keyCode;
  var valor = inputPeso.value;

  if ((code < 48 || code > 57) && code !== 8 && code !== 46 && (code !== 44 || valor.includes(','))) {
      evento.preventDefault();
      return false;
  }

  maskPeso(inputPeso);
}

function maskPeso(elemento) {
  var content = elemento.value.replace(/[^\d,]/g, '');
  var formatted = '';

  if (content.length > 0) {
      var parts = content.split(',');
      formatted = parts[0].substring(0, 3);
      if (parts.length > 1) {
          formatted += ',' + parts[1].substring(0, 1);
      }
      elemento.value = formatted;
  }
}

function atualizarFoto(){
  let elemento = document.getElementById("Emogi");
  let elementoSelect = elemento.options[elemento.selectedIndex].value;
  console.log(elementoSelect);

  let b = document.getElementById("imagemUsuario");

  if(elementoSelect=="Avatar1"){
    let c = './img/avatar/Avatar1.png'
    sessionStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    AtualizaFoto(c)
    Visibilidade();
  }
  if(elementoSelect=="Avatar2"){
    let c = './img/avatar/Avatar2.png'
    sessionStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    AtualizaFoto(c)
    Visibilidade();
  }
  if(elementoSelect=="Avatar3"){
    let c = './img/avatar/Avatar3.png'
    sessionStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    AtualizaFoto(c)
    Visibilidade();
  }
  if(elementoSelect=="Avatar4"){
    let c = './img/avatar/Avatar4.png'
    sessionStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    AtualizaFoto(c)
    Visibilidade();
  }
  if(elementoSelect=="Avatar5"){
    let c = './img/avatar/Avatar5.png'
    sessionStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    AtualizaFoto(c)
    Visibilidade();
  }
  if(elementoSelect=="Avatar6"){
    let c = './img/avatar/Avatar6.png'
    sessionStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    AtualizaFoto(c)
    Visibilidade();
  }
  if(elementoSelect=="Avatar7"){
    let c = './img/avatar/Avatar7.png'
    sessionStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    AtualizaFoto(c)
    Visibilidade();
  }
  if(elementoSelect=="Avatar8"){
    let c = './img/avatar/Avatar8.png'
    sessionStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    AtualizaFoto(c)
    Visibilidade();
  }
  if(elementoSelect=="Avatar9"){
    let c = './img/avatar/Avatar9.png'
    sessionStorage.setItem("caminhoImagemUsuario", c);
    b.src = c;
    AtualizaFoto(c)
    Visibilidade();
  }
  
}

function AtualizaFoto(caminhoFoto){
  const dadosAtualizados = {
    imgUsuario: caminhoFoto
  };

  const opcoes = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosAtualizados)
  };
  const a = sessionStorage.getItem("atualID");
  const url1 = `https://db-json-life-machine.onrender.com/usuarios/${a}`;

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

function Visibilidade(){
  let a = document.getElementById("esconde");
  if (a.style.visibility === "visible") {
    a.style.visibility = "hidden";
  } else {
    a.style.visibility = "visible";
  }
}

function sair(){
  sessionStorage.clear();
  window.location.href = '../pagina-login/login.html';
}

function Reload(){
  location.reload()
}

function GetNome() {
  const idUsuario = sessionStorage.getItem("atualID");
  const url1 = `https://db-json-life-machine.onrender.com/usuarios/${idUsuario}`;

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

function GetImg() {
  const idUsuario = sessionStorage.getItem("atualID");
  const url1 = `https://db-json-life-machine.onrender.com/usuarios/${idUsuario}`;

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
      let a = data.imgUsuario;
      sessionStorage.setItem("caminhoImagemUsuario", a);
      })
      .catch(error => {
      console.error('Erro:', error.message);
      });
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
  const a = sessionStorage.getItem("atualID");
  const url1 = `https://db-json-life-machine.onrender.com/usuarios/${a}`;

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
  const a = sessionStorage.getItem("atualID");
  const url1 = `https://db-json-life-machine.onrender.com/usuarios/${a}`;

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
  const a = sessionStorage.getItem("atualID");
  const url1 = `https://db-json-life-machine.onrender.com/usuarios/${a}`;

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
  const a = sessionStorage.getItem("atualID");
  const url1 = `https://db-json-life-machine.onrender.com/usuarios/${a}`;

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
  const idUsuario = sessionStorage.getItem("atualID");
 
  const opcoes = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  // URL do servidor JSON (substitua pelo seu endpoint correto)
  const url = `https://db-json-life-machine.onrender.com/usuarios/${idUsuario}`;
  
  fetch(url, opcoes)
  .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao tentar apagar os dados do usuário');
      }
      return response.json();
    })
    .then(data => {
      console.log('Dados apagados com sucesso');
      window.location.href = '../pagina-login/login.html';
    })
    .catch(error => {
      console.error('Erro:', error.message);
    });
}
