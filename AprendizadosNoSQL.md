# Aprendizados em NoSQL

## Introdução

Desde 1970 a linguagem hegemônica da criação dos bancos de dados era a linguagem SQL para a criação de BD relacionais.

Em 1998 surge o primeiro banco de dados não-relacional ou NoSQL, mas só em 2009 houve uma conferência oficial para ocupar um espaço mais significativo.

O termo NoSQL não significa sem SQL mas "Não Apenas SQL". Inicialmente se imaginava que os bancos de dados não relacionais iriam ocupar o lugar dos bancos de dados relacionais. No entanto, isso não ocorreu e hoje em dia é comum se utilizar as duas tecnologias em conjunto.

## SQL x NotOnlySQL

### Escalabilidade Vertical x Escalabilidade Horizontal

A maioria dos bancos de dados relacionais possuem uma escalabilidade vertical, ou seja, aumentam a capacidade para um único recurso. Há um aumento de demanda de Hardware de servidores quando há o escalamento da aplicação.

Os bancos de dados NoSQL escalam de maneira horizontal, particionando os dados entre os nós. Permitindo maior desempenho da aplicação e uma escalabilidade infinita, principalmente no desenvolvimento em nuvem.

### Schemas

Enquanto os bancos de dados relacionais precisam de uma estrutura muito rígida e previamente registrada. Essa estrutura rígida permite uma maior segurança e consistência na criação das tabelas e no armazenamento dos dados. 

Já os bancos de dados não-relacionais permitem ausência completa ou quase completa de estrutura de dados a serem recebidos. As formas de consultas nos bancos de dados schemaless não se utilizam de uma linguagem, como o SQL.

### Performance

Os bancos de dados relacionais dependem da quantidade de armazenamento físico para uma boa performance, enquanto os não relacionais dependem do tamanho da rede de servidores (clusters) e da latência da rede para determinar a performance.

### Transações

No banco de dados SQL temos como transações (ACID):
 - Atomicidade: Ou uma transação é executada por completo ou não é executada;
 - Consistentência: Se uma transação for concluída o banco de dados vai estar exatamente em conformidade com os schemas pré-definidos;
 - Isolamento: Uma transação nunca interfere em outra transação;
 - Durabilidade: Depois de concluída uma transação, os dados jamais serão perdidos.

No banco de dados NoSQL não possuímos um conceito de transação, dado que eles abrem mão desse conceito para aumentar o enfoque em performance e usabilidade, por isso temos propriedades que chamam de BASE:
 - Basically Available: Prioridade de disponibilização de dados;
 - Soft-State: Não precisam ser consistente o tempo todo;
 - Eventually Consistent: Pode ser consistente em algum momento determinado.

 ### Características e Vantagens dos NoSQL:

 - Flexibilidade;
 - Escalabilidade;
 - Alta Performance.

## Bancos de dados NoSQL

