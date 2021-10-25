# Aprendizados em Arquitetura Web

## Monolito

Uma única aplicação que tem acesso a banco de dados ou outras ferramentas externas que pode ser desenvolvida e formar aplicações mais complexas. Com o aumento da demanda, uma única aplicação pode não ser suficiente. 

### Prós

 - Baixa complexidade;
 - Monitoramento simplificado.

### Contras

 - Stack única;
 - Compartilhamento dos recursos;
 - Acoplamento;
 - Mais complexo a escalabilidade.

## Microserviços

Pode ser o formato mais caótico, é formato por serviços diferentes com funções específicas e pode ser integrado com linguagens e ferramentas diferentes. Pode ser escalado para dividir a quantidade de demanda recebida, assim como os monolitos. Um microserviço pode fazer contato com outro microserviço através de protocolos, tornando um pouco mais bagunçada a arquitetura.

Nessa arquitetura pode ser inserido um Message Broker para evitar as ligações diretas entre os serviços. O Message Broker desacopla totalmente os microserviços, fazendo com que nenhuma das etapas sejam quebradas no processo. No entanto, a plataforma fica refém do Message Broker.**

A arquitetura de microserviços pode ser mais parecida com pipelines. Passando as requisições do cliente por um Gerenciador que vai ativar os microserviços em sequência, e fazendo a comunicação necessária entre eles. O gerenciador de pipeline deve ter funções para tratar erros e as vezes desfazer um dos passos para diminuir inconsistências.***

### Prós

 - Stack Dinâmica;
 - Simples Escalabilidade;
 - Desacoplamento**;
 - Menor complexidade***;

### Contras
 - Acoplamento;
 - Monitoramento mais complexo;
 - Provisionamento mais complexo.
 - Plataforma inteira depende do gerenciador de pipeline***.

** Microserviços #2
*** Microserviços #3

## Gerenciamento de erros e volume de acesso

O gerenciamento de erros é mais complexo em processos assíncronos, como os de microserviços com Message Broker ou com o uso de Pipeline.

Para solucionar essa dificuldade é possível utilizar Dead Letter Queue ou Filas de re-tentativas. Essa alternativas criam filas que facilitam a visualização dos logs. Em sistemas de pipeline síncrono é necessário ter sistemas de rollback.

[Fundamentos de Arquitetura](https://github.com/jeffhsta/fundamentos_arquitetura)