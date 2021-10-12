# JavaScript ES6 Essencial

O lançamento da linguagem javascript se deu em 1995 com o nome de Netscape, mais tarde, sendo alterado para Javascript, para muitos o nome Javascript se deu como uma estratégia de marketing para se utilizar do lançamento da linguagem Java que se dava na época.
Javascript foi criado por Brendan Eich.

## ECMAScript

O Netscape submeteu sua linguagem para padronização em um orgão chamado ECMA International e assim surge a ECMAScript, ou seja, é uma padronização da netscape que serviu de base para outras linguagens script como: Javascript, GScript e ActionScript.
Quem cuida do projeto é o Comite TC39, responsável pela evolução Javascript, é formado em grande parte pelos criadores de navegadores como Mozilla. Uma proposta de mudança é aceita ou negada através de votação dentro do comitê.

 - https://github.com/tc39/proposals -> Link com as atuais propostas;
 
## Conceitos

Javascript é uma linguagem interpretada, ou seja, o código é interpretado de cima para baixo e o resultado da interpretação é feita imediatamente, sem ter que transformar em algo diferente.
A tipagem do Javascript é fraca e dinâmica, ou seja é possível se utilizar alguns operadores com tipos diferentes de variáveis, como o operador "+", diferente linguagens como Python.
Na tipagem dinâmica, não é necessário adicionar o tipo da variável em sua declaração, se utilizando da inferência de tipo para reconhecer o tipo atribuído no momento do seu uso.
O typescript realiza a typagem da linguagem javascript, além de adicionar algumas funcionalidades à linguagem.

 - https://www.typescriptlang.org -> Documentação e outras funcionalidades para conhecer Typescript
 
### Funções de primeira classe e de ordem maior
 
Significa que a função pode ser atribuída a uma variável, atribuída a uma estrutura de dados e pode ser passada por argumentos, além de poder retornar outras funções.

### Closure

Capacidade de uma função lembrar do ambiente em que ela foi criada. No javascript há 3 tipos de escopo: global, de função e de bloco esse último adicionado no ES6.

### Currying

O Javascript permite o desenvolvimento em padrão funcional. O Currying é a capacidade de transformar uma função com n parâmetros em apenas uma função para cada parâmetro.

### Hoisting

Significa levantar ou suspender algo, isso ocorre no javascript em atribuição de variáveis e funções. Ou seja, ocorre o elevamento de funções e variáveis ao escopo ao qual essas pertencem. O Hoisting pode ser separado entre o de variaveis e de função, o hoisting de variável só eleva a criação da variável e não a sua atribuição (apesar de utilizar antes da decalaração a variável não retorna erro, mas uma falta de valor atribuido undefined), já a função é elevada como um todo. Apesar do Hoisting, é importante lembrar de não utilizar variáveis ou funções antes de definí-las.

### Imutabilidade 

Há dados que são criados que nunca mudam. São utilizadas variáveis para carregarem os valores alterados.

### Tipos e Variáveis

Há três formas de armazenar valores para serem utilizados novamente em Javascript: var, let, const. A declaração de var, não respeita o escopo de bloco, podendo "vazar" para o resto do código. 
Ao atribuir o valor de uma const a um objeto primitivo, ele não vai permitir que sejam feitas alterações de valores. Contudo, se a atribuição for um objeto ou um array ele permite que as propriedades sejam alteradas, uma vez que não sejam para onde a const aponta.

### Tipos e Variáveis
 - string;
 - boolean;
 - null;
 - undefined;
 - symbol;
 - object;
 - function;
 - array;
 
### Operadores 

Os operadores podem ser:
 - Aritméticos (+, -, **, /, (), %, ++, *);
 - Atribuição (=);
 - Comparação (==, ===, >=, <=, !==);
 - Condicional(condição?verdadeiro:falso);
 - Lógicos(&&, ||, !, !!);
 - Spread(...);
 
 Os tipos de Operadores podem ser: Binário, Unário e Ternário. O operador binário, é inserido entre dois valores. O unário vem antes ou depois de apenas um valor.
 
### Estruturas Condicionais

 - if
 - else
 - else if
 - switch
 - for
 - while
 - do...while
 - for...in/off
 - continue
 - break
 
