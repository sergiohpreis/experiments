# Cross Iframe Test

Testando a comunicação entre iframes

### Executando o Teste

1 - Acesse a pasta `domain1`:  
`cd domain1`  
2 - Instale as dependências:  
`npm install`  
3 - Execute o seguinte comando: 
`npm run dev`
4 - Acesse a pasta `domain2`:  
`cd ../domain2`  
5 - Instale as dependências:  
`npm install`  
6 - Execute o seguinte comando:  
`npm run dev`  
7 - Acesse a URL: `http://localhost:3000`  

Na url `http://localhost:3000` temos o controlador, ele ira enviar uma mensagem para o iframe que chama a página `http://localhost:3001`, para isso, basta clicar no botão `Send Message` e a mensagem será enviada :)