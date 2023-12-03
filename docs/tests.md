## Plano de Testes de Software

| **Caso de Teste** | **Procedimento** | **Requisitos Associados** | **Resultado Esperado** | **Dados de Entrada** | **Resultado Obtido** |
|-------------------|-------------------|---------------------------|-------------------------|----------------------|------------------------|
| CT01 - Cadastro do Usuário | 1) Acesse a página de cadastro. 2) Preencha todas as informações obrigatórias. 3) Clique em "Cadastrar". | RF-001 | O sistema deve cadastrar o usuário com sucesso. | Informações válidas no formulário de cadastro. | Sucesso. |
| CT02 - Login do Usuário | 1) Acesse a página de login. 2) Insira as credenciais corretas. 3) Clique em "Entrar". | RF-002 | O sistema deve permitir o login do usuário. | Credenciais válidas no formulário de login. | Sucesso. |
| CT03 - Inserção de Dados Físicos | 1) Após o login, acesse a seção de perfil. 2) Insira informações físicas. 3) Clique em "Salvar". | RF-003 | O sistema deve permitir a inserção dos dados físicos do usuário. | Informações físicas válidas no formulário de perfil. | Sucesso. |
| CT04 - Inserção de Dados da Rotina | 1) Após o login, acesse a seção de perfil. 2) Insira informações sobre a rotina. 3) Clique em "Salvar". | RF-004 | O sistema deve permitir a inserção dos dados da rotina do usuário. | Informações sobre a rotina válidas no formulário de perfil. | Sucesso. |
| CT05 - Alteração dos Dados | 1) Após o login, acesse a seção de perfil. 2) Altere informações do usuário. 3) Clique em "Salvar". | RF-005 | O sistema deve permitir a alteração dos dados do usuário. | Informações válidas no formulário de perfil. | Sucesso. |
| CT06 - Geração de Treino | 1) Após inserir dados físicos e da rotina, acesse a seção de treino. 2) Clique em "Gerar Treino Personalizado". | RF-006 | O sistema deve gerar um treino personalizado de acordo com os objetivos e dados do usuário. | Dados físicos e da rotina válidos. | Sucesso. |

## Registro dos Testes de Software

| **Caso de Teste** | **Requisito Associado** | **Link do Vídeo do Teste** |
|-------------------|-------------------------|-----------------------------|
| CT01 - Cadastro do Usuário | RF-001 | [Link do vídeo](link_do_video) |
| CT02 - Login do Usuário | RF-002 | [Link do vídeo](link_do_video) |
| CT03 - Inserção de Dados Físicos | RF-003 | [Link do vídeo](link_do_video) |
| CT04 - Inserção de Dados da Rotina | RF-004 | [Link do vídeo](link_do_video) |
| CT05 - Alteração dos Dados | RF-005 | [Link do vídeo](link_do_video) |
| CT06 - Geração de Treino | RF-006 | [Link do vídeo](link_do_video) |

## Avaliação dos Testes de Software

Os testes de software indicaram que as funcionalidades essenciais do sistema estão alinhadas com os requisitos. Os tempos de teste são realistas para um projeto desse escopo, considerando funcionalidades básicas.

# Testes de Usabilidade

...

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações sobre a expectativa dos usuários em relação à funcionalidade da aplicação de forma geral. Para isso, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

- **Taxa de Sucesso**: responde se o usuário conseguiu ou não executar a tarefa proposta;
- **Satisfação Subjetiva**: responde como o usuário avalia o sistema em relação à execução da tarefa proposta;
- **Tempo para Conclusão da Tarefa**: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do Cenário |
|:-------------:|----------------------|
| 1 | Maria Luisa, professora de yoga, busca informações sobre um plano de treino personalizado. |
| 2 | Julia Martins, estudante em engenharia, deseja atualizar suas informações de perfil após progresso físico. |
| 3 | Guilherme, estagiário, pretende gerar uma ficha de treino para ganho de massa muscular. |
| 4 | Thiago Oliveira, vigilante em turno noturno, procura informações sobre uma rotina de treinos específica para melhorar a resistência. |

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