----------------

## Orientação a Objetos

### Herança

A herança em Javascript é baseada em protótipos (prototype), ou seja uma variável que armazena as definições do nosso objeto. Toda variável tem o atributo __proto__ que aponta para o tipo da variável. "Baseado em um constructor, é criado um prototype e nessa variável se encontra o __proto__.

### Classes

Criado no ES6 e é uma simplificação da herança de prototótipos. É criada usando "class". A classe tem um método padrão chamado constructor que seta as chaves e/ou os valores a serem definidos na classe. O Javascript por padrão não possui modificadores de acesso (public ou private).

### Encapsulamento

Oculta detalhes do funcionamento interno de uma função.

### Static

Os métodos statics permitem que este seja chamado sem a necessidade de instaciar a classe antes.

----------------

## Design Patterns

São soluções generalistas para problemas recorrentes. Não se trata de um framework ou um código pronto, mas de uma definição de alto nível de como um problema comum pode ser resolvido, geralmente mantendo o codigo mais limpo e de facil manutenção.

### Mais Utilizados

 - Factory: Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new, são consideradas funções Factory.
 - Singleton: Cria uma instância de uma função construtora e a retorna todas as vezes que for necessária. (Bastante utilizada com JQuery).
 - Decorator: Uma função que recebe outra função e estende o seu comportamento.
 - Observer: Mantém um observer que é um array de subscribers. Os observers são ativados assim que ocorre alguma alteração e dispara seus subscribers.
 - Module: Possibilita uma melhor organização do código sem a necessidade de expor uma váriavel global.

----------------

## Manipulação e iteração de Arrays

Há 3 maneira de declarar arrays:
 - const arr = [1, 2, 3];
 - const arr = new Array(1, 2, 3);
 - const arr = Array.of(1, 2, 3);
 - const arr = Array();
 - const arr = Array.from(arrayLike); (Pode ser utilizado para converter node lists em Arrays JS. )
 
Métodos de array:
 - push(); (Adiciona um ou mais elementos na posição final do array e retorna o tamanho do array )
 - pop(); (Remove o ultimo elemento do array e retorna o elemento removido. ) 
 - unshift(); (Adiciona um elemento no inicio do array e retorna o tamanho do array )
 - shift(); (Remove o primeiro item do array e retorna o item removido )
 - concat(); (Concatena dois arrays existentes e retorna um novo array )
 - slice(); (Fatia o array e retorna essa fatia, mas não mexe na estrutura do array original )
 - splice(); (Altera o array passando novos elementos enquanto remove elementos antigos e retorna os itens removidos )

Iteração de Arrays:
 - forEach((item, index, arr) => {}); (Passa por cada item dentro de um array e realiza uma função indicada, não retorna nada por padrão )
 - map((item, index, arr) => {}); (Passa por cada item dentro de um array e realiza uma função indicada e retorna um novo array, sem mexer na estrtura do array padrão )
 - flat(); (Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada (depth) )
 - flatMap(); (Retorna um novo array e executa um flat de profundidade )
 - keys(); (Retorna um Array Iterator que contém as chaves para cada elemento do array )
 - values(); (Retorna um Array Iterator que contém os valores para cada elemento do array )
 - entries(); (Retorna o par chave/valor para cada elemento do array, criando um Iterator )
 - find(); (Lê o array e retorna o primeiro item que satisfaz uma condição )
 - findIndex(); (Retorna o index do priemiro item que satisfaz a condição )
 - filter(); (Retorna um array com todos os valores que satisfazem uma condição ) 
 - indexOf(); (Retorna o primeiro índice em que um item pode ser encontrado em um array )
 -lastIndexOf(); (Retorna o último índice em que um item pode ser encontrado em um array )
 - includes(); (Verifica a existência de um item dentro de um array e retorna true ou false )
 - some(); (Verifica se algum item dentro do array satisfaz uma condição e retorna true ou false )
 - sort(); (Ordena elementos de um array dada uma determinada condição )
 - reverse(); (Inverte os itens dentro do array )
 - join(); (Transforma um array em uma string com os itens separados por um delimitador )
 - reduce(); (Itera cada posição do array e retorna um novo tipo de dado de acordo com o que for determinado )
 
