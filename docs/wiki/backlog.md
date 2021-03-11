# Backlog do Produto

## Histórico de Revisão
|Autor|Mudanças|Data|Versão|
|--|--|--|--|
|[Carlos Daniel](https://github.com/luiz-herique), [Ciro Costa](https://github.com/ciro-c)|Criação do documento|11/03/21|1.0|


## Histórias de Usuário

O escopo do projeto foi delimitado a partir da necessidade de uma carteira de vacina digital brasileira de fácil acesso, que atualmente não é fornecida por nenhum orgão público brasileiro. 

As funcionalidades foram definidas a partir da carteira física e relações de responsabilidade que ocorre na vida real: parentes responsáveis pelas carteiras de vacinação das crianças. 

Épicos foram construídos a partir das funcionalidades, e foram subdividos em Features. Esses contêm as Histórias de Usuário. Elas foram priorizadas, [nesse documento](https://docs.google.com/document/d/1j_OG3vUqcLsIJDAmdovSgaHwpJkQ6zuU1OkI_Qh9vaU/edit?usp=sharing), utilizando o metódo MoSCoW(Must, Should, Could, Would).

O backlog sofrerá ajustes ao longo do andamento do projeto para que as necessidades sejam todas atendidas, sendo re-analisado a cada sprint para que se mantenha alinhado com a evolução da equipe.


## Épico 01 - Usuário

Este épico determina as histórias que formarão as funcionalidade relacionadas ao usuário, dentro dela são definidos parâmetros que um desenvolvedor deseja ter para possuir um bom gerenciamento de seus usuários. Também contém funcionalidades que um usuário deseja utilizar para realizar ações relativas as suas contas e interação geral com a aplicação.

### Feature 01 - CRUD de usuário

|ID|História de Usuário|Prioridade|
|--|--|--|
|US01|Eu, como desenvolvedor, desejo ser criar um usário na plataforma com os dados: email, telefone e senha|must|
|US02|Eu, como desenvolvedor desejo poder visualizar os dados de um usuário no banco, para que eu possa saber quem está cadastrado |must| 
|US03|Eu, como desenvolvedor, desejo criar uma rota para os meus usuários atualizarem seus dados|must|
|US04|Eu, como desenvolvedor, desejo criar uma rota para deletar usuários|must|
|US05|Eu, como usuário, desejo me cadastrar no e-Vacina para fazer o controle da minha vacinação e dos meus dependentes|must|
|US06|Eu, como usuário, desejo visualizar meus dados no e-Vacina|must| 
|US07|Eu, como usuário, desejo atualizar meu dados de acordo com minhas necessidades|must| 
|US08|Eu, como usuário, desejo ser capaz deletar os meus dados do banco, caso eu não queira usar mais o aplicativo|must|


### Feature 02 - CRUD das contas

|ID|História de Usuário|Prioridade|
|--|--|--|
|US09|Eu, como desenvolvedor, desejo ser criar uma conta na plataforma com os dados: Nome, cpf, Sexo, data de nascimento|must|
|US10|Eu, como desenvolvedor desejo poder visualizar os dados de uma conta no banco, para que eu possa saber quem está cadastrado |must| 
|US11|Eu, como desenvolvedor, desejo criar uma rota para os meus usuários atualizarem os dados das contas|must|
|US12|Eu, como desenvolvedor, desejo criar uma rota para deletar contas|must|
|US13|Eu, como usuário, desejo cadastrar uma conta no e-Vacina |must|
|US14|Eu, como usuário, desejo visualizar os dados de uma conta no e-Vacina|must| 
|US15|Eu, como usuário, desejo atualizar os dados de uma conta de acordo com minhas necessidades|must| 
|US16|Eu, como usuário, desejo ser capaz deletar os dados de uma conta do banco, caso eu não queira usar mais aquela conta|must|
|US17|Eu, como usuário, desejo ser capaz de ter mais de uma conta associada ao meu usuário|could|
|US18|Eu, como usuário, desejo ser capaz de mudar de contas associadas ao meu usuário|could|


## Épico 02 - Vacina

Este épico determina as histórias que formarão as funcionalidades relacionadas às vacinas, dentro dela são definidos os parâmetros que o desenvolvedor deseja ter para cadastrar vacinas. Também contém funcionalidades que um usuário deseja para fazer o controle das suas vacinas.

### Feature 03 - CRUD de Vacinas

|ID|História de Usuário|Prioridade|
|--|--|--|
|US19|Eu como desenvolvedor, desejo cadastrar vacinas no banco com os campos: nome, doencas_previnidas, contra_indicacoes, idade, doses, periocidade|Must|
|US20|Eu como desenvolvedor, desejo atualizar os dados das vacinas caso seja necessário|Must|
|US21|Eu, como desenvolvedor, desejo deletar vacinas do banco caso seja necessário|Must|
|US22|Eu, como desenvolvedor, desejo listar as vainas do banco de dados caso seja necessário|must|

### Feature 04 - Interação com as Vacinas

|ID|História de Usuário|Prioridade|
|--|--|--|
|US23|Eu como usuário, desejo vericar o número de doses das vacinas tomadas|Must|
|US24|Eu como usuário, desejo atualizar o número de doses tomadas de uma vacina|Must|
|US25|Eu como usuário, desejo vizualizar as informações das vacinas tomadas|Must|
|US26|Eu como usuário, desejo vizualizar as informações das vacinas|Must|

### Feature 05 - Carteira de Vacina

|ID|História de Usuário|Prioridade|
|--|--|--|
|US27|Eu como desenvolvedor, desejo criar uma rota para adicionar vacinas à carteira de vacinação|must|
|US28|Eu como desenvolvedor, desejo criar uma rota para excluir vacinas do cartão de vacinas|must|
|US29|Eu como usuário, desejo ser capaz de adicionar vacinas à carteira de vacina|must|
|US30|Eu como usuário, desejo ser capaz de visualizar as vacinas da carteira de vacina|must|
|US31|Eu como usuário, desejo ser capaz de excluir vacinas da carteria de vacina|must|
|US32|Eu como desenvolvedor, desejo associar as carteiras de vacinas a suas contas|should| 
|US33|Eu como usuário, desejo ser capaz de imprimir meu cartão de vacina|woud|
  

## Épico 03 - Sistema de Busca

Este épico determina as histórias que formarão as funcionalidades relacionadas ao sistema de busca, dentro dela são definidos os parâmetros para que desenvolvedor e o usuário posso buscar por vacinas específicas registradas no banco.

### Feature 06 - Busca por vacinas

|ID|História de Usuário|Prioridade|
|--|--|--|
|US34|Eu, como desenvolvedor, desejo criar uma rota para buscar vacinas de acordo os parâmetros de pesquisa|would| 
|US35|Eu, como usuário, desejo ser capaz de buscar por vacinas no aplicativo, por parâmetros|would|


## Épico 04 - UX/UI
Este épico determina as histórias que formarão as funcionalidades relacionadas à experiência do usuário e a interface do aplicativo, dentro dela são definidos os parâmetros para que usário tenha uma experiência otimizada do produto.

### Feature 07 - Notificações

|ID|História de Usuário|Prioridade|
|--|--|--|
|US36|Eu, como usuário, desejo receber notificações quando datas de vacinações se aproximarem|would|

### Feature 08 - Modo Escuro

|ID|História de Usuário|Prioridade|
|--|--|--|
|US37|Eu, como usuário, desejo ser capaz de usar o aplicativo no modo escuro|would|