[Ranking de Bancos de Dados mais Utilizados](https://db-engines.com/en/ranking)

O Banco de dados MongoDB é o banco de dados NoSQL mais utilizado dessa classe e utiliza um modelo orientado a documentos.

### Tipos de banco NoSQL:

 - **Document Store**: Permite redundância e inconsistência nos dados. É livre de schema, permitindo utilizar JSON, XML, BSON etc.


 - **Key-Value Store**: Banco de dados constituído de duas partes, a chave e o valor. Podem armazenar diversos tipos de dados e são identificados com uma chave única. Possuem bom desempenho em aplicações em nuvem porém possuem uma capacidade de busca limitada. Utilizados geralmente para cache. Os dados não são agrupados de nenhuma maneira e nem possui alguma forma de schema.
 
 - Criar dados:

 ```SQL
  SET nome_da_chave "Valor"
 ```

 - Consultar dados:

 ```SQL
  GET nome_da_chave
 ```

 - Passando tempo de expiração (em segundo) de uma chave:

 ```SQL
  SET nome_da_chave "Valor" EX 10
 ```

 - Verificando a existência de uma chave (retorna 1 ou 0):

 ```SQL
  EXISTS nome_da_chave
 ```

 - Adicionando um valor a uma lista já existente:

  ```SQL
  LPUSH nome_da_chave "Valor"
  ```

  - Acessando dados de uma lista:

  ```SQL
  LINDEX nome_da_chave index
  ```

  - Pegar um conjunto de valores de uma lista

  ```SQL
  LRANGE nome_da_chave index_inicial index_final
  ```

  - Identificar o tipo de valor dentro de uma chave:

  ```SQL
  TYPE nome_da_chave
  ```

  - Identifica o tempo de expiração de um dado (retorna -1 se não existir tempo de expiração):

  ```SQL
  TTL nome_da_chave
  ```

  - Removendo o tempo de expiração de um dado:

  ```SQL
  PERSIST nome_da_chave
  ```

 - Deletando dados:

 ```SQL
 DEL nome_da_chave
 ```
 
 - **Wide-Column Store**: Os bancos baseados em colunas ou famílias de colunas diferentemente do modelo SQL, que armazena seus dados em tabelas, esse bancos armazenam os dados em colunas independentes entre si. A hierárquia desse tipo de banco ocorre da seguinte maneira: key-space -> família de colunas (Row-Key) -> informações armazenadas em colunas -> linhas com os dados. Cada coluna possui uma chave, o valor e o timestamp (que possibilita consultar o momento da alteração de uma coluna específica). Os bancos de dados baseados em colunas são utilizados geralmente para aplicações com um maior número de consulta do que de inscrições de dados no banco e o uso adequado é a consulta através das chaves primárias.

 - Criar um Key-Space:

 ```Sql
  CREATE KEYSPACE (nome_do_keyspace) WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};
 ```

 - Selecionar uma Key-Space:

 ```Sql
  use nome_do_keyspace;
 ```

 - Criar uma Column Family:

 ```Sql
  CREATE COLUMNFAMILY nome_da_column_family (attr1 TEXT PRIMARY KEY, attr2 int);
 ``` 

 - Procurar todas as Column Families de um Key-Space

 ```Sql
  SELECT * FROM nome_do_keyspace;
 ``` 

  - Inserir dados em uma Column Family:

 ```Sql
  INSERT INTO nome_da_column_family (attr1, attr2) VALUES ("value1", 2);
 ``` 

  - Inserir dados em em formato JSON em uma Column Family:

 ```Sql
  INSERT INTO nome_da_column_family JSON '{"attr1": "value1"}';
 ``` 

  - Ver os dados de Timestamp de um dado em uma Column Family:

 ```Sql
  SELECT attr1, WRITETIME(attr1) FROM nome_da_column_family;
 ``` 

 - Ver os dados de uma Column Family com parametros de busca:

 ```Sql
  SELECT * FROM nome_da_column_family WHERE attr1 = "bob esponja";
 ```  

  - Ver os dados de uma Column Family em formato JSON com parametros de busca:

 ```Sql
  SELECT JSON * FROM nome_da_column_family WHERE attr1 = "bob esponja";
 ```  

 - Atualizar um dado:

 ```Sql
  UPDATE nome_da_column_family SET attr2="new_value" WHERE attr1 = "bob esponja";
 ``` 

 - Adicionar uma nova coluna a uma Column Family:

 ```Sql
  ALTER COLUMNFAMILY nome_da_column_family ADD nova_coluna tipo_do_registro;
 ``` 

 - Deletar um dado:

 ```Sql
  DELETE FROM nome_da_column_family WHERE attr1 = "bob esponja";
 ```
 


 - **Graph Store**: Os grafos, são estruturas matemáticas compostas por nós e vértices. Dentro do banco de dados, os nós representam os dados e os vértices os relacionamentos. Geralmente mais utilizado em redes sociais, detecção de fraudes, mecanismos de recomendação, sistemas de arquivo e games.

  - Criar nós: 

  ```SQL
  CREATE (:Label {attr1: "value1", attr2: 2});
  ```

  - Criar vértices: 

  ```SQL
  CREATE (:Label {attr1: "value1", attr2: 2}) -[:Label_do_Vertice]->(:Label :Label {attr1: "value1", attr2: 2}) ;
  ```

  - Deletar nós: 

  ```SQL
  MATCH (nome_de_apontamento:Label {attr_para_match: "value_para_match"}) DELETE nome_de_apontamento;
  ```

  - Deletar vértices: 

  ```SQL
  MATCH (nome_de_apontamento:Label {attr_para_match: "value_para_match"})-[nome_de_apontamento_do_nó:Label_do_Nó]-() DELETE nome_de_apontamento_do_nó;
  ```

  - Update de Campos:

  ```SQL
  MATCH (nome_de_apontamento:Label {attr_para_match: "value_para_match"}) SET nome_de_apontamento.attr_para_ser_alterado=valor
  ```

## MongoDB

### Introdução

O mongoDB é um banco de dados não relacional orientado a documentos de código aberto, de alta performance e schema-free. Suporta indices, facilitando consultas mais complexas. Nativamente pronto para fazer escalamento horizontal. Possui ferramenta de map-reduce que facilita em consulta e agrupamento de grandes quantidades de dados. Armazenamento GridFS. Rica linguagem de consulta.

O documento é a menor unidade de um banco MongoDB, o documento precisa ser autocontido e autodescritível. Mesmo sendo possível fazer relações com outros documentos, isso não é indicado, sendo assim podem ocorrer redundâncias no banco.

Os documentos ficam dentro de Collections.

**É indicado** para grande quantidades de dados, para momentos em que os dados não precisam ser necessariamente estruturados.

**Não é indicado** para dados que precisam ser relacionados de alguma maneira. Se necessário utilizar algumas propriedades ACID. Existem entidades de pagamento que não permitem uma conexão se a aplicação se utilizar de um BD não relacional.

### Instalação utilizando Docker

```yml
version: "3"

services:
  db:
    image: mongo
    container_name: db
    restart: always
    environment:
      - MONGO_INITDB_ROOT_USERNAME=dio
      - MONGO_INITDB_ROOT_PASSWORD=dio
    ports:
      - "27017:27017"
    volumes:
      - /Users/user/folder:/data/db
```

### Schema Design e Boas Práticas

Os dados podem ser relacionados de duas formas Embedding ou Referência.

O esquema Embedding é um schema design com documentos autocontidos e independentes, sem relacionamentos entre os documentos. É o design mais aconselhável, pois utiliza bem o conceito de atomicidade disponibilizado pelo banco que se restringe apenas ao próprio documento. Contudo, possui um limite no tamanho do documento de 16GB.

A referência são formas de fazer "relacionamentos" entre documentos através de atributos que fazem referência. Dentro do mongoDB não há Foreign Keys. Nesse design os documentos são menores e reduz a redundância e a duplicação de dados. A referência não deve ser utilizada para fazer querys dentro de um documento dado que isso incorreria em uma transferência de responsabilidade dessa atividade para o lado do client, reduzindo performance e afetando as conexões de rede. 

 - Em um relacionamento one-to-one é recomendado que se utilize o formato chave-valor.

 - Em relacionamentos one-to-few é recomendado que se utilize embedding.

 - Em relacionamentos one-to-many e many-to-many o mais indicado é o uso da referência dados que a presença de muitos subdocumentos pode interferir na usabilidade e performance do banco.

#### Link Útil

[Patterns e Casos de Uso](https://www.mongodb.com/blog/post/building-with-patterns-a-summary)

Algumas boas práticas no desenvolvimento com MongoDB inclui:
 - Evitar documentos muito grandes;
 - Usar nome e campos objetivos e curtos;
 - Analisar as queries utilizando explain();
 - Atualizar apenas campos alterados;
 - Evitar negações em queries;
 - Arrays dentros dos documentos não podem crescer sem limites.

### JSON vs BSON

É a forma que o MongoDB armazena as informações. É uma serialização codificada em binário de docimentos semelhantes a JSON. Contém extensões que permitem a representação de dados que não fazem parte das especificações do BSON, como Date e ObjectID.

 - Criando o banco ou entrando nele:

```Shell
use nome_do_banco 
```

 - Para a criação de uma collection existem duas formas: implicita e explicita. A criação explicita permite que sejam passados validadores dado que vem de um comando específico para sua criação, enquanto a forma implicita a criação é feita de acordo com uma verificação de existência ou não da collection referida.

```Shell
  > use nome_do_banco
  > db.createCollection("name", {capped: true, max: 2, size: 2})
```

 - Mostrar collections:

```Shell
  > show collections;
```

 - Inserir documentos em uma collection:

```Shell
  > db.nome_da_collection.insertOne({"name": "Teste 1"});
``` 

- Mostrar todos os documentos na collection:

```Shell
  > db.nome_da_collection.find({});
```

 - Salvar dados. Pode ser usado tanto para inserir dados novos quanto para atualizar informações:

```Shell
  > db.nome_da_collection.save(novo objeto ou id do objeto a ser salvo + os novos dados);
```

 - Atualizar um documento passando apenas as informações que queremos, para evitar o salvamento completo no momento do update:

```Shell
  > db.nome_da_collection.update({queries}, {$set :{informações a serem atualizadas}});
```

 - Atualizar todos os documentos que baterem com a query sem o operador set, os dados que não forem inseridos entre os que devem ser atualizados são excluídos:

```Shell
  > db.nome_da_collection.update({queries}, {$set :{informações a serem atualizadas}}, {multi: true});
```
ou

```Shell
  > db.nome_da_collection.updateMany({queries}, {$set :{informações a serem atualizadas}});
```

 - Fazer um query:

```Shell
  > db.nome_da_collection.find({query})
```

ou

```Shell
  > db.nome_da_collection.find({query}).limit(numero)
```

 - Operador in, passa um range de valores que esperamos que faça match:

```Shell
  > db.nome_da_collection.find({chave_query :{$in: [range]}})
```

 - Operador or, aceita mais de uma forma de retorno, utilizado para dados de campos diferentes:

```Shell
  > db.nome_da_collection.find({$or: [{chave: valor}, {chave2, valor2}]})
```
 - Operador lt(<), lte(<=), gt(>), gte(>=), nte(!=), eq(=):

```Shell
  > db.nome_da_collection.find({chave: {$lt: query}})
```

 - Deletar documentos: 

```Shell
  > db.nome_da_collection.deleteOne({query})
```

ou

```Shell
  > db.nome_da_collection.deleteMany({query})
```
### Performance e Índices

Os índices são informações que dão direções para achar determinada informação que está sendo buscada. Previne uma scan collection, facilitando as queries. 

```Shell
  > db.nome_da_collection.createIndex({o campo para ser indexado: (1 ou 0)}, {nome do índice})
```

### Agregações

A agregação é um procedimento de processamento de dados em várias etapas, onde o resultado da etapa anterior é utilizado na subsequente, com a finalidade de retornar resultados combinados. As agregações podem ser feitas com pipeline ou de propósito único (count e distinct).

 - $sum, $avg, $max e $min.
 - $match: aplica filtros na agregação.