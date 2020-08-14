<p align="center"><img src="https://github.com/steniooliv/nlw2/blob/master/web/src/assets/images/home.png" width=400 alt="Proffy">
<h1 align="center">Next Level Week 2 - Proffy<h1>
</p>
<p align="center">
  <a href="https://www.linkedin.com/in/steniooliv/" >
    <img alt="Stenio" src="https://img.shields.io/badge/steniooliv-in-%230072b1">
  </a>
</p>
  
## Sobre
*Na segunda edição da NLW criamos uma aplicação OpenSource de uma plataforma de estudo para conectar alunos e professores.*
*Ao acessar a aplicação temos a opção de ver os "proffys" disponíveis para dar aulas e podemos entrar em contato com eles.*
*Também temos a opção para que os "proffys" façam seu cadastro, com nome, matéria, disponibilidade de dia e horário, custo por hora, e uma biografica.*
*A aplicação foi desenvolvida em Typescript com Node, React e React Native.*

## Ferramentas Utilizadas
### Front-end
**React**, uma lib usada para criarmos nossa interface, com o React conseguimos trazer uma experiência de Single Page Application para o usuário, deixando a navegação muito mais agradável e ágil
**Axios**, uma ferramenta para auxiliar o nosso frond-end a consumir os dados da API

### Back-end
- **Express**, framework utilizado para criar nossa API
- **Knex**, é um mini-framework que nos possibilitar criar nosso banco de dados SQL atráves de Javascript
- **SQLite3**, utilizamos o SQLite para criar nossa database
- **Cors**, permite que nossa API seja acessada através de outro endereço
- **Insomnia**, utilizamos para testar nossas metodos POST e GET
  
### Mobile
- **React Native**, uma lib para deselvolver aplicativos Android e iOS de forma nativa
- **Expo**, framework de desenvolvimento mobile para acesso ágil à API's

## Pré Requisitos
- Git, utilize para clocar este repositório, baixe através de um gerenciador de pacotes ou clicando [aqui](https://git-scm.com/).
- Node, motor de desenvolvimento da aplicação, baixe através de um gerenciador de pacotes ou clicando [aqui](https://nodejs.org/en/).
Essa aplicação foi feita usando a versão 12.18.3.
- Expo, framework de desenvolvimento mobile, instale através do gerenciador de pacotes do próprio Node através do comando abaixo:

  ```npm install expo-cli --global```


## Utilização
- Atráves do terminal, faça o clone do repositório com o comando git abaixo:

  ```git clone https://github.com/steniooliv/nlw2.git nlw2```

### Executando a aplicação Web
```
# Acesse a pasta da aplicação web (frontend) 
$ cd web

# Instale as dependências necessárias
$ npm install

# Execute a aplicação
$ npm start

# Caso a aplicação não seja aberta no navegador acesse o endereço: http://localhost:3333
```

### Executando a API
```
# Acesse a pasta do servidor (backend) 
$ cd server

# Instale as dependências necessárias
$ npm install

# Crie um banco de dados limpo
$ npx knex:migrate

# Execute o servidor
$ npm start

# Caso a aplicação não seja aberta no navegador acesse o endereço: http://localhost:3333
# Mantenha o servidor rodando para ter acesso ao banco de dados tanto no frontend quanto no mobile
```

### Executando Aplicação Mobile
- Baixe o Expo para [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR) ou [iOS](https://apps.apple.com/br/app/expo-client/id982107779)

```
# Acesse a pasta mobile 
$ cd mobile

# Instale as dependências necessárias
$ npm install

# Execute o servidor
$ npm start

# Abra o Aplicativo Expo no seu smartphone e escaneie o QRCode para acessar a aplicação mobile no smartphone
```

## Updates
Esse documento será atualizado de acordo com o andamento da aplicação

## License
Este projeto é protegido sobre o MIT License - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes


