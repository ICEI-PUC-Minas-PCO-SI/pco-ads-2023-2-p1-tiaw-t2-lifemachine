# Especificações do Projeto
O projeto pretende abordar o desafio da gestão das rotinas de condicionamento físico na academia e apresentaremos uma solução centrada nos usuários. Será utilizado técnicas como diagramas de personas e histórias de usuários para mapear suas necessidades. A solução é um sistema integrado e adaptativo, impulsionado por algoritmos de aprendizado de máquina, que oferece suporte personalizado. Isso permite criar rotinas de treinamento personalizadas com base nos objetivos, tempo disponível e preferências individuais, destacando a importância de um sono adequado e alimentação saudável

A abordagem é flexível, atendendo a uma ampla gama de perfis de usuários, com a máxima priorização da segurança dos dados. Com isso será necessário aprimorar este projeto, empregando as tecnologias de HTML e CSS.
Além diso, será presente também a tecnologia do framework BootStrap para agilizar o desenvolvimento do Front-end.

Na área do "Back-end", será adotada uma abordagem diferente, optando por desenvolver uma API para cobrir o papel do Back-end, fornecendo dados para o cliente. Para isso, seré feita a utilização das tecnologias do JavaScript. Quanto ao armazenamento, terá a adoção do sistema CRUD com JSON Server.

O versionamento do código será gerenciado por meio da tecnologia do Git, hospedado na plataforma GitHub, para facilitar a colaboração e o controle das alterações ao longo do projeto.

## Personas

1- *Maria Luisa* tem 20 anos, atualmente reside em São Paulo, professora de yoga, seu maior desafio de vida é equilibrar sua paixão pelo trabalho com o desejo de explorar novos lugares e culturas. Maria decidiu ser vegetariana aos 15 anos e se encantou. Tem como objetivo compartilhar os beneficios do yoga e da saude.

2- *Julia Martins* tem 22 anos, é uma estudante em engenharia. Sempre busca ser a melhor em sua turma e em alguns momentos acaba exagerando na quantidade de informaçoes obtidas durante o codidiano. Recentemente tem lidado com um insonia muito grande. Buscando melhorar sua qualidade de sono para ter resultados melhores em sua vida pessoal e academica , encontrou na musculaçao algo para cansar seu corpo e descansar sua mente. Assim tendo noites de sonos mais profundas e melhores.

3- *Guilherme* tem 18 anos, é estagiário em curso. Gosta muito de praticar esportes sendo o preferido o futebol. Admira um físico saudável por meio do treino e alimentação regrada. Pensa em desenvolver seu corpo para mellhorar a estética e auto estima. Está buscando um plano de treino que proporcione ganho de massa muscular.

4- *Thiago Oliveira* tem 29 anos, trabalha como vigilante em turno noturno e começou a estudar para ser policial. Está sedentário e precisa se exercitar para estar em forma para a prova prática que fará no futuro. Precisa de uma rotina de treinos específica para resitência e intruções de uma alimetação adequada e sono regulado. Está buscando formas de adquirir esses requisítos e acompanhamento sem presença de personal trainer, de forma online.

5- *Larissa* tem 32 anos, é professora de pedagogia ama sua profissão e dedica uma grande parte do seu tempo a sua profissão, é casada não tem filhos e além da sua demanda de tempo no seu trabalho tem suas tarefas e deveres de casa. Larrissa não se sente bem com seu peso e gostaria de perder alguns quilos.

6- *Matheus* tem 32 anos, trabalha como médico. Como um profissional da área, reconhece que ele mesmo precisa praticar atividades fisicas para assim manter sua saúde, contudo seu tempo é muito tomadopor sua profissão assim não tendo muito tempo para fazer exercícios. Está procurando uma forma de conseguir organizar seu tempo, criando assim uma rotina saudável e mantendo seu trabalho.

