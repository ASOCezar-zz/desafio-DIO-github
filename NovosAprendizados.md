# Novos Aprendizados durante o Curso de Github da Dio

-----------

## Criando Chaves SSH em uma máquina Linux:

 - ssh-keygen -t ed25519 -C <Email vinculado à conta do github>
 - cat <Arquivo criado com a chave publica (.pub)>
 - Adicionar a nova chave no github Web
 - (Opcional) Declara user.email e user.name:
    - git config user.name <name>
    - git config user.email <email>

## Comandos importantes do Git:

 - git init -> Comando para iniciar um repositório local dentro de algum diretório
 - git add . / git add * -> Comando para colocar em estado staged as mudanças feitas no diretório ou arquivo
 - git status -> Verifica o estado (ciclo de vida) dos arquivos presentes dentro de um repositório git já iniciado (unmodified, modified, staged)
 - git commit -m <Mensagem> -> Comando para adicionar uma descrição às mudanças feitas em um repositório
 - git push origin (main ou master) -> Comando para enviar a repositórios remotos os arquivos já commitados
 - git clone <endereço do repositório ou SSH> -> Comando para fazer uma cópia de algum repositório remoto em seu repositório local
 - git add origin (main ou master) -> Adiciona um repositório local a um repositório remoto já criado, fazendo um link entre eles
 - git pull -> Usado quando a versão presente em um repositório local está desatualizada em comparação com a versão do repositório remoto, faz com que as alterações feitas sejam copiadas para o repositório local, dando a oportunidade de analisar as alterações e resolver possíveis conflitos de merge
