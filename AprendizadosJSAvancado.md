# Aprendizado Avançados em JavaScript

## Arrow Functions

Implementada no ES6 as arrow functions fazem um papel de funções anônimas, podendo ser utilizadas, sendo atribuídas a uma variável ou passando como parâmetro para outras funções. 
Se declarada a expressão da função em mesma linha o return dessa, fica implícito, ou caso a expressão estiver envolta em parênteses. Caso exista apenas um argumento, os parentêses podem ser omitidos.
As arrow functions não podem ser utilizadas como funções construtoras.
A característica de Hoisting não se aplicam às arrow functions, ou seja, só podem ser utilizadas depois de declaradas e atribuídas a alguma variável.
Dentro de um método, ao utilizar funções como setTimeout, muito se ocorriam confusões na utilização do contexto (this) do objeto, dado que funções como setTimeout consideram apenas o contexto global da aplicação. Para resolver, foi adicionado o método bind para fixar dentro de uma função setTimeout o contexto de bloco do objeto no qual o método está sendo declarado.
Depois da implementação das arrow functions como criadoras de métodos, o contexto referenciado por this dentro da utilização de funções como setTimeout, deixou de necessitar de funções bind, pois o contexto da arrow function será sempre a do bloco ao qual essa pertence (**contexto lexico**).

## Default Function Arguments

Ao não passar um parâmetro para uma função que exige a função deixava de ser executada corretamente. Uma das formas de lidar com isso era de declarar um operador lógico para receber um valor default para o argumento, contudo isso ainda gervava alguns erros dentro da função. A forma mais correta era comparar o argumento utilizando "typeof", tornando o código verboso.
Com o ES6, dentro dos parênteses do argumento da função é possível declarar os valores padrão dos argumentos.

### Lazy Evaluation

Uma função utilizada para gerar um valor randômico quando não receber argumentos dentro de uma função.

## Enhance Object Literals

No ES6, foi inserido um shorthand para impedir repetições quando o nome de uma variável e a propriedade de um objeto possuírem o mesmo nome. Além disso, os métodos deixam de precisar de uma declaração com "function". 

## Rest e Spread Operators

 - O rest operator (...) é utilizada dentro da lista de argumentos para trazer esses em formato de array, tornando possível utilizar funções e métodos de array para facilitar a manipulação e diminuir a verbosidade do código, além de ser possível de ser utilizado com arrow functions;
 - O spread operator é declarado da mesma maneira, mas faz o espalhamento do conteúdo de strings, arrays, objetos literais e objetos iteráveis. Utilizando com objetos literais, o spread operator só pode ser usado para construir novos objetos. Quuando utilizado para clonar objetos, o spread cria apenas "**Shallow Clones**", fazendo com que objetos dentro do objeto original (nested) sejam alterados mesmo quando apenas o clone for referenciado. 

 ## Destructuring

Torna possível declarar nomes e valores de variáveis de arrays e objetos de maneira menos verbosa. 
O Destructuring pode ser utilizado dentro de parâmetros das funções para facilitar a utilização dos valores que estão sendo passados.

## Symbols e Iterators

Os symbols são maneiras de gerar identificadores únicos de propriedades que não devem ser acessadas e/ou modificadas. Os Symbols possuem algumas propriedades descritas como Well Known Symbols, que tornam possível adicionar meta propriedades a um objeto. Por exemplo, ao adicionar uma propriedade [Symbol.iterator]() como chave de um objeto, isso o torna um objeto iterável (objeto com uma interface responsável por sua iteração).

**Iterable Object**

```JavaScript

const iterableObject = { 
  values: [1, 2, 3, 4],
  [Symbol.iterator]() {
    let i = 0;
    
    return {
      next: () => {
        i++;  
        
        return {
          value: this.values[i - 1],  
          done: i > this.values.length
        };
      }
    };
};

```

## Generators

Os generators são funções com pausa que retornam valores de maneira parecida com a forma dos Symbol.iterator. Para utilizá-lo basta declarar a função com um *, ao fazer isso, se torna necessário a utilização do next() para percorrer os valores. Os valores podem ser passados para dentro do generator atraves dos args da função next("Por aqui") e serem recebidos dentro utilizando yield.

