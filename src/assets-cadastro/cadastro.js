$(document).ready(function () {
    var URL = 'https://db-json-life-machine.onrender.com/usuarios';
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
                    var mensagem = 'Por favor, complete os seguintes campos antes de prosseguir:';
                    camposFaltando.forEach(function(campo) {
                        mensagem += '\n- ' + RefinamentoCadastro(campo);
                    });
                    alert(mensagem);
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
                var imagemUsuario = '../assets-configuracao/img/avatar/Avatar1.png';
                
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
                    sexo: Sexo,
                    imgUsuario: imagemUsuario
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
                        window.location.href = './pagina-login.html';
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
        
            camposObrigatorios.forEach(function(campo) {
                var valorCampo = $(campo).val();
                if (!valorCampo || valorCampo.trim() === '') {
                    camposFaltando.push(campo);
                    $(campo).addClass('focus-highlight'); 
                } else {
                    $(campo).removeClass('focus-highlight'); 
                }
            });
        
            return camposFaltando;
        }

    function emailUsado(email) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                return true;
            }
        }
        return false;
    }

    function RefinamentoCadastro(campo) {
        switch(campo) {
            case '#email':
                return 'E-mail';
            case '#password':
                return 'Senha';
            case '#1password':
                return 'Confirmação de Senha';
            case '#nome':
                return 'Nome';
            case '#Altura':
                return 'Altura';
            case '#Peso':
                return 'Peso';
            case '#Objetivo':
                return 'Objetivo';
            case '#DiasDeTreino':
                return 'Dias de Treino';
            case '#Sexo':
                return 'Sexo';
            default:
                return campo;
        }
    }
    $('input, select').on('focus', function () {
        $(this).addClass('focus-highlight');
    });

    $('input, select').on('blur', function () {
        if ($(this).val().trim() === '') {
            $(this).addClass('focus-highlight');
        } else {
            $(this).removeClass('focus-highlight');
        }
    });
});