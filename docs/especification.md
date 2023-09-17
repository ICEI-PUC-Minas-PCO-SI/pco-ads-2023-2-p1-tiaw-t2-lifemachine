# Especificações do Projeto
Abordaremos o desafio da gestão das rotinas de condicionamento físico na academia e apresentaremos uma solução centrada nos usuários. Utilizaremos técnicas como diagramas de personas e histórias de usuários para mapear suas necessidades. Nossa solução é um sistema integrado e adaptativo, impulsionado por algoritmos de aprendizado de máquina, que oferece suporte personalizado. Isso nos permite criar rotinas de treinamento personalizadas com base nos objetivos, tempo disponível e preferências individuais, destacando a importância de um sono adequado e alimentação saudável

Nossa abordagem é flexível, atendendo a uma ampla gama de perfis de usuários, com a máxima priorização da segurança dos dados. Continuaremos a aprimorar este projeto, empregando as tecnologias de HTML e CSS.
Além diso, utilizaremos o framework BootStrap para agilizar o desenvolvimento do Front-end.

Na área do "Back-end", adotaremos uma abordagem diferente, optando por desenvolver uma API para cobrir o papel do Back-end, fornecendo dados para o cliente. Para isso iremos utilizar das tecnologias do JavaScript. Quanto ao armazenamento, implementaremos o um sistema CRUD com JSON Server.

O versionamento do código será gerenciado por meio da tecnologia do Git, hospedado na plataforma GitHub, para facilitar a colaboração e o controle das alterações ao longo do projeto.

## Personas

1- *Maria Luisa* tem 20 anos, atualmente reside em São Paulo, professora de yoga, seu maior desafio de vida é equilibrar sua paixão pelo trabalho com o desejo de explorar novos lugares e culturas. Maria decidiu ser vegetariana aos 15 anos e se encantou. Tem como objetivo compartilhar os beneficios do yoga e da saude.

2- *Julia Martins* tem 22 anos, é uma estudante em engenharia. Sempre busca ser a melhor em sua turma e em alguns momentos acaba exagerando na quantidade de informaçoes obtidas durante o codidiano. Recentemente tem lidado com um insonia muito grande. Buscando melhorar sua qualidade de sono para ter resultados melhores em sua vida pessoal e academica , encontrou na musculaçao algo para cansar seu corpo e descansar sua mente. Assim tendo noites de sonos mais profundas e melhores.

3- *Guilherme* tem 18 anos, é estagiário em curso. Gosta muito de praticar esportes sendo o preferido o futebol. Admira um físico saudável por meio do treino e alimentação regrada. Pensa em desenvolver seu corpo para mellhorar a estética e auto estima. Está buscando um plano de treino que proporcione ganho de massa muscular.

4- *Thiago Oliveira* tem 29 anos, trabalha como vigilante em turno noturno e começou a estudar para ser policial. Está sedentário e precisa se exercitar para estar em forma para a prova prática que fará no futuro. Precisa de uma rotina de treinos específica para resitência e intruções de uma alimetação adequada e sono regulado. Está buscando formas de adquirir esses requisítos e acompanhamento sem presença de personal trainer, de forma online.

5- *Larissa* tem 32 anos, é professora de pedagogia ama sua profissão e dedica uma grande parte do seu tempo a sua profissão, é casada não tem filhos e além da sua demanda de tempo no seu trabalho tem suas tarefas e deveres de casa. Larrissa não se sente bem com seu peso e gostaria de perder alguns quilos.

6- *Matheus* tem 32 anos, trabalha como médico. Como um profissional da área, reconhece que ele mesmo precisa praticar atividades fisicas para assim manter sua saúde, contudo seu tempo é muito tomadopor sua profissão assim não tendo muito tempo para fazer exercícios. Está procurando uma forma de conseguir organizar seu tempo, criando assim uma rotina saudável e mantendo seu trabalho.

