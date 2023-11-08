# Instruções de utilização

## Instalação do Site

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap Demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>

<body id="container">
    <header>
        <nav class="navbar navbar-expand-sm navbar-light">
            <div class="container">
                <a href="#" class="navbar-brand">
                    <img src="img/logo.png" width="142" alt="Logo">
                </a>
            </div>
        </nav>
    </header>

    <section id="home">
        <div class="container custom-padding">
            <div class="row">
                <div class="col-md-6 d-flex">
                    <div class="align-self-center fotos">
                        <div class="d-flex">
                            <i class="fa-solid fa-circle-user fotoDePerfil" style="font-size: 4em; margin-right: 10px;"></i>
                            <h1 class="ml-3" style="margin-bottom: 30px;">Olá, Usuário</h1>
                        </div>
                        <div class="row fotos">
                            <div class="col-md-4 text-center">
                                <img src="img/semFoto.jpg" alt="Imagem 1" class="imagem" style="width: 150px;">
                                <p class="text">Treino</p>
                            </div>
                            <div class="col-md-4 text-center">
                                <img src="img/semFoto.jpg" alt="Imagem 2" class="imagem" style="width: 150px;">
                                <p class="text">Alimentação</p>
                            </div>
                            <div class="col-md-4 text-center">
                                <img src="img/semFoto.jpg" alt="Imagem 3" class="imagem" style="width: 150px;">
                                <p class="text">Sono</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 d-flex flex-column lateral">
                    <div class="d-flex justify-content-end mt-3">
                        <i class="fa-solid fa-gear ferradura" style="font-size: 2em;"></i>
                    </div>
                    <div style="text-align: center;">
                        <div class="info text-center align-items-center" style="text-align: left;">
                            <div class="row">
                                <div class="col-md-8 col-sm-8">
                                    <div>
                                        Peso anterior: 60 <br>
                                        Peso atual: 80 <br>
                                    </div>
                                    <hr>
                                    <div>
                                        Treino concluído: 10<br>
                                        Recorte anterior: 5 <br>
                                    </div>
                                    <hr>
                                    <div>
                                        Treino concluído: 60<br>
                                        Recorte anterior: 80<br>
                                    </div>
                                    <hr>
                                    <div>
                                        Treino concluído: 60<br>
                                        Recorte anterior: 80<br>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-2 infoLateral">
                                    <div class="infoLateral">
                                        <img src="img/seta verde cima.png" alt="" style="width: 30px;">
                                        33% <br><br> <br>
                                    </div>
                                    <div>
                                        <img src="img/seta verde cima.png " alt="" style="width: 26px;">
                                        100% <br><br><br>
                                    </div>
                                    <div>
                                        <img src="img/setaVermelha.png " alt="" style="width: 30px;">
                                        33% <br><br> <br>
                                    </div>
                                    <div>
                                        <img src="img/setaVermelha.png " alt="" style="width: 30px;">
                                        33% <br><br> <br>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div id="suporte">
        <a href="">
            <h4 class="letraSupo">SUPORTE: suporte.lifemachine@gmail.com</h4>
        </a>
    </div>

    <footer>
        <p>
            Copyright 2023
        </p>
    </footer>

    <script src="https://kit.fontawesome.com/cee75c1bef.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
</body>

</html>
## estilo CSS : /* Reset de estilos */
body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
}

/* Estilos do cabeçalho */
header {
    height: 150px;
    background-color: #D9D9D9;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}

.logo {
    height: 100px;
    width: 100px;
    border-radius: 50%;
}

.logo img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

header h2 {
    font-size: 30px;
    font-weight: bold;
    margin: 0;
}

/* Estilos do rodapé */
footer {
    background-color: #D9D9D9;
    height: 30px;
    text-align: center;
    margin-top: 20px;
    clear: both;
}

a {
    text-decoration: none;
}

.custom-padding {
    padding-top: 20px;
}

.imagem {
    border: 1px solid red;
    border-radius: 5%;
}

.info {
    background-color: #D9D9D9;
    border: 1px solid red;
    padding: 20px;
    margin-top: 45px;
    border-radius: 2%;
}

.text {
    padding-top: 10px;
    text-align: center;
    font-size: 1.5em;
}

.fotos {
    margin-top: 10px;
}

#suporte {
    border-radius: 5%;
    width: fit-content;
    background-color: #D9D9D9;
    margin-left: 115px;
}

.letraSupo {
    padding: 2px;
    color: black;
}

/* Estilos para telas menores */
@media (max-width: 767px) {
    header {
        height: auto;
        flex-direction: column;
        align-items: flex-start;
        text-align: center;
    }

    .logo {
        margin: 20px 0;
    }

    header h2 {
        font-size: 24px;
    }

    .info {
        margin-top: 20px;
        padding-top: 10px;
    }

    .col-md-4.text-center,
    .letraSupo {
        text-align: center;
    }

    .fotos {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }

    .col-md-8.col-sm-8 {
        width: 50%;
        text-align: left;
        margin-left: 40px;
        padding-top: 10px;
    }

    .col-md-4.col-sm-2 {
        width: 20%;
        text-align: right;
        margin-right: 10px;
    }

    .lateral {
        padding-bottom: 30px;
    }

    .infoLateral {
        padding-top: 15px;
    }
}

## Histórico de versões

### [0.1.0] - DD/MM/AAAA
#### Adicionado
- Adicionado ...
