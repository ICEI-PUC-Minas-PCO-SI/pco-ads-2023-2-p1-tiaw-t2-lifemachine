$(document).ready(function () {
    function atualizarnome() {
        var nomeDoUsuario = localStorage.getItem('userName') || 'Usuário';
        $('#Att-Nome').text('Olá, ' + nomeDoUsuario);
    }

    atualizarnome();
});