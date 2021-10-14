# Aprendizado React Avançado

## Ciclo de Vida

 - Inicialização
 - Montagem
 - Atualização
 - Desmontagem

Assim que o componente é criado, ele passa pela inicialização, onde recebe as props e o estado. Durante a montagem ele recebe alguns métodos: componentWillMount (vai montar ou está montando), renderização e componentDidMount (está montado). Toda vez que atualizado o componente passa por outro ciclo de vida, sendo renderizado novamente. A última etapa é a desmontagem do componente e é nessa fase que é importante se atentar para a existência de Chunks.

## Hooks

Nova forma de escrever os ciclos de vida do React. Utiliza estados e propriedades de maneira mais simples do que o desenvolvimento com classes. 
 - useEffect: Recebe uma função como o primeiro parâmetro e um array de dependências como segundo parâmetro, indicando quando deve realizar novamente o ciclo de vida;
 - memo: Mantém estados e ajuda a evitar re-render desnecessário, principalmente quando as mudanças de estado não alteram a renderização do componente;
 - useState: Atualizada o estado de uma variável e pode ser utilizada juntamente com o useEffect para atualizar propriamente a aplicação.

## Context API

Gerencia estados globais da aplicação, criado utilizando o hook useContext, facilita o acesso a propriedades ou valores de variáveis globais sem a necessidade de prop drilling. Pode também ser utilizado em conjunto com o useReducer e realizar ações muito parecidas com o Redux.

## Fragments

Um fragment é uma maneira de exibir algo no front-end sem adicionar nós desnecessários ao DOM.

## Error Boundaries

Uma ferramenta que permite capturar e encapsular o erro, impedindo que um erro único em um componente pare toda a aplicação.

## Render Props

Se refere a uma técnica de compartilhar código ente componentes React passando uma prop cujo valor é uma função.
Um componente com uma render prop recebe uma função que retorna um elemento React e a invoca no momento de renderização não sendo necessário para o componente implementar uma lógica própria.

## TypeChecking

Faz a checagem de tipo quando não é possível implementar typescript ou outro tipo de tipagem.

## Refs e DOM

Com Refs é possível aceeasr a árvore de DOM e/ou elementos React. É utilizado para manipuulação de bibliotecas de terceiro. Gerenciamento de inputs, seleção de textos ou reprodução de mídias, animações imperativas.

## Dumb Components

 - Preocupa-se com a apresentação, apenas;
 - Recebe valores via Props;
 - Não possuem dependências com o restante da aplicação;
 - Não especificam como os dados são carregados ou sofrem mutação;
 - Recebem valores e callbacks exclusivamente via props;
 - Raramente possuem estado, quando precisam de estado é para controlar a interface e não dados do usuário;
 - São escritos na maioria das vezes como componentes funcionais.

## Smart Components

 - Preocupa-se com como as coisas vão funcionar;
 - Podem conter Smart e Dumb Components;
 - Providenciam dados e padrões de apresentação ou outros containeres;
 - Na maioria dos casos possuem estado e podem chamar outros fluxos do sistema.