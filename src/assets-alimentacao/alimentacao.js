const receitas = [
    {

        nome: 'Omelete de Vegetais e Queijo',
        ingredientes: ['3 ovos', '1/2 xícara de espinafre', '1/4 de xícara de tomate picado', '30g de queijo feta', 'Temperos a gosto'],
        carboidratos: 8,
        proteina: 30,
        calorias: 300,
        gorduras: 18,
        modoPreparo: 'Bata os ovos, misture com os ingredientes e cozinhe em uma frigideira.',
        "img": "./img/receitas/Omelete de Vegetais e Queijo.jpg"
    },
    {
        nome: 'Salada de Atum e Grão-de-Bico',
        ingredientes: ['150g de atum em lata (em água)', '1 xícara de grão-de-bico cozido', 'Mix de folhas verdes', 'Tomate cereja', 'Pepino', 'Azeite de oliva como molho'],
        carboidratos: 30,
        proteina: 30,
        calorias: 400,
        gorduras: 15,
        modoPreparo: 'Misture todos os ingredientes em uma tigela e regue com azeite de oliva.',
        "img": "./img/receitas/Salada de Atum e Grão-de-Bico.jpeg"
    },
    {
        nome: 'Sopa de Lentilhas com Vegetais',
        ingredientes: ['1 xícara de lentilhas cozidas', 'Cenoura, cebola, alho e aipo (vegetais a gosto)', 'Caldo de legumes', 'Temperos a gosto'],
        carboidratos: 50,
        proteina: 20,
        calorias: 350,
        gorduras: 8,
        modoPreparo: 'Cozinhe as lentilhas com os vegetais no caldo de legumes até que estejam macios.',
        "img": "./img/receitas/Sopa de Lentilhas com Vegetais.jpeg"
    },
    {
        nome: 'Tigela de Frango com Abacate',
        ingredientes: ['150g de peito de frango grelhado', '1/2 abacate em fatias', 'Quinoa cozida', 'Tomate cereja', 'Molho de iogurte como cobertura'],
        carboidratos: 40,
        proteina: 35,
        calorias: 450,
        gorduras: 15,
        modoPreparo: 'Monte a tigela com frango, abacate, quinoa e tomate. Regue com molho de iogurte.',
        "img": "./img/receitas/Tigela de Frango com Abacate.jpg"
    },
    {
        nome: 'Espaguete de Abobrinha com Almôndegas de Peru',
        ingredientes: ['Espaguete de abobrinha', 'Almôndegas de peru', 'Molho de tomate caseiro', 'Queijo parmesão ralado'],
        carboidratos: 20,
        proteina: 30,
        calorias: 380,
        gorduras: 12,
        modoPreparo: 'Cozinhe o espaguete de abobrinha, faça as almôndegas e sirva com molho de tomate e queijo ralado.',
        "img": "./img/receitas/Espaguete de Abobrinha com Almôndegas de Peru.jpg"
    },
    {
        nome: 'Wrap de Frango com Vegetais',
        ingredientes: ['Peito de frango grelhado em tiras', 'Wrap integral', 'Alface, tomate, pepino', 'Molho de iogurte'],
        carboidratos: 40,
        proteina: 35,
        calorias: 420,
        gorduras: 15,
        modoPreparo: 'Monte o wrap com frango, vegetais e molho de iogurte.',
        "img": "./img/receitas/Wrap de Frango com Vegetais.jpg"
    },
    {
        nome: 'Tigela de Arroz Integral com Legumes Assados e Salmão',
        ingredientes: ['Salmão grelhado', 'Arroz integral cozido', 'Brócolis, abobrinha, cenoura assados', 'Molho de limão e ervas'],
        carboidratos: 45,
        proteina: 35,
        calorias: 500,
        gorduras: 18,
        modoPreparo: 'Coloque o salmão grelhado sobre o arroz integral e legumes assados. Regue com molho de limão e ervas.',
        "img": "./img/receitas/Tigela de Arroz Integral com Legumes Assados e Salmão.jpeg"
    },
    {
        nome: 'Smoothie de Banana e Amêndoas',
        ingredientes: ['1 banana', '30g de amêndoas', 'Iogurte grego sem gordura', 'Espinafre fresco', 'Água ou leite de amêndoas'],
        carboidratos: 30,
        proteina: 20,
        calorias: 350,
        gorduras: 15,
        modoPreparo: 'Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.',
        "img": "./img/receitas/Smoothie de Banana e Amêndoas.png"
    },
    {
        nome: 'Caçarola de Quinoa com Legumes e Frango',
        ingredientes: ['Quinoa cozida', 'Peito de frango cozido e desfiado', 'Ervilhas, milho, cenoura', 'Molho de tomate caseiro', 'Queijo ralado'],
        carboidratos: 35,
        proteina: 30,
        calorias: 420,
        gorduras: 15,
        modoPreparo: 'Misture a quinoa cozida com frango desfiado, legumes e molho de tomate. Cubra com queijo ralado e asse.',
        "img": "./img/receitas/Caçarola de Quinoa com Legumes e Frango.png"
    },
    {
        nome: 'Salada de Camarão com Abacate',
        ingredientes: ['Camarão cozido', 'Abacate em cubos', 'Folhas verdes', 'Tomate, cebola roxa', 'Molho de limão e coentro'],
        carboidratos: 25,
        proteina: 30,
        calorias: 380,
        gorduras: 20,
        modoPreparo: 'Misture camarão, abacate, folhas verdes, tomate e cebola. Regue com molho de limão e coentro.',
        "img": "./img/receitas/Salada de Camarão com Abacate.png"
    },
    {
        nome: 'Wrap de Frango com Abacate',
        ingredientes: ['150g de peito de frango cozido e desfiado', '1 wrap de espinafre', '1/4 de abacate fatiado', 'Vegetais à escolha', 'Temperos a gosto'],
        carboidratos: 20,
        proteina: 25,
        calorias: 320,
        gorduras: 10,
        modoPreparo: 'Monte o wrap com os ingredientes e tempere a gosto.',
        "img": "./img/receitas/Wrap de Frango com Vegetais.jpg"
    },
    {
        nome: 'Salada de Quinoa com Legumes Assados',
        ingredientes: ['1 xícara de quinoa cozida', 'Abobrinha, berinjela e pimentão assados', '1/4 de xícara de queijo de cabra', 'Molho de limão e azeite'],
        carboidratos: 40,
        proteina: 15,
        calorias: 350,
        gorduras: 12,
        modoPreparo: 'Misture todos os ingredientes e regue com molho de limão e azeite.',
        "img": "./img/receitas/Salada de Quinoa com Legumes Assados.jpg"
    },
    {
        nome: 'Salmão Grelhado com Aspargos',
        ingredientes: ['150g de salmão', 'Aspargos frescos', 'Limão, alho e ervas para temperar', '1 colher de chá de azeite de oliva'],
        carboidratos: 10,
        proteina: 30,
        calorias: 280,
        gorduras: 15,
        modoPreparo: 'Tempere o salmão e os aspargos, grelhe e regue com azeite de oliva.',
        "img": "./img/receitas/Salmão Grelhado com Aspargos.jpg"
    },
    {
        nome: 'Muffins de Aveia e Banana',
        ingredientes: ['2 bananas maduras amassadas', '2 ovos', '1 xícara de aveia em flocos', '1/2 xícara de leite de amêndoas', '1 colher de chá de fermento em pó'],
        carboidratos: 30,
        proteina: 10,
        calorias: 250,
        gorduras: 8,
        modoPreparo: 'Misture os ingredientes, despeje em formas de muffin e asse.',
        "img": "./img/receitas/Muffins de Aveia e Banana.jpg"
    },
    {
        nome: 'Espaguete de Abobrinha com Molho de Tomate Caseiro',
        ingredientes: ['2 abobrinhas médias', 'Molho de tomate caseiro (tomate, alho, cebola)', 'Manjericão fresco', 'Queijo parmesão ralado'],
        carboidratos: 15,
        proteina: 5,
        calorias: 180,
        gorduras: 7,
        modoPreparo: 'Faça o espaguete de abobrinha e cubra com molho de tomate e queijo.',
        "img": "./img/receitas/Espaguete de Abobrinha com Molho de Tomate Caseiro.jpg"
    },
    {
        nome: 'Tigela de Café da Manhã com Aveia e Frutas',
        ingredientes: ['1/2 xícara de aveia em flocos', '1/2 xícara de leite de amêndoas', '1/2 banana fatiada', 'Punhado de morangos picados', '1 colher de sopa de sementes de chia'],
        carboidratos: 35,
        proteina: 10,
        calorias: 280,
        gorduras: 7,
        modoPreparo: 'Misture os ingredientes em uma tigela e aproveite seu café da manhã.',
        "img": "./img/receitas/Tigela de Café da Manhã com Aveia e Frutas.png"
    },
    {
        nome: 'Lombo de Porco com Legumes Assados',
        ingredientes: ['150g de lombo de porco', 'Brócolis, cenoura e abóbora assados', '1 colher de sopa de azeite de oliva', 'Alecrim e alho para temperar'],
        carboidratos: 25,
        proteina: 28,
        calorias: 320,
        gorduras: 15,
        modoPreparo: 'Tempere o lombo, asse com os legumes e regue com azeite de oliva.',
        "img": "./img/receitas/Lombo de Porco com Legumes Assados.jpeg"

    },
    {
        nome: 'Smoothie Verde Energizante',
        ingredientes: ['1 xícara de espinafre fresco', '1/2 abacate', '1 banana', '1/2 xícara de água de coco', '1 colher de sopa de sementes de abóbora'],
        carboidratos: 30,
        proteina: 8,
        calorias: 250,
        gorduras: 12,
        modoPreparo: 'Bata todos os ingredientes no liquidificador e sirva.',
        "img": "./img/receitas/Smoothie Verde Energizante.jpg"

    },
    {
        nome: 'Salada de Frango com Quinoa',
        ingredientes: ['150g de peito de frango grelhado', '1 xícara de quinoa cozida', 'Pepino, tomate e pimentão picados', 'Molho de iogurte com limão'],
        carboidratos: 30,
        proteina: 25,
        calorias: 320,
        gorduras: 10,
        modoPreparo: 'Misture todos os ingredientes e regue com molho de iogurte.',
        "img": "./img/receitas/Salada de Frango com Quinoa.jpg"

    },
    {
        nome: 'Panquecas de Banana e Aveia',
        ingredientes: ['1 banana amassada', '1 ovo', '1/2 xícara de aveia em flocos', '1/2 colher de chá de canela', 'Frutas frescas para decorar'],
        carboidratos: 30,
        proteina: 10,
        calorias: 270,
        gorduras: 8,
        modoPreparo: 'Misture os ingredientes e faça as panquecas em uma frigideira.',
        "img": "./img/receitas/Panquecas de Banana e Aveia.jpg"

    },
    {
        nome: 'Macarrão Integral com Frango ao Pesto',
        ingredientes: ['150g de peito de frango grelhado', '1 xícara de macarrão integral cozido', '1/4 de abacate amassado', 'Molho pesto caseiro', 'Tomates cereja cortados ao meio'],
        carboidratos: 40,
        proteina: 30,
        calorias: 450,
        gorduras: 20,
        modoPreparo: 'Cozinhe o macarrão, grelhe o frango, misture com pesto e abacate.',
        "img": "./img/receitas/Macarrão Integral com Frango ao Pesto.jpg"

    },
    {
        nome: 'Tigela de Arroz Integral com Salmão Grelhado',
        ingredientes: ['150g de salmão grelhado', '1 xícara de arroz integral cozido', 'Brócolis e cenouras cozidos no vapor', 'Molho de soja e gengibre', 'Amêndoas tostadas'],
        carboidratos: 45,
        proteina: 35,
        calorias: 480,
        gorduras: 15,
        modoPreparo: 'Monte a tigela com os ingredientes e regue com molho de soja e gengibre.',
        "img": "./img/receitas/Tigela de Arroz Integral com Legumes Assados e Salmão.jpeg"
    },
    {
        nome: 'Pizza de Frango com Crosta de Couve-Flor',
        ingredientes: ['Crosta de couve-flor (couve-flor processada, ovo, queijo)', 'Molho de tomate caseiro', '150g de frango desfiado', 'Queijo mussarela ralado', 'Vegetais a gosto'],
        carboidratos: 30,
        proteina: 40,
        calorias: 520,
        gorduras: 25,
        modoPreparo: 'Asse a crosta, adicione os ingredientes e asse novamente.',
        "img": "./img/receitas/Pizza de Frango com Crosta de Couve-Flor.jpg"
    },
    {
        nome: 'Batata Doce Recheada com Chili de Carne',
        ingredientes: ['1 batata doce grande assada', '200g de carne moída magra com molho de tomate', 'Feijão preto cozido', 'Abacate fatiado', 'Coentro fresco'],
        carboidratos: 50,
        proteina: 25,
        calorias: 480,
        gorduras: 15,
        modoPreparo: 'Recheie a batata com chili de carne, feijão preto e abacate.',
        "img": "./img/receitas/Batata Doce Recheada com Chili de Carne.png"
    },
    {
        nome: 'Smoothie de Banana e Manteiga de Amendoim',
        ingredientes: ['2 bananas maduras', '2 colheres de sopa de manteiga de amendoim', '1 xícara de leite de amêndoas', '1 colher de sopa de mel', '1 colher de sopa de aveia em flocos'],
        carboidratos: 45,
        proteina: 15,
        calorias: 480,
        gorduras: 20,
        modoPreparo: 'Bata todos os ingredientes no liquidificador e aproveite.',
        "img": "./img/receitas/Smoothie de Banana e Manteiga de Amendoim.jpg"
    },
    {
        nome: 'Burrito de Frango com Guacamole',
        ingredientes: ['150g de frango grelhado', '1 tortilla integral', '1/2 xícara de arroz integral', 'Feijão preto cozido', 'Guacamole (abacate, tomate, cebola, coentro)'],
        carboidratos: 50,
        proteina: 30,
        calorias: 500,
        gorduras: 18,
        modoPreparo: 'Monte o burrito com os ingredientes e adicione guacamole.',
        "img": "./img/receitas/Burrito de Frango com Guacamole.jpg"
    },
    {
        nome: 'Risoto de Cogumelos com Frango',
        ingredientes: ['150g de peito de frango cozido e desfiado', '1 xícara de arroz integral', 'Cogumelos variados', 'Caldo de galinha com baixo teor de gordura', 'Queijo parmesão ralado'],
        carboidratos: 45,
        proteina: 35,
        calorias: 520,
        gorduras: 15,
        modoPreparo: 'Prepare o risoto com frango, cogumelos e caldo de galinha.',
        "img": "./img/receitas/Risoto de Cogumelos com Frango.Jpeg"
    },
    {
        nome: 'Omelete de Queijo e Abacate',
        ingredientes: ['3 ovos', '30g de queijo cheddar ralado', '1/2 abacate fatiado', 'Tomate e cebola picados', 'Temperos a gosto'],
        carboidratos: 10,
        proteina: 25,
        calorias: 400,
        gorduras: 30,
        modoPreparo: 'Prepare a omelete com queijo e abacate, adicionando tomate e cebola.',
        "img": "./img/receitas/Omelete de Queijo e Abacate.jpg"
    },
    {
        nome: 'Hambúrguer de Quinoa e Feijão Preto',
        ingredientes: ['1 xícara de quinoa cozida', '1 xícara de feijão preto cozido e amassado', 'Temperos a gosto (cebola, alho, cominho)', 'Pão integral', 'Alface, tomate e cebola para montar o hambúrguer'],
        carboidratos: 50,
        proteina: 20,
        calorias: 480,
        gorduras: 15,
        modoPreparo: 'Prepare hambúrgueres com quinoa, feijão preto e temperos a gosto.',
        "img": "./img/receitas/Hambúrguer de Quinoa e Feijão Preto.jpg"
    },
    {
        nome: 'Lasanha de Berinjela com Carne Moída',
        ingredientes: ['Fatias de berinjela grelhada', '200g de carne moída magra com molho de tomate', 'Ricota ou queijo cottage', 'Queijo mussarela ralado', 'Molho de tomate'],
        carboidratos: 35,
        proteina: 30,
        calorias: 500,
        gorduras: 22,
        modoPreparo: 'Monte a lasanha intercalando camadas de berinjela, carne, queijo e molho.',
        "img": "./img/receitas/Lasanha de Berinjela com Carne Moída.jpg"
    },
];


