## Histórico de Versões
| Versão  |  Data  | Autor  |  Descrição  |
| ------------------- | ------------------- | ------------------- | ------------------- |
|  1.0 |  25/02/2020 | Carlos Daniel, Paulo Vitor |  Documento de visão |
|  1.1 |  26/02/2020 | Carlos Daniel, Paulo Vitor  |  Requisitos funcionais e não funcionais |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |


## Sumário
1.  **Introdução**
- 1.1. Propósito do Documento de Requisitos
- 1.2. Público Alvo
2.  **Descrição Geral do Produto**
- 2.1. Situação Atual
- 2.2. Escopo
- 2.3. Atores
3.  **Requisitos**
- 3.1. Funcionais
- 3.2. Não Funcionais


### 1.  Introdução

**1.1  Propósito do Documento de Requisitos**  
Este documento tem como propósito apresentar o aplicativo e-Vacina: uma carteira digital de vacinão. Além disso, também serão apresentados seus requisitos funcionais e não-funcionais e diagramas. Por fim, descriação do produto, interfaces e compartamentos esperados do sistema.

**1.2  Público Alvo**  
Este documento destina-se aos stackholders (arquitetos de software, engenheiros de software, testadores e usuários classificados como usuários fornecedores).

### 2. Descrição Geral do Produto - Metodologia 5W2H

**O que é**

O e-Vacina é um aplicativo mobile, disponível nas plataformas Android e IOS, que servirá como uma representação digital da carteira de vacinação usado pelos brasileiros, semelhante ao e-Título usado nas últimas eleições.
Nesse aplicativo, o usúario podera fazer controle das doses das vacinas que ele tomou e acessar inforções sobre datas de vacinação, doenças previnidas e procedimentos.

**Para quem e onde**

O aplicativo foi desenvolvido por estudantes da Universiade de Brasília para todos os brasileiros.

**Por quê**

O e-Vacina é mais um passo para transformação digital do mundo. Uma carteira de vacinção digital trazerá integração e comodidade para o processo de imunização da população. 

**Quando utilizar**

O aplicativo será usado periodicamente em períodos de vacinção.

**Como será utilizada**

Inicialmente, o usuário deverá ser registrar informando seus dados: nome, cidade, idade, gênero, ect. 
A partir das informações fornecidas, o aplicativo fornecerá as vacinas que devem ser tomadas, com suas respectivas datas e razões. Ao tomar a vacina, o usuário atualiza a sua carteira digital.
Periodicamente o usuário receberá notificações alertando sobre datas de vacinação. 

**Quanto custará**

O aplicativo será gratuito.


**2.1  Situação Atual**

Atualmente, os brasileiro possuem a carteira de vacina física, que está sujeita a perdas, deterioração e rasuras, essa é a única forma oficial de fazer controle de vacinação individual. Algumas empresas com a Pfizer criaram aplicativos informativos sobre vacinas, porém esse não é direcionado ao público brasileiro. 

**2.2  Escopo**

| Num  |  Módulo  | Descrição |  
| ------------------- | ------------------- | ------------------- | 
|  1 |  Sistema mobile (responsivo.) |O sistema deve funcionar conectado à uma API e banco de dados e ser acessível na Play Store. 

**2.3 Atores** 
O sistema possui três tipos de atores, sendo eles:     
   - Usuário Administrador (Desenvolvedores);      
   - Usuário Cliente (Cidadão);
 

| Num  |  Ator  | Definição e Privilégio de Acesso e Segurança |  
| ------------------- | ------------------- | ------------------- | 
|  1 |  Usuário Administrador | Responsável pelo gerenciamento do sistema, atualizando e adicionando novas vacinas, a campanha de vacinação. |
|  2 |  Usuário Cliente | Interage com o sistema a partir do aplicativo, capaz de criar usuários-filhos e administrar as vacinas que cada um deve tomar.|

### 3. Requisitos

**3.1 Requisitos Funcionais**

|ID| Descrição| Prioridade|
| ------------------- | ------------------- | ------------------- |
|  RF 01  |  O sistema deve permitir ao usuário administrador cadastrar vacinas.|Essencial|
|  RF 02  |  O sistema deve permitir ao usuário administrador cadastrar campanhas de vacinas.|Essencial|
|  RF 03  |  O sistema deve permitir ao usuário cadastrar vacinas que já foram aplicadas, informando a data.|Essencial|
|  RF 04  |  O sistema deve permitir ao usuário visualizar informações sobre vacinas.|Essencial|
|  RF 05  |  O sistema deve notificar o usuário cliente de campanhas de vacinação e vacinas pendentes e fazer agendamentos|Essencial|
|  RF 06  |  O sistema deve permitir uma interface diferenciada ao usuário administrador.|Essencial|
|  RF 07  |  O sistema deve permitir uma interface específica ao usuário cliente.|Essencial|
|  RF 08  |  O sistema deve permitir que o usuário realize um cadastro pessoal.|Essencial|
|  RF 09  |  O sistema deve permitir que o usuário realize um cadastro de usuários-filhos.|Essencial|



**3.2 Requisitos Não Funcionais**

|ID| Descrição| Prioridade|
| ------------------- | ------------------- | ------------------- |
| RF 01| Os dados dos usuários clientes serão gravados no sistema de banco de dados utilizando criptografia de dados.| Segurança |
| RF 02| O sistema deve ser desenvolvido para mobile.| Interoperabilidade |
| RF 03| O sistema deve dispor de design responsivo.| Usabilidade |
| RF 04| O sistema deve utilizar o padrão UML 2.0 para a documentação.| Padrões |
| RF 05| O sistema deve utilizar a linguagem de programação Javascript e Dart.| Portabilidade |
| RF 06| A interface do sistema deve ser de fácil manipulação.| Usabilidade | 
| RF 07| Os dados do usuário cliente serão trafegados no sistema de banco de dados utilizando criptografia de dados. | Segurança |


