var imgArea = document.getElementById('fotoUser')
var a = sessionStorage.getItem('ImgUsuario')
imgArea.src = a;


$(document).ready(function () {
    function atualizarnome() {
        var nomeDoUsuario = sessionStorage.getItem('userName') || 'Usuário';
        if (window.location.pathname.includes('config.html')) {
            $('#Att-Nome').text(nomeDoUsuario);
        } else {
            $('#Att-Nome').text(nomeDoUsuario);
            $('#Att-Nome').text('Olá, ' + nomeDoUsuario);
        }
    }
    atualizarnome();
});


