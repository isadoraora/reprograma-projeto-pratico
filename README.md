# reprograma-projeto-pratico
Projeto prático da semana 7, com a professora Helena.

Passo a passo do que foi feito para a criação da API solicitada:
-> Criação de pasta;
-> Execução do comando npm install --save express;
-> Execução do comando npm init -y; (ele que irá gerar nosso package.json)
-> Execução do comando npm install --save-dev nodemon;
-> Estrutura de pastas:
  File: server.js ->configuração. importamos módulo e definimos 1 porta para que seja executado.
  File: app.js    ->indicação das rotas, configuração de requisições. é aqui que vai tda configuração do BD e rotas.
  File: .gitignore->vai conter apenas node_modules dentro dele.
  Folder: src:
          Routes(definição das rotas e dos verbos)
            index.js ->passa a versão que a API está, ou 1 balanceador verificar se a API está no ar.
            tarefasRoute.js ->usada para determinar como 1 app responde à uma request.
           
          Controllers(definição propriamente dita da ação)
            tarefasController.js ->recebe a chamada, busca a informação e a retorna.
          
          Models(Dados armazenados)
            tarefas.json ->aqui temos as informações das tarefas listadas em um grande objeto. 
            
   Para que o nodemon funcione não esquecer de incluir a linha abaixo no file package.json:
    "start": "nodemon ./server.js"
