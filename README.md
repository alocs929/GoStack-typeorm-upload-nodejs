![Bootcamp](https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67)

# Resolução do [DESAFIO 06](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-fundamentos-nodejs) do Bootcamp GoStack 2020.

### Dentre os assuntos ensinados para a realização do desafio estão:

- ## Banco de Dados
    - Docker
    - TypeORM
    - Migrations
    - Criptografia de senha
- ## JWT (JSON Web Tokens)
    - Conceitos JWT
    - Validação de credencias
    - Geração de Tokens
    - Rotas Autenticadas
- ## Uploads de Arquvos
    - Imagens
    - Atualizção
    - Servindo arquivos de forma estática
- ## Exceções
    - Classe de Erros

&nbsp;
# Este projeto foi criado/testado com:
    -yarn -v1.x.x
    -Nodejs -v12.x.x
        -TypeScript
    - Docker 19.03.8
        - Docker Image postgres
 _O não uso desses requisitos pode atrapalhar a execução do projeto._
&nbsp;
## **Para testar o projeto:**
&nbsp;
**1. Clone o Repositorio**
```sh
$ git clone https://github.com/alocs929/GoStack-typeorm-upload-nodejs.git
```

**2. Inicie o yarn no diretório "GoStack-fundamentos-do-nodejs"**
```sh
$ yarn
```
Este comando vai dar um stat no projeto baixando as dependências faltantes e criando a pasta node_modules.
**3. Inicie a Docker Image Postgres**
```sh
$ docker start <<CONTAINER ID>>
```
Não esqueça de configurar a porta que instalou o postgres e o acesso ao banco de dados em 'ormconfig.json'

**4. Start o projeto**
```sh
$ yarn dev:server
```
- **3.1 Para iniciar em modo de teste use**
```sh
$ yarn test
```
&nbsp;

[![MeuGit](https://img.shields.io/badge/All-Projects-blue)](https://github.com/alocs929?tab=repositories)  [![Linkedin](https://img.shields.io/badge/My-Linkedin-blue)](https://www.linkedin.com/in/fbrunormartins/)
> Bruno Martins
