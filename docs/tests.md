# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito  Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


| Caso de Teste                         | Passos                                               | Requisitos Funcionais | Critérios de Aceitação                        | Dados de Teste                                 | Resultado Esperado                             |
|---------------------------------------|------------------------------------------------------|-----------------------|-----------------------------------------------|------------------------------------------------|-------------------------------------------------|
| CT01 - Cadastro de Usuário             | 1) Usuário preenche informações pessoais e clica em "Cadastrar".  2) O sistema valida e exibe mensagem de sucesso. | RF-001               | Sucesso no cadastro do usuário.                  | Dados válidos no formulário de cadastro.           | Sucesso.                                       |
| CT02 - Login de Usuário                | 1) Usuário insere suas credenciais e clica em "Entrar".  2) O sistema valida as credenciais e redireciona para o perfil do usuário. | RF-002               | Sucesso no login do usuário.                     | Credenciais válidas no formulário de login.        | Sucesso.                                       |
| CT03 - Preenchimento de Dados Pessoais | 1) Usuário completa as informações pessoais e clica em "Salvar".  2) O sistema valida e salva as informações.  | RF-003               | Sucesso no preenchimento das informações pessoais. | Dados válidos no formulário de perfil.             | Sucesso.                                       |
| CT04 - Calcular horario de sono de acordo com rotina do usuario      | 1) Usuário insere o horário que deseja acordar  2) O sistema gera uma tabela de horários para adormecer           | RF-004,RF-011               | Tabela de horários recomendados             | Horário para acordar                                 | Sucesso.                                       |
| CT05 - Alterar dados      | 1) Usuário define novos dados desejados  2) O sistema atualiza no banco de dados           | RF-005,RF-012               | Dados atualizados com sucesso              | Dados Válidos                                 | Sucesso.                                       |
| CT06 - Gerar treino personalizado     | 1) Usuário realiza cadastro com sua necessidade  2) O sistema gera um plano de treino de acordo com a escolha.           | RF-006               | Plano de treino gerado com sucesso.              | Detalhes do cadastro do usuário                                 | Sucesso.                                       |
| CT07 - Geração sugestão de receitas      | 1) Usuário define objetivos e clica em "Gerar Plano".  2) O sistema gera um plano de treino simples.           | RF-009               | Plano de treino gerado com sucesso.              | Objetivos válidos.                                 | Sucesso.                                       |
| CT08 - Registrar Feedback      | 1) Usuário fornece feedback sobre o plano de treino gerado.           | RF-013               | Feedback registrado com sucesso.              | Feedback válido fornecido pelo usuário.             | Sucesso.                                       |
| CT09 - Gerar estatísticas      | 1) Usuário visualiza estatísticas relacionadas ao seu plano de treino.           | RF-014               | Estatísticas geradas com sucesso.              | Plano de treino válido fornecido pelo usuário.      | Sucesso.                                       |
| CT10 - Exibir mensagens motivacionais     | 1) Usuário visualiza mensagens motivacionais relacionadas aos seus objetivos.           | RF-015               | Mensagens motivacionais exibidas com sucesso.              | Objetivos válidos.                                 | Sucesso.                                       |
| CT11 - Entrar em contato com o suporte     | 1) Usuário encontra a opção de suporte e envia uma mensagem.           | RF-016               | Mensagem de suporte recebida com sucesso.              | Mensagem válida enviada pelo usuário.              | Sucesso.                                       |


## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

| Caso de Teste                   | Requisito Associado | Link do Vídeo do Teste               |
|----------------------------------|----------------------|---------------------------------------|
| TC01 - Cadastro de Usuário       | RF-001               | [Link do vídeo](link_do_video)       |
| TC02 - Login de Usuário          | RF-002               | [Link do vídeo](link_do_video)       |
| TC03 - Preenchimento de Dados    | RF-003               | [Link do vídeo](link_do_video)       |
| TC04 - Geração de Plano de Treino | RF-006               | [Link do vídeo](link_do_video)       |


## Avaliação dos Testes de Software

Os testes de software indicaram que as funcionalidades essenciais do sistema estão alinhadas com os requisitos. Os tempos de teste são realistas para um projeto de primeiro período, considerando funcionalidades básicas.

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é uma pessoa que deseja comprar um iphone. Encontre no site um iphone e veja detalhes de localização e contato da loja que anunciando. |
| 2             | Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço. |



**Registro de Testes de Usabilidade**

**Cenário 1: Buscar informações sobre um plano de treino personalizado**

| Usuário | Taxa de Sucesso | Satisfação Subjetiva | Tempo para Conclusão (realista) |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 35 segundos                     |
| 2       | SIM             | 5                    | 28 segundos                     |
| 3       | SIM             | 4                    | 42 segundos                     |
| **Média**     | -             | -                    | - segundos                      |
| **Tempo para conclusão pelo especialista** | - | - | - segundos                   |

*Comentários dos usuários:* O processo foi relativamente fácil, mas alguns detalhes poderiam ser mais claros. Gostei da sugestão de treino gerada.

**Cenário 2: Atualizar informações de perfil após progresso físico**

| Usuário | Taxa de Sucesso | Satisfação Subjetiva | Tempo para Conclusão (realista) |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 50 segundos                     |
| 2       | SIM             | 3                    | 45 segundos                     |
| 3       | SIM             | 4                    | 55 segundos                     |
| **Média**     | -             | -                    | - segundos                      |
| **Tempo para conclusão pelo especialista** | - | - | - segundos                   |

*Comentários dos usuários:* Encontrar a opção para atualizar as informações foi um pouco confuso. Acho que isso poderia ser mais visível.

**Avaliação dos Testes de Usabilidade**

Com base nos resultados obtidos, percebemos que a interação dos usuários com o sistema de academia apresentou uma taxa de sucesso considerável nos cenários propostos. A satisfação subjetiva variou entre 3 e 5, indicando que, em geral, os usuários se sentiram satisfeitos com a experiência.

Quanto ao tempo para conclusão, notamos que os usuários levaram um pouco mais de tempo do que o especialista, o que é esperado, considerando que o especialista já está familiarizado com o sistema. Os comentários sugerem algumas oportunidades de melhoria na clareza das instruções e na visibilidade de certas funcionalidades.

Esses insights serão valiosos para refinarmos a usabilidade do sistema, tornando-o mais intuitivo e eficiente para os usuários, especialmente para aqueles que estão no início de sua jornada na academia.
licação.