7- *Cristina* tem 57 anos, é uma mulher que está prester a se aposentar e recentemente teve problemas de saúde. Cristina nunca teve problemas ou sintomas mais graves, porém quando chegou a uma certa idade, começaram a aparecer problemas maiores como colesterol alto, hipertensão, doenças cardiovasculares e até alta probabilidade de desenvolver diabetes.Então resolveu procurar especialistas, e chegaram a conclusão que precisaria começar a fazer atividades fisicas, melhora do sono e uma melhor alimentação,para uma melhor qualidade de vida e uma saude mais lôngeva.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Ter uma ficha sugestiva de treino  | Ter o direcionamento de quais exercícios realizar conforme meu objetivo             |
|Usuário que Busca Personalização ou Flexibilidade  | Aprovar ou não a ficha sugestiva de treino  | Escolher uma ficha que se adeque a minha realidade |
|Usuário do sistema  | Ter mais de uma opção de ficha de treino   | Escolher uma ficha que se adeque a minha realidade |
|Usuário em busca de progresso visual  | Ter salvo minhas estatísticas de conclusão de treinos    | Acompanhar meu progresso nos treinos |
|Usuário do sistema  | Ter uma ficha sugestiva de dieta         |Criar uma alimentação balanceada e melhorar minha saúde|
|Usuário do sistema  | Ter uma ficha de horas de sono | Dormir melhor recuperando minhas energias |
|Usuário em busca de progresso visual | Inserir minha foto | Comparar a evolução estética usando a ferramenta |
|Usuário que Busca Personalização ou Flexibilidade  | Poder alterar os dados pessoais | Manter atualizado meu perfil |
|Usuário do sistema  | Ter sugestão de receitas fitness | Ter ideias de refeições nutritivas e saudáveis |
|Usuário em busca de progresso visual  | Registrar feedback dos resultados físicos obtidos | Poder regitrar avanços e observações para análises posteriores |
|Usuário do sistema  | Acompanhar estatísticas de peso | Analisar o andamento do processo |
|Usuário do sistema  | Acompanhar estatísticas de massa muscular |  Analisar o andamento do processo |
|Usuário do sistema  | Acompanhar estatísticas de qualidade de sono | Verificar se estou dormindo melhor |
|Usuário do sistema  | Visualizar mensagens motivacionais | Ter inspiração para seguir com o plano de melhorar a saúde |
|Usuário que Requer Suporte Adicional | Entrar em contato com o suporte | Tirar dúvidas, registrar reclamções e/ou melhorias |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| O sistema deve permitir cadastro do usuário | ALTA | Caio | 
|RF-002| O sistema deve permitir login do usuário  | ALTA | Caio | 
|RF-003| O sistema deve permitir a inserção dos dados fisicos do usuário  | ALTA | Caio | 
|RF-004| O sistema deve permitir a inserção dos dados da rotina do usuário  | ALTA | Caio |  
|RF-005| O sistema deve permitir ao usuario alterar os seus dados | ALTA | Daniel | 
|RF-006| O sistema deve gerar treino personalizado de acordo com objetivo do usuario | ALTA | Erick | 
|RF-007| O sistema deve permitir o usuario escolher gerar outra ficha | MÉDIA | Erick | 
|RF-008| O sistema deve gerar sugestao de receitas fitness para o usuario.  | BAIXA | Karol |  
|RF-009| O sistema deve gerar sugestao de horario de sono de acordo com a rotina do usuario.  | MÉDIA | Daniel | 
|RF-010| O sistema deve permitir o usuario alterar medidas corporais apos sua evoluçao.  | BAIXA | Daniel | 
|RF-011| O sistema deve permitir o usuario registrar feedback sobre mudanças geradas pelo programa.  | BAIXA | Pedro | 
|RF-012| O sistema deve gerar para o usuario estatisticas do seu desempenho fisico.  | MÉDIA | Pedro |  
|RF-013| O sistema deve exibir para o usuario mensagens motivacionais. | BAIXA | Pedro |  
|RF-014| O sistema deve permitir que o usuario entre em contato com o suporte  | MÉDIA | Erick |  

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo | MÉDIA | 
|RNF-003| Garantir segurança dos usuarios com seus dados | ALTA | 
|RNF-004| Armazenar dados de login dos usuários | ALTA | 
|RNF-005| Disponibilidade de acesso a qualquer momento  |  ALTA| 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Não pode falta requisitos declarados                  |
|04| Não pode faltar nenhuma documentação                  |
|05| O usuário só poderá ter acesso as fichas se preencher os dados físicos |  

