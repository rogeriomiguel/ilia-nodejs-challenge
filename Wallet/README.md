# ília - Code Challenge NodeJS

**English**

### Before we start ⚠️

**Please is important have node v16, docker and docker-compose installed.**

### General Instructions:

To start you need to create the .env file, for that just use the .env.example. (Since this is a test the .env.example is already populated with the values to use.)

#### With docker:

For initialize the app with docker, use the command:

`docker-compose up`

#### Without docker:

To use the application without docker, it is necessary to have a database running locally or in the cloud and its connection information must be updated in the .env file.
With all done, just follow the steps:

`npm install`

and use the command

`npm run start`

for start the application.

You can access and test the documentation at:

[http://localhost:3001/swagger](http://localhost:3001/swagger)

You can see the tests coverage by running the command

`npm run test`

---

**Português**

### Antes de começar ⚠️

**Por favor, é necessario ter instalado node v16, docker e docker-compose.**

### Instruções gerais:

Para começar é preciso criar o arquivo .env, para isso basta usar o .env.example. (Como é um teste deixei o .env.example já populado com os valores a serem usados.)

#### Com docker:

Para utilizar o app utilizando docker basta usar o seguinte comando:

`docker-compose up`

#### Sem docker:

Para utilizar o app sem docker, é necessario ter um banco de dados rodando localmente ou em nuvem e suas informações de conexão devem ser atualizados no arquivo .env.

Com isso feito, siga os seguintes passos:

`npm install`

e use o comando

`npm run start`

para iniciar a aplicação.

É possivel acessar e testar a documentação em:

[http://localhost:3001/swagger](http://localhost:3001/swagger)

É possivel visualizar o tests coverage rodando o comando

`npm run test`