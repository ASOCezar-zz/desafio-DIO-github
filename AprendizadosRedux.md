# Aprendizados Redux

## Flux
Arquitetura criada pelo facebook para comunicação com os componentes.
Os motivos para a criação do Flux era a falta de sincronia dentro de elementos dentro da aplicação que afetavam diretamente a experiência do usuário dentro da plataforma.
O Flux, portanto, é um padrão para tráfego de dados de maneira unidirecional dentro de uma aplicação. Divididas em algumas etapas:
 - **Action**: Formata a mensagem a ser enviada, utilizada para formatar a mensagem a ser enviada para o estado.
 - **Dispatcher**: Sabe os callbacks para as diferentes Stores.
 - **Store**: Guarda e altera todos os estados.
 - **View**: Middleware entre a store e a tela. Recebe notificações da store e atualiza os dados na DOM.

## Redux

É uma implementação do Flux, foi criado por Dan Abramov e Andrew Clark. O esquema do Redux tem etapas como: React, action, store e reduce. Possui algumas alterações em comparação com as etapas do Flux dado que é direcionada para a utilização com React.
**3 Princípios**
 1. Single Source of Truth: Possui apenas uma store;
 2. State é Readonly;
 3. Mudanças de estados são feitas com pure functions: o estado é imutável.

 - **Action**: São como as do Flux, com a ressalva de não enviar a action em si para o dispatcher, apenas retornam um objeto de action formatado.
 - **Store**: É uma única store que cuuida de todas as árvores de estados. São os Reducers que descobre qual estado deve ser alterado.
 - **Reducers**: (Como o Redux não trabalha com dispatcher), simplifica e divide as funções da Store. A Store se conecta a uma root Reducer que divide os estados em pequenos reducers para definir como lidar com o estado. Os estados aqui são imutáveis.
 - **Views**: O React adiciona às views 3 novos conceitos: Provider, connect() e selector.

## Rest HTTP com React

### APIs HTTP

São APIs utilizada para fazer a conexão a um ou mais servidores HTTP.
Utiliza de métodos como: GET, POST, PUT, PATCH, UPDATE, DELETE;
Algumas das APIs HTTP são:
 - Fetch API: Própria do Browser. Oferece alternativas novas e da suporte a Service Works. A Fetch API não envia e nem recebe cookies e não rejeita estados HTTP.
 - Axios: É uma lib de HTTP API, cross-browser, possui a vantagem de trabalhar mesmo com navegadores mais antigos, possui funcionalidades de monitoração do progresso de uma request melhorando o tratamento de erros e a possibilidade de testes.

 ```Bash
npm i axios
 ```

 ```JavaScript
import axios from 'axios';

axios.get().then().catch();
 ```
### Imutabilidade e Redux

Possui 3 pilares:
 - Uma vez criada, uma coleção não pode ser alterada;
 - Novas coleções podem ser criadas a partir de uma coleção anterior e uma mutação (setter) como um conjunto;
 - Novas coleções são cridas usando o máximo possível da esturtura original, reduzindo a cópia e aumentando a performance.

Os benefícios da Imutabilidade são: Performance, Programação mais simples, Debugging mais simples.
Dentro do React a imutabilidade pode ser aplicada utilizando o array de dependências do hook useEffect.
 