# Aprendizados em arquitetura de aplicações móveis e IoT

A Internet das Coisas ou IoT é uma rede de conexão em aparelhos eletrônicos com o fim de colocar sensores e coletar dados desses sensores para tomar decisões para tomar decisões e criar novas alternativas para situações cotidianas.

A privacidade e a segurança são desafios atuais da Internet das Coisas, dados que aparelhos mesmo dentro de casa estão coletando dados. Além disso, há uma grande quantidade de dispositivos que estão conectados à rede de maneira simultânea.

As empresas e as pessoas que utilizam IoT hoje, buscam gerar valor com os dados coletados.

## Arquitetra da internet das coisas e protocolo de comunicação

Para integrar um serviço que se utilize dos conceitos de IoT deve-se levar em consideração alguns atributos, como:
 - Baixo consumo de energia;
 - Rede de dados limitado;
 - Resiliência;
 - Segurança;
 - Customização;
 - Baixo custo.

O **MQTT** é o protocolo mais utilizado para sistemas IoT, convertendo e facilitando a comunicação entre diferentes sistemas. Ele trabalha com mensagens assíncronas. Nesse protocolo há uma separação entre o fornecedor e o client de uma mesma mensagem. Funciona através de um middleware. Uma mensagem é publicada através de um registro no seguinte formato: protocol://broker/user_id?/sensor/information_type.
