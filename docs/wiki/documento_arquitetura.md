## Histórico de Versões
| Versão  |  Data  | Autor  |  Descrição  |
| ------------------- | ------------------- | ------------------- | ------------------- |
|  1.0 |  26/02/2020 | Ciro Costa, Gabriel Luiz |  Criação documento de arquitetura |
|  1.1 |  05/03/2021 | Guilherme Rogelin, Erick |  Adição de tópicos e correção



## Sumário
1.  **Introdução**
- 1.1 Finalidade
- 1.2 Escopo
- 1.3 Definições, Acrônimos e Abreviações
- 1.4 Visão Geral
2. **Representação Arquitetural**
- 2.1 Diagrama de Relações
- 2.2 Representação dos Serviços
- 2.2.1 Frontend
- 2.2.2 Backend
- 2.3 Tecnologias
- 2.3.1 Angular
- 2.3.2 Node.js
- 2.3.3 PostgreSQL
- 2.3.4 Docker
- 2.3.5 Docker Compose
3. **Metas e Restrições da Arquiteura**
- 3.1 Metas
- 3.2 Restrições Tecnológicas
4. **Visão de Casos de Uso**
- 4.1. Realização de Casos de Uso
5. Visão Lógica
- 5.1. Visão Geral
- 5.2. Pacotes de Design Significativos do Ponto de Vista da Arquitetura
- 5.3. Visão da Implantação
- 5.3.1 Frontend
- 5.3.2 Backend
6. Tamanho e Desempenho
7. Qualidade
- 7.1 Precisão
- 7.2 Confiabilidade
- 7.3 Eficiência
- 7.4 Integridade
- 7.5 Usabilidade
- 7.6 Manutenibilidade
- 7.7 Testabilidade
- 7.8 Flexibilidade
- 7.9 Portabilidade

## 1. Introdução

### 1.1 Finalidade
Este documento tem como finalidade fornecer uma visão geral da arquitetura do e-vacina, utilizando-se de diversas visões arquiteturais a fim de facilitar o entendimento dos processos e funcionamento de todo o sistema. Tem também como objetivo transmitir as decisões arquiteturais significativas tomadas em relação ao mesmo.

### 1.2 Escopo
 Através desse documento, é possível obter um melhor entendimento da arquitetura do e-vacina, permitindo ao leitor compreender o funcionamento de seu sistema, como também a abordagem utilizada para o seu desenvolvimento.

### 1.3 Definições, Acrônimos e Abreviações

Abreviação | Significado
---------- | -----------
UNB        |  Universidade de Brasília
FGA        |	Faculdade do Gama
MDS        |	Métodos de Desenvolvimento de Software
SDK        |  Software Development Kit

###  1.4 Visão Geral
São apresentados nesse documento os detalhes arquiteturais de como o sistema deverá se comportar em diferentes processos e informações acerca das tecnologias implantadas.
## 2. Representação Arquitetural
###  2.1 Diagrama de Relações
###  2.2 Representação dos Serviços
#### 2.2.1 Frontend
 Frontend do e-vacina é responsavel por toda a interação com o usuário. Ele apresenta uma interface gráfica que habilita o usuário a usar todas as funções do sistema.

Interagindo com o Frontend o usuário terá acesso ao núcleo das funcionalidades do e-vacina, sendo elas principalmente: checar dados de vacinas, checar caderno de vacinação, entrar e criar usuarios, marcar vacinas tomadas, ver vacinas tomadas. 


#### 2.2.2 Backend
  O Backend do e-vacina é o responsável pela funcionalidade das principais características do sistema. Através de requisições feitas pelo Frontend, o Backend irá realizar as pesquisas feitas pelo usuário, armazenar e editar contas de usuários, vacinas, caderno de vacinação e autenticação de usuário.

### 2.3 Tecnologias
 #### 2.3.1 Flutter
 Flutter é um kit de desenvolvimento de interface de usuário, de código aberto, criado pelo Google, que possibilita a criação de aplicativos compilados nativamente.
 #### 2.3.2 Node.js
 Node.js foi projetado para construir aplicativos de rede escalonáveis.O código de Node.js é baseado na arquitetura event-driven, capaz de entrada/saída assíncrona. Otimizado para ser corrido em tempo real tratando-se também de um ditribuído
 #### 2.3.3 MongoDB
 O MongoDB é um gerenciador de banco de dados não relacional que proporciona forte confiabilidade, robustez de recursos, flexibilidade e desempenho.
 #### 2.3.4 Docker
 Docker é uma plataforma, open-source para criação, execução e deploy de contêineres. Esses contêineres são pacotes da aplicação contendo suas dependências, bibliotecas e arquivos de configuração.
 #### 2.3.5 Docker Compose
 Docker Compose é um orquestrador de contêineres Docker. Com ele é possível gerenciar vários contêineres de uma única vez, definindo o comportamente de cada um deles.
## 3. Metas e Restrições da Arquiteura
### 3.1 Metas
O projeto possui como objetivo uma carteira de vacinação digital que irá facilitar o controle de vacinas da população geral.

### 3.2 Restrições Tecnológicas
Para o desenvolvimento do e-vacina serão utitilizados as seguintes tecnologias:

Flutter: SDK de frontend para a criação do app;

Dart: Linguagem para desenvolvimento com Flutter;

Node.js: Ambiente de execução server side;

JavaScript: Linguagem utilizada em conjunto com o Node.js;

MongoDB: Sistema de gerenciamento de banco de dados não relacional;

Docker: Ambiente de empacotamento da aplicação;

Docker Compose: Orquestrador de contêineres Docker.
## 4. Visão de Casos de Uso
### 4.1. Realização de Casos de Uso
## 5. Visão Lógica
###  5.1. Visão Geral
###  5.2. Pacotes de Design Significativos do Ponto de Vista da Arquitetura
###  5.3. Visão da Implantação
###  5.3.1 Frontend
###  5.3.2 Backend
## 6. Tamanho e Desempenho
## 7. Qualidade
### 7.1 Precisão
### 7.2 Confiabilidade
### 7.3 Eficiência
### 7.4 Integridade
### 7.5 Usabilidade
### 7.6 Manutenibilidade
### 7.7 Testabilidade
### 7.8 Flexibilidade
### 7.9 Portabilidade