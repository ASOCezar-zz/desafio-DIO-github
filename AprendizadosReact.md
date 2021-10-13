# Aprendizados ReactJS

## Histórias e Conceitos

React é uma biblioteca JavaScript para criar interfaces de usuário. Criada em 2011 por Jordan Walke pelo Facebook para resolver problemas de escalabilidade da plataforma.
Baseado em XHP.
Em 2012 foi utilizado no Instagram e em 2013 foi anunciada a liberação do projeto Open Source.
Em 2015 foi lançado **React Native** para realização de aplicações mobile e a **UWP** para criar aplicações desktop.

React trabalha com desenvolvimento componentizado que pode ser encaixado em qualquer projeto.

React é uma linguagem **declarativa**, ou seja, é focada em apresentar algo na interface do usuário.

## Framework x Lib

React não é considerado um framework por não trazer um apanhado de tecnologia em novas camadas e com um padrão pré-definido. O React por si só não é "suficiente" para lidar com um projeto como um todo. As vantagens de utilizar uma lib é a liberdade de utilizar outras ferramentas e padrões diferentes para atingir um resultado.
Alguns pontos contra é o tamanho do ecossistema React.

## Configuração React

 - Create React App: Traz uma aplicação padrão em React.
 - React Scripts:

 ```bash

 npm install react@version react-dom@version react-scripts@version

 ```
## JSX

JSX é uma linguagem de marcação criada para para poder elementos HTML com funções de JS dentro desses elementos. Não é necessário a utilização do JSX mas pode facilitar a leitura do código e sua renderização. 
O Browser não reconhece JSX e necessita de um transpilador como por exemplo o Babel.

## Renderização

O react-dom é quem faz a renderização no DOM do browser. O React utiliza o Virtual DOM, fazendo uma renderização virtual e altera apenas pequenas partes da DOM, agilizando alguns processos trazendo vantagem de performance.

## Components

A organização do React é feita através de arquivos com pequenas partes, chamados components.
Por ser uma linguagem que trabalha com programação funcional, é possível passar props para dentro de cada componente.


## Estado e Ciclo de Vida

Os components do React possuem um ciclo de vida:

 - Inicialização;
 - Montagem;
 - Atualização;
 - Desmontagem;

As props e estados dos componentes controlam a renderização e atualização do DOM.

## Webpack 4 + Babel

É um empacotador de módulos de aplicações JS.
Um Webpack precisa de:
 - Entrypoint: Ponto de entrada para buscar todos os módulos e dependências;
 - Output: Determina quais os bundlers que o Webpack emite;
 - Loader: Permite que o Webpack gerencie arquivos diferente dos JS;
 - Plugins: Utilizado para otimização de pacotes, minificação, injeção de scripts, entre outros;
 - Mode: Abordagem de configuração do Webpack. Por padrão vem com **production**, **development** ou **none**.
  - Production: traz otimizações internas;
  - Development: executa 3 plugins: UglifyJsPlugin, ModuleConcatenationPlugin e NoEmitOnErrorsPlugin;
  - None: Não passa nenhuma configuração padrão.

### Instalação

1. Criar webpack.config.js

```JavaScript

const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ];
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

```
2. comando npm i -D webpack webpack-cli
3. Adicionar script build no package json:

```JavaScript
"scripts" : {
  "build": "webpack --mode production",
  "dev": "webpack --mode development"
}
```
4. npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react
5. Criar o arquivo .babelrc

```JavaScript
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```
6. npm i -D html-webpack-plugin
7. 

```JavaScript

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ];
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
};

```
8. npm i -D webpack-dev-server
9. Adicionar o script

```JavaScript
"scripts" : {
  "build": "webpack --mode production",
  "dev": "webpack --mode development",
  "start": "webpack-dev-server"
}
```
## Instalação do ESLint

O ESLint é uma ferramenta para formatar e manter a padronização do código e é utilizado principalmente para desenvolvimento feitos por mais de uma pessoa.

```Bash
npm i -D eslint babel-eslint eslint-plugin-react eslint-watch
```
## Renderização Condicional

Com o React é possível controlar a renderização de acordo com um estado que for determinado.  