7- *Cristina* tem 57 anos, é uma mulher que está prester a se aposentar e recentemente teve problemas de saúde. Cristina nunca teve problemas ou sintomas mais graves, porém quando chegou a uma certa idade, começaram a aparecer problemas maiores como colesterol alto, hipertensão, doenças cardiovasculares e até alta probabilidade de desenvolver diabetes.Então resolveu procurar especialistas, e chegaram a conclusão que precisaria começar a fazer atividades fisicas, melhora do sono e uma melhor alimentação,para uma melhor qualidade de vida e uma saude mais lôngeva.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Ter uma ficha sugestiva de treino  | Ter o direcionamento de quais exercícios realizar conforme meu objetivo             |
|Usuário do sistema  | Aprovar ou não a ficha sugestiva de treino  | Escolher uma ficha que se adeque a minha realidade |
|Usuário do sistema  | Ter mais de uma opção de ficha de treino   | Escolher uma ficha que se adeque a minha realidade |
|Usuário do sistema  | Ter salvo minhas estatísticas de conclusão de treinos    | Acompanhar meu progresso nos treinos |
|Usuário do sistema  | Ter uma ficha sugestiva de dieta         |Ccriar uma alimentação balanceada e melhorar minha saúde|
|Usuário do sistema  | Ter uma ficha de horas de sono | Dormir melhor recuperando minhas energias |
|Usuário do sistema  | Inserir minha foto | Comparar a evolução estética usando a ferramenta |
|Usuário do sistema  | Poder alterar os dados pessoais | Manter atualizado meu perfil |
|Usuário do sistema  | Ter sugestão de receitas fitness | Ter ideias de refeições nutritivas e saudáveis |
|Usuário do sistema  | Registrar feedback dos resultados físicos obtidos | Poder regitrar avanços e observações para análises posteriores |
|Usuário do sistema  | Acompanhar estatísticas de peso | Analisar o andamento do processo |
|Usuário do sistema  | Acompanhar estatísticas de massa muscular |  Analisar o andamento do processo |
|Usuário do sistema  | Acompanhar estatísticas de qualidade de sono | Verificar se estou dormindo melhor |
|Usuário do sistema  | Visualizar mensagens motivacionais | Ter inspiração para seguir com o plano de melhorar a saúde |
|Usuário do sistema  | Entrar em contato com o suporte | Tirar dúvidas, registrar reclamções e/ou melhorias |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir cadastro do usuário | ALTA | Pedro |
|RF-002| Permitir login do usuário  | ALTA | Erick |
|RF-003| Permitir a inserção dos dados fisicos do usuário  | ALTA | Karol |
|RF-004| Permitir a inserção dos dados da rotina do usuário  | ALTA | Rodrigo |
|RF-005| Permitir ao usuario alterar os dados de sua rotina  | ALTA | Daniel |
|RF-006| Gerar treino personalizado de acordo com objetivo do usuario | ALTA | Caio |
|RF-007| Permitir o usuario escolher aprovar ficha   | MÉDIA | Caio |
|RF-008| Permitir o usuario escolher gerar outra ficha | MÉDIA | Daniel |
|RF-009| Gerar sugestao de calorias para consumo diário do usuario. | MÉDIA | Pedro |
|RF-010| Gerar sugestao de receitas fitness para o usuario.  | BAIXA | Erick | 
|RF-011| Gerar sugestao de macro-nutrientes para consumo diário do usuario.  | MÉDIA | Karol |
|RF-012| Gerar sugestao de horario de sono de acordo com a rotina do usuario.  | MÉDIA | Rodrigo |
|RF-013| Permitir o usuario inserir fotos da sua evoluçao.  | BAIXA | Rodrigo | 
|RF-014| Permitir o usuario cadastrar medidas corporais da sua evoluçao.  | BAIXA | Pedro |
|RF-015| Permitir o usuario registrar feedback sobre mudanças geradas pelo programa.  | BAIXA | Karol |
|RF-016| Gerar para o usuario estatisticas do seu desempenho fisico.  | MÉDIA | Daniel |
|RF-017| Exibir para o usuario mensagens motivacionais. | BAIXA | Caio |
|RF-018| Permitir que o usuario entre em contato com o suporte  | MÉDIA | Erick |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo | MÉDIA | 
|RNF-003| Garantir segurança dos usuarios com seus dados | ALTA | 
|RNF-004| Armazenar dados de login dos usuários | ALTA | 
|RNF-005| Armazenar dados da ficha e a sugestoes do aplicativo | MÉDIA| 
|RNF-006| Disponibilidade de acesso a qualquer momento  |  ALTA| 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| Não pode falta requisitos declarados                  |
|04| Não pode faltar nenhuma documentação                  |
|05| O usuário só poderá ter acesso as fichas se preencher os dados físicos |  

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
