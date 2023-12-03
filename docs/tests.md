# Testes

Neste projeto serão realizados dois tipos de testes:

- O **Teste de Software**, que utiliza uma abordagem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
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

Nesta seção, o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.

| Caso de Teste                         | Procedimento                                                                                                 | Requisito Associado | Resultado Esperado                              | Dados de Entrada                                   | Resultado Obtido                               |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------|----------------------|--------------------------------------------------|----------------------------------------------------|------------------------------------------------|
| CT01 - Cadastro de Usuário             | 1) Usuário preenche informações pessoais e clica em "Cadastrar".  2) O sistema valida e exibe mensagem de sucesso. | RF-001               | Sucesso no cadastro do usuário.                  | Dados válidos no formulário de cadastro.           | Sucesso.                                       |
| CT02 - Login de Usuário                | 1) Usuário insere suas credenciais e clica em "Entrar".  2) O sistema valida as credenciais e redireciona para o perfil do usuário. | RF-002               | Sucesso no login do usuário.                     | Credenciais válidas no formulário de login.        | Sucesso.                                       |
| CT03 - Preenchimento de Dados Pessoais | 1) Usuário completa as informações pessoais e clica em "Salvar".  2) O sistema valida e salva as informações.  | RF-003               | Sucesso no preenchimento das informações pessoais. | Dados válidos no formulário de perfil.             | Sucesso.                                       |
| CT04 - Geração de Plano de Treino      | 1) Usuário define objetivos e clica em "Gerar Plano".  2) O sistema gera um plano de treino simples.           | RF-006               | Plano de treino gerado com sucesso.              | Objetivos válidos.                                 | Sucesso.                                       |

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

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

## Cenários de Teste de Usabilidade

1. **Cadastro de Usuário**
   - **Objetivo do Teste:** Avaliar a facilidade de cadastro no sistema.
   - **Público Envolvido:** Participante representando o perfil de Maria Luisa.
   - **Plano de Teste:** O participante tentará realizar o cadastro, e a equipe observará a facilidade de uso durante o processo.

2. **Navegação Inicial**
   - **Objetivo do Teste:** Avaliar a facilidade de navegação e compreensão da estrutura inicial do sistema.
   - **Público Envolvido:** Participante representando o perfil de Guilherme.
   - **Plano de Teste:** O participante receberá a tarefa de explorar diferentes seções do sistema, e a equipe observará sua capacidade de navegar de forma intuitiva.

3. **Personalização do Perfil**
   - **Objetivo do Teste:** Avaliar a facilidade de personalização do perfil do usuário.
   - **Público Envolvido:** Participante representando o perfil de Julia Martins.
   - **Plano de Teste:** O participante tentará personalizar seu perfil, e a equipe observará a facilidade de ajustar preferências e dados pessoais.

4. **Geração de Plano de Treino**
   - **Objetivo do Teste:** Avaliar a facilidade de gerar um plano de treino personalizado.
   - **Público Envolvido:** Participante representando o perfil de Thiago Oliveira.
   - **Plano de Teste:** O participante seguirá os passos para gerar um plano de treino, e a equipe observará a facilidade de uso durante o processo.

## Registro dos Testes de Usabilidade

| Cenário de Teste         | Participante | Taxa de Sucesso | Satisfação Subjetiva |
|---------------------------|--------------|-----------------|-----------------------|
| Cadastro de Usuário       | Maria Luisa   | 100%            | 4 (Bom)               |
| Navegação Inicial         | Guilherme     | 100%            | 4 (Bom)               |
| Personalização do Perfil   | Julia Martins | 100%            | 4 (Bom)               |
| Geração de Plano de Treino | Thiago Oliveira | 100%          | 4 (Bom)               |

## Avaliação dos Testes de Usabilidade

Os testes de usabilidade indicaram que o sistema é intuitivo e fácil de usar para o público-alvo. Os participantes conseguiram realizar as tarefas propostas sem grandes dificuldades, evidenciando uma boa experiência de usuário. Quaisquer problemas de usabilidade identificados foram anotados para futuras melhorias no design e na experiência do usuário.