function calcularReceita() {
    const calorias = parseFloat(document.getElementById('calorias').value);
    const carboidratos = parseFloat(document.getElementById('carboidratos').value);
    const proteina = parseFloat(document.getElementById('proteina').value);
    const gorduras = parseFloat(document.getElementById('gorduras').value);

    const usuarioInput = {
        calorias,
        carboidratos,
        proteina,
        gorduras
    };

    const receitaSugerida = calcularReceitaSugerida(usuarioInput);

    const receitaDiv = document.getElementById('receita');
    receitaDiv.innerHTML = `<div>
                                        <h2>RECEITA SUGESTIVA:</h2>
                                        <h3>${receitaSugerida.nome}</h3>
                                        <p>${formatarIngredientes(receitaSugerida.ingredientes)}</p>
                                        <p>${receitaSugerida.modoPreparo}</p>
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <img class="img-fluid rounded border border-danger img-receita-style" id="img-receita" src="" alt="">
                                        </div>
                                    `;

    let url_img = receitaSugerida.img
    let img_area = document.getElementById("img-receita")
    img_area.src = url_img;
}

function calcularReceitaSugerida(usuario) {
    let menorDistancia = Number.MAX_VALUE;
    let receitaSugerida = null;

    for (const receita of receitas) {
        const distancia = calcularDistancia(usuario, receita);
        if (distancia < menorDistancia) {
            menorDistancia = distancia;
            receitaSugerida = receita;
        }
    }

    return receitaSugerida;
}

function calcularDistancia(usuario, receita) {
    const diferencaCalorias = Math.abs(usuario.calorias - receita.calorias);
    const diferencaCarboidratos = Math.abs(usuario.carboidratos - receita.carboidratos);
    const diferencaProteina = Math.abs(usuario.proteina - receita.proteina);
    const diferencaGorduras = Math.abs(usuario.gorduras - receita.gorduras);

    return Math.sqrt(
        Math.pow(diferencaCalorias, 2) +
        Math.pow(diferencaCarboidratos, 2) +
        Math.pow(diferencaProteina, 2) +
        Math.pow(diferencaGorduras, 2)
    );
}

function formatarIngredientes(ingredientes) {
    const listaIngredientes = ingredientes.map(item => `<li>${item}</li>`).join('');
    return `<ul>${listaIngredientes}</ul>`;
}