```JavaScript

const iterableObject = { 
  values: [1, 2, 3, 4],
  *[Symbol.iterator]() {
    for(var i = 0; i < this.values.length, i++) {
      yield this.values[i];
    };
  }
};


for (let value of iterableObject) {
  console.log(value);
}

```

## Promises e Fetchs

### Callback e Promises

As funções de callback, originalmente eram utilizadas para realizar alguma ação após determinada tarefa assíncrona ser resolvida. Contudo, os métodos de callback geravam códigos grandes e com dificuldade de tratar erros. 
No ES6, foi implementada as Promises.
As Promises podem ter 3 estados: Pending, Fulfilled, Rejected. As promises são funções assíncronas, pois podem levar algum tempo para retornarem algum valor, seja Fulfilled ou Rejected. As promises podem ser encadeadas para serem realizadas uma após a outra.
Se possuir mais de uma promise, é possível resolver todas em paralelo, utilizando Promise.all(), passando o .then() logo depois. 
Caso queira resolver duas promises em paralelo mas retornar a que foi resolvida primeiro é possível utilizar o Promise.race().

### Fetch, Async/Await, Event Emitter

 - O Fetch é uma ferramenta para fazer requisições e resolver Promises. O Fetch retorna uma stream que pode ser convertida de maneira assíncrona para outros tipos de dados como JSON. Através do fetch é possível capturar apenas erros de Rede. Para tratar o erro de acordo com o Status de resposta da API ou Endpoint requisitado, é necessário fazer outros tipos de checagem. O Fetch torna possível utilizar outros métodos HTTP mas por padrão realiza o método GET.

 - O Async/Await é uma forma "importada" de outras linguagens implementada no ES7 que torna possível também a resolução de promises. Ao se utilizar o termo async na declaração de uma função ela passa a retornar Promises. O await é uma forma de aguardar que as promises sejam resolvidas antes de executar uma ação ou atribuição.

 - O event emitter é específico do Node para trabalhar com programação asíncrona. 

## Qualidade de Código e Testes

### TDD e BDD

Ao se referir a teste em programação podemos estar falando de diferentes ferramentas, como: 

 - Testes Automatizados:
  - Testes Unitários (testes das menores partes de um código);
  - Restes Integrados (testes de integração de partes do mesmo código);
  - Testes Funcionais/End-to-End (testes de integração de um sistema com outro sem levar em consideração as ferramentas sendo utilizadas, mais voltado para experiência do usuário);
 - Testes manuais e automatizados:
  - Testes de Usabilidade;
  - Testes de Aceitação do usuário;
  - Protótipos;
  - Testes Funcionais;
  - Exemplos;
  - Alpha e Beta;
  - Entre outros...
 - Ferramentas de Teste:
  - Testes de Carga e Perfomance;
  - Testes de Segurança;
  - Entre outros...

Os testes devem seguir uma pirâmide para garantir a qualidade do código, começando com os unitários, passando pelos integrados e chegando aos funcionais.

O **TDD** (Test Driven Development) é um dos pilares do Extreme Programming, e consiste em criar o teste antes de desenvolver o código. Nesse teste está presente a função que o serviço, função (elemento do código) deve possuir e desenvolver o código em cima das funções do teste. Ao final do desenvolvimento ocorre a refatoração do código.
As vantagens de aplicar o TDD são: feedback mais rápido, maior segurança do código em alterações, código mais limpo e direcionado para um fim e maior produtividade. 

O **BDD** (Behavior Driven Development) é uma complementação do TDD. É uma técnica de desenvolvimento ágil que visa integrar regras de negócio com a linguagem de programação. Ao descrever a funcionalidade do que está produzindo, através dos testes se torna possível documentar o código e descrever o comportamento daquele software.
As vantagens do BDD são: compartilhamento do conhecimento gerado através do desenvolvimento daquele software, documentação dinâmica e uma maior visão do produto como um todo.

### Mocha, Chai e Sinon

O **Mocha** é uma ferramenta utilizar para rodar os testes. Tem o foco em ser mais descritivo sobre o comportamento esperado daquela parte do código que está sendo testado. O Mocha pode ser utilizado tanto em Node quanto em Browser.

Links Úteis:
 - [Chai](https://www.chaijs.com/)
 - [Sinon](https://sinonjs.org/)
