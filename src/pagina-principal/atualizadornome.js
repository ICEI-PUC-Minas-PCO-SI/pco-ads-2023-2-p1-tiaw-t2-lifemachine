$(document).ready(function () {
    function atualizarnome() {
        var nomeDoUsuario = localStorage.getItem('userName') || 'Usuário';
        if (window.location.pathname.includes('config.html')) {
            $('#Att-Nome').text(nomeDoUsuario);
        } else {
            $('#Att-Nome').text(nomeDoUsuario);
            $('#Att-Nome').text('Olá, ' + nomeDoUsuario);
        }
    }
    atualizarnome();
});
