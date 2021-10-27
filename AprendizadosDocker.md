# Aprendizados Docker e Orquestração de Contêineres

## Conceitos

 - Container Image: Pacote com todas as dependências para criar e rodar nossa aplicações;
 - Dockerfile: Documento com as instruções para a criação dos containers;
 - Build: Criação dos containeres através da leitura do Dockerfile;
 - Container: instância de uma imagem representa a execução de uma aplicação, processo ou serviço;
 - Volumes: Armazenagem de arquivos e dados em disco para posteoriores evocações, sem perda de informações depois de desligar um container;
 - Tag: Nome que facilita encontrar os containeres;
 - Multi-stage build: Estágios de build que podem compilar uma aplicação;
 - Repository: Conjunto de imagens;
 - Registry: Serviço que provê o acesso do Docker a um repositório;
 - Docker Hub: Repositório mais popular do Docker;
 - Docker Compose: Ferramenta para a criação de multiplos containers com um só comando.

## Comandos

 - run: criação do container;
 - ps: listagem dos containeres;
 - info: informações dos containeres;
 - images: imagens utilizadas para criar o container;
 - exec: executar um bin do container;
 - stop: para a execução do container, sem destruí-lo;
 - start: inicia a execução de um container;
 - logs: mostra os logs do contianer;
 - inspect: ver todas as configurações que estão sendo utilizadas;
 - pull: baixar imagens de um repositório;
 - Commit: comentar alterações no contêiner;
 - tag: melhora o versionamento;
 - login, logout;
 - push: após buildar a imagem é possível compartilhar ou armazenar em um repo;
 - search: procurar uma imagem;
 - rm: remover o contêiner;
 - rmi: remove uma imagem;
 - import, export: exportar e importar um contêiner;
 - save, load: salvar ou ler imagens de um contêiner.

## Tipos de Rede

 - Bridge: É uma rede default do Docker, utilizado para comunicação entre os contêineres;
 - Host: Utiliza a mesma placa de rede do servidor físico;
 - Overlay: Comunicação entre contêineres presentes em servidores diferentes;
 - Macvlan: Permite atribuir um endereço MAC ao continaer, tornando ele visível como um dispositivo físico na rede;
 - None: Sem rede.

O modo **bridge** é composto por contêineres com IPs diferentes que se comunicam através dessa rede Bridge.

O **Host** utiliza a rede da máquina em que os contêineres estão rodando ou seja, do servidor.

Overlay pode ser utilizada com o Docker Swarn, colocando um cluster swarn que permitem a comunicação entre contêineres isolados.

## Tipos de Armazenamento

 - Volume: Disco virtual com o Docker Engine com total autonomia sobre ele.
 - Bind Mounts: Modo mais simples no qual é mapeado uma pasta do host para uma pasta dentro do contêiner.
 - tmpfs Mounts: é escrito em uma camada temporária de arquivos no contêiner.

 ```Bash
  docker volume create <nome_do_volume>
  docker volume ls
  docker volume inspect <nome_do_volume>
 ```