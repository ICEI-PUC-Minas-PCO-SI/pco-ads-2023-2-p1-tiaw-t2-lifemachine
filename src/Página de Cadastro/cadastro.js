$(document).ready(function () {
    var users = JSON.parse(localStorage.getItem('users')) || [];

    $('#registration-form').submit(function (event) {
        event.preventDefault();

        var camposFaltando = validarCampos();

        if (camposFaltando.length > 0) {
            alert('Por favor, preencha todos os campos obrigatórios (' + camposFaltando.join(', ') + ').');
            return; 
        }

        var email = $('#email').val();
        var senha = $('#password').val();
        var confirmSenha = $('#1password').val();
        var nome = $('#nome').val();
        var Altura = $('#Altura').val();
        var Peso = $('#Peso').val();
        var Objetivo = $('#Objetivo').val();
        var DiasDeTreino = $('#DiasDeTreino').val();
        var Sexo = $('#Sexo').val();
        
        // Validaçoes pra ta certinho
        if (emailusado(email)) {
            alert('Este e-mail ja esta em uso. Por favor, use outro e-mail.');
            return;
        }

        if (senha !== confirmSenha) {
            alert('A senha e a confirmação de senha não são iguais.');
            return; 
        }

        // Caso tudo de boa faz o cadastro
        var CadastroUsuario = {
            email: email,
            senha: senha,
            nome: nome,
            altura: Altura,
            peso: Peso,
            objetivo: Objetivo,
            diasDeTreino: DiasDeTreino,
            sexo: Sexo
        };

        users.push(CadastroUsuario);
        localStorage.setItem('users', JSON.stringify(users));

        window.location.href = '../Página de login/login.html';
    });

    //funcoes para ver c ta tudo certinho
    function validarCampos() {
        var camposObrigatorios = ['#email', '#password', '#1password', '#nome', '#Altura', '#Peso', '#Objetivo', '#DiasDeTreino', '#Sexo'];
        var camposFaltando = [];

        for (var x = 0; x < camposObrigatorios.length; x++) {
            var campo = $(camposObrigatorios[x]);
            if (!campo.val()) {
                camposFaltando.push(camposObrigatorios[x]);
            }
        }

        return camposFaltando;
    }

    function emailusado(email) {
        for (var x = 0; x < users.length; x++) {
            if (users[x].email === email) {
                return true; 
            }
        }
        return false;
    }
});