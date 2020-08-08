<p align="center"><img src="https://github.com/steniooliv/nlw2/blob/master/web/src/assets/images/home.png" width=400 alt="Proffy">
<h3 align="center">Next Level Week 2 - Proffy<h3>
</p>

## Sobre
*Na segunda edição da NLW criamos uma aplicaçãode uma plataforma de estudo para conectar alunos e professores.*
*Ao acessar a aplicação temos a opção de ver os "proffys" disponíveis para dar aulas e podemos entrar em contato com eles.*
*Também temos a opção para que os "proffys" façam seu cadastro, com nome, matéria, disponibilidade de dia e horário, custo por hora, e uma biografica.*

## Ferramentas Utilizadas
### Front-end
  - **React**, uma lib usada para criarmos nossa interface, com o React conseguimos trazer uma experiência de Single Page Application para o usuário, deixando a navegação muito mais agradável e ágil
  - **Axios**, uma ferramenta para auxiliar o nosso frond-end a consumir os dados da API

### Back-end
  - **Express**, framework utilizado para criar nossa API
  - **Knex**, é um mini-framework que nos possibilitar criar nosso banco de dados SQL atráves de Javascript
  - **SQLite3**, utilizamos o SQLite para criar nossa database
  - **Cors**, permite que nossa API seja acessada através de outro endereço
  - **Insomnia**, utilizamos para testar nossas metodos POST e GET

## Pré Requisitos
É necessário ter o Node instalado em seu computador, ele será nosso motor de desenvolvimento, vamos usar o Typescript ao invés do Javascript.
<br>
Para instalar o Node, você pode usar um gerenciador de pacotes ou fazer o download no próprio site clicando [aqui](https://nodejs.org/en/).
Essa aplicação foi feita usando a versão 12.18.3.

## Utilização
- Faça o download do repositório, e extraia o arquivo baixado
- Abra dois terminais, no caso do Windows use o Powershell, e navegue até pasta que você acabou de extrair
- Instale a aplicação entrando na pasta **web**, e execute o comando `npm install` para instalar todas as dependências
- Inicie a aplicação web como comando `npm start`
- Para instalar nossa API, com o segundo terminal, entre na pasta **server** e execute o comando `npm install`
- Inicie a API com o comando `npm start`

## Gerenciando o banco de dados
Criamos nosso banco de dados através de migrations, para utilizar um banco de dados limpo, exclua o arquivo **database.sqlite** dentro da pasta **server/src/database**.
<br>
No terminal digite o comando para criar um novo banco de dados: `npm run knex:migrate`

## Updates
Esse documento será atualizado de acordo com o andamento da aplicação

## License
Este projeto é protegido sobre o MIT License - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes


