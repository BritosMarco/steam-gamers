<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

> API SteamGames criada como `Projeto de Avaliação Final` do curso de Back End Noje.Js Módulo IV https://blueedtech.com.br/, utilizando a linguagem de programação JavaScript (TypeScript) e o banco de dados PostreeSQL. Nessa API eu crio um CRUD completo com Role de usurários ADMIN e USER, com rotas protegidas por Guards, autenticações JWT e log de usuários.

Para utilizar o projeto faça o dowload do arquivo zipado, ou faça o clone em seu computador utilizando o Git. Execute o comando `npm i` dentro da pasta do projeto em seu computador(a pasta que contém o arquivo package.json), para baixar as dependencias do projeto.

## Executando o projeto

_Essa API utiliza o PostgreeSql como banco de dados e o TypeORM, então antes de testar a API certifique se você possui o PostgreeSql instalado em seu computador(https://www.postgresql.org/download/)._

Agora você pode executar o projeto:

- Para executar o projeto com o nodemon, digite no terminal:

```bash
npm run start:dev
```

- Para executar o projeto com o node, digite no terminal:

```bash
npm start
```

## Testando a API

Você pode utilizar as ferramentas:

- Postman
- Insomnia
- Thunder Client (plugin no vsCode)

Exemplos de URLs:

- Essa é a URL de teste padrão: http://localhost:3000/games
- Atenção, é necessário que o usuário esteja logado para conseguir acessar as rotas e aulgas rotas estão disponiveis paenas para Usuários ADMIN.
- Para buscar por ID, Editar ou Apagar, insira o ID na URL: http://localhost:3000/games/613fdaa4c25e7d70de41dd5c
- Para fazer uma busca com query string, esse é um exemplo de URL: http://localhost:3000/personagens/filter?nome=Luke Skywalker

> Nesse site você consegue encontrar informações de personagens para testar os end-points: https://swapi.dev/api/people/

Infraestrutura:

```NodeJs
{
  Back End: TypeORM, TypeScript, NestJs
  Persistência: PostgreeSQL
  Testes: Jest
  Documentação: Compodoc, Swagger
  Ferramentas: Insomnia, Docker
}
```

Obrigado, volte sempre!
