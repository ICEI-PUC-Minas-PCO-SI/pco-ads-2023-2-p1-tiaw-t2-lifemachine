$(document).ready(function () {
    var URL = 'http://localhost:3000/usuarios';
    var users = [];
    var x; 

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            users = data || [];
            x = users.length + 1;

         
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

                if (emailUsado(email)) {
                    alert('Este e-mail já está em uso. Por favor, use outro e-mail.');
                    return;
                }

                if (senha !== confirmSenha) {
                    alert('A senha e a confirmação de senha não são iguais.');
                    return;
                }

                var CadastroUsuario = {
                    id: (x).toString(),
                    Nome: nome,
                    email: email,
                    senha: senha,
                    altura: Altura,
                    peso: Peso,
                    objetivo: Objetivo,
                    diasDeTreino: DiasDeTreino,
                    sexo: Sexo
                };

                fetch(URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(CadastroUsuario),
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Erro ao cadastrar usuário.');
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Usuário cadastrado com sucesso:', data);
                        return fetch(URL);
                    })
                    .then(res => res.json())
                    .then(data => {
                        users = data.usuarios || [];
                        window.location.href = '../Página de login/login.html';
                    })
                    .catch(error => {
                        console.error('Erro ao cadastrar usuário:', error);
                        alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
                    });
            });
        });

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

    function emailUsado(email) {
        for (var x = 0; x < users.length; x++) {
            if (users[x].email === email) {
                return true;
            }
        }
        return false;
    }
})
