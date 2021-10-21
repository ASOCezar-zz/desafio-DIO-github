# Aprendizados MySQL e Modelo Relacional

## História

O modelo relacional surge na década de 60, proposto por Edgar Codd. A criação desse modelo tem o fim de organizar e estruturar os dados.

## O Modelo

Nesse modelo, as tabelas para armazenar dados são compostas de entidades, atributos e chaves. As chaves permitem o relacionamento entre duas ou mais tabelas.

Os dados possuem o conceito de atomicidade, que significa que os dados são únicos e divididos na menor parte possível para evitar descrições e dados muitos longos.

## Na Prática

 1. Criar o banco de dados através do SGBD que estiver utilizando;
 2. Rodar o comando:

```SQL
CREATE TABLE nome_da_tabela (
   id: NOT NULL PRIMARY KEY AUTO_INCREMENT,
   attr1: TIPO_DO_DADO NOT NULL,
   attr2: TIPO_DO_DADO,
)
```

 3. Para inserir dados na tabela:

```SQL
INSERT INTO nome_da_tabela (attr1, attr2) VALUES (value1, value2)
```
 
 4. Selecionar dados da tabela:

```SQL
  SELECT (campo a ser buscado ou * para todos os dados) FROM nome_da_tabela
```

 5. Atualizar os dados da tabela:

```SQL
  UPDATE nome_da_tabela SET (campo a ser atualizado)=valueATT WHERE identificador_único_do_dado_a_ser_alterado
```

 6. Deletar dados:

```SQL
  DELETE FROM nome_da_tabela WHERE identificador_único_do_dado_a_ser_deletado
```

 7. Ordernar dados:

```SQL
  SELECT * FROM nome_da_tabela ORDER BY campo_que_sera_ordenado (DESC opcional)
```

 8. Agrupamento de dados:

```SQL
  SELECT COUNT(id), * FROM nome_da_tabela GROUP BY coluna_para_agrupar
```

 - COUNT() faz a contagem dos dados dentro de um determinado agrupamento, retornando uma nova tabela com uma coluna para COUNT().

 9. Alterar estrutura da tabela:

```SQL
  ALTER TABLE nome_da_tabela TIPO_DE_ALTERAÇÃO tipo_de_dado_recebido AFTER coluna_já_existente
```