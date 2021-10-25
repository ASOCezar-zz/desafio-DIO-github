# Aprendizados em Web Services

## Conceito

Web Services são soluções para aplicações se comunicarem, independente de linguagem, software ou hardwares utilizados. Permitindo que aplicações que rodam em plataformas diferente se comuniquem.

Inicialmente foi criado para troca de mensagens utilizando XML.

Pode se dizer que Web Services são API's que se comunicam por meio de redes sobre o protocolo HTTP.

O Web Service serve como intermediador de uma aplicação com um banco externo. Incrementando a segurança de um sistema.

## SOAP - Simple Object Access Protocol

Protocolo baseado em XML para acessar serviços web por HTTP. Existe uma arquitetura que rege essa troca de mensagens.

Permite que aplicações feitas em linguagens diferentes se comuniquem utilizando XML.

Possui transporte genérico, que significa que ele pode ser utilizado por protocolos além do HTTP.

Criada pela W3C que é a padronizadora das requisições e dos serviços WEB.

Tem uma fácil separação de conteúdo, sem limitação de criação de tags.

O "SOAP Message" possui uma estrutura única que deve ser seguida:

 - SOAP Envelope: Tag pai, primeiro elemento do documento, utilizado para encapsular toda a mensagem SOAP;
   - SOAP Header: elemento que possui informações de atributos e matadados da requisição (tokens, autenticação, etc.).
   - SOAP Body: detalhes da mensagem.

```XML
  <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
    <soap:Header>
      <a:authentication xmlns:a="http://www.w3.org/soap/authentication">
        <a:username>Mauricio</a:username>
        <a:password>Reckziegel</a:password>
      </a:authentication>
    </soap:Header>
    <soap:Body>
      <m:MetodoEndereco xmlns:m="http://www.w3.org/endereco">
        <m:Cidade>São Paulo</m:Cidade>
        <m:Cep>03614-000</m:Cep>
      </m:MetodoEndereco>
    </soap:Body>
  </soap:Envelope>
```

## WSDL e XSD

**WSDL** é o acrônimo de Web Services Description Language. É um contrato definido pelo serviço, utilizado para descrever como o serviço funciona. É escrito utilizando XML. 

**XSD** ou XML Schema Definition é uma definição de esquema em formato XML e define a estrutura de dados que será validada no XML. Funciona como uma documentação de como deve ser montado o SOAP Message. 

## REST, API E JSON

**REST** o Representational State Transfer, é um estilo de arquitetura de software que define a implementação de um serviço de Web. Não é um protocolo, mas sim um estilo de arquitetura de software (design de arquitetura) que roda sobre HTTP. 

O padrão REST permite uma integração entre cliente e servidor em páginas web e aplicações. Utiliza os métodos HTTP (GET, POST, PUT, PATCH, DELETE) para definir o método da operação que está sendo utilizada. O retorno da operação é feita em formato de mensagem que pode ser em formatos XML, JSON, texto, etc. Quando uma aplicação web disponibilida um conjunto de rotinas e de padrões através de serviços web podemos chamar esse conjunto de API.

**API** ou Application Programming Interface é quando uma aplicação disponibiliza um serviço Web com conjuntos de rotinas documentados e disponibilizados por uma aplicação para que outras aplicações possam consumir funcionalidades.

**JSON** ou JavaScript Object Notation é uma formatação leve, que se utiliza de uma estrtutura de chave e valor.

```JSON
{
  "nome": "Os Vingadores",
  "ano_lancamento": "2019",
  "personagens": [
    {
      "nome": "Thanos",
    },
    {
      "nome": "Homem de Ferro",
    },
  ]
}
```

## Status Code

Códigos HTTP utilizados para indicar o estado da operação solicitada por um cliente:

 - **1xx** - Informativo;
 - **2xx** - Sucesso;
 - **3xx** - Redirecionamento;
 - **4xx** - Erro do cliente;
 - **5xx** - Erro do servidor;

[Status Codes Documentação](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)