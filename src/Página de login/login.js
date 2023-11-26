var usuario = JSON.parse(localStorage.getItem('users')) || [];

        $(document).ready(function () {
            $('#login-form').submit(function (event) {
                event.preventDefault();
                
                var email = $('#username').val(), senha = $('#password').val();
                var cadastrado = tentarlogin(email, senha);

                if (cadastrado) {
                    window.location.href = '../Página principal/pagina principal.html';
                } else {
                    alert('Senha Inválida'); //trocar esse alet por um innerHTML
                }
            });

            function tentarlogin(email, senha) {
                for (var x = 0; x < usuario.length; x++) {
                    if (usuario[x].email === email && usuario[x].senha === senha) {
                        return true;
                    }
                }
                return false;
            }
        });