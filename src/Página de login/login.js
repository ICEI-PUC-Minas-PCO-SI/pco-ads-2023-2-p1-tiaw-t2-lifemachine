var URL = 'http://localhost:3000/usuarios';

$(document).ready(function () {
    $('#login-form').submit(function (event) {
        event.preventDefault();

        var email = $('#username').val();
        var senha = $('#password').val();

        fetch(URL)
            .then(res => res.json())
            .then(data => {
                var cadastrado = tentarlogin(data, email, senha);

                if (cadastrado) {
                    localStorage.setItem('userName', Detalhescadastrousuario(data, email).Nome);
                    localStorage.setItem('pesoAtual', Detalhescadastrousuario(data, email).peso);
                    localStorage.setItem('atualID', Detalhescadastrousuario(data, email).id)
                    window.location.href = '../Página principal/pagina principal.html';
                    
                } else {
                    let erro = document.getElementById('erro-login')
                    erro.innerHTML = `
                    <small class="text-danger">Login e/ou senha inválido(s). Por favor, tente novamente. Em caso de esquecimento de senha, entre em contato conosco pelo e-mail LifeMachine@gmail.com.</small>
                    `
                }
            })
            .catch(error => {
                console.error('Erro ao recuperar usuários:', error);
                alert('Erro ao tentar fazer login. Por favor, tente novamente.');
            });
    });

    function tentarlogin(usuarios, email, senha) {
        for (var x = 0; x < usuarios.length; x++) {
            if (usuarios[x].email === email && usuarios[x].senha === senha) {
                return true;
            }
        }
        return false;
    }
    function Detalhescadastrousuario(usuarios, email) {
        for (var x = 0; x < usuarios.length; x++) {
            if (usuarios[x].email === email) {
                return usuarios[x];
            }
        }
        return null;
    }
});
