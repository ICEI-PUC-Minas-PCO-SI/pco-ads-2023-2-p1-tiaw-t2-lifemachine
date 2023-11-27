var URL = 'http://localhost:3000/usuarios';

$(document).ready(function () {
    $('#login-form').submit(function (event) {
        event.preventDefault();

        var email = $('#username').val();
        var senha = $('#password').val();

        fetch(URL)
            .then(res => res.json())
            .then(data => {
                var cadastrado = tentarlogin(data.usuarios, email, senha);

                if (cadastrado) {
                    window.location.href = '../Página principal/pagina principal.html';
                } else {
                    alert('Senha Inválida');
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
});
