# *Reprograma-Projeto-Prático* #

###### Projeto prático da semana 7, com a professora Helena.

###### Projeto sobre criação de uma API Rest com Nodejs, com utilização do método GET. Para tal foi necessário seguir o passo-a-passo detalhado abaixo:


###### 1. Criação de pasta na qual iremos trabalhar nosso projeto; ######

###### 2. Utilizando git bash, ou prompt de comando, executar o comando: npm install --save express;
###### Express é um framework que nos permite utilizar métodos como app.use, criar e gerenciar rotas, modelos ######

###### 3. Execução do comando: npm init -y; ######
###### (É ele que irá gerar nosso package.json) ######

###### 4. Execução do comando: npm install --save-dev nodemon; ######
###### Nodemon faz um auto restart da aplicação toda vez que um projeto for modificado. Assim não há necessidade de fazê-lo, manualmente. Para que ele funcione é preciso incluir o comando abaixo no package.json 

###### "start": "nodemon ./server.js"

###### 5. *Estrutura de pastas:* ######

###### 6. File: server.js ->Configuração. Importamos módulo e definimos uma porta para que seja executado.
  
###### 7. File: app.js    ->Indicação das rotas, configuração de requisições. É aqui que vai toda a configuração do Banco de Dados e rotas.
 
###### 8. File: .gitignore->Vai conter apenas 'node_modules' dentro dele. Dessa forma não carregamos o pacote node_modules, que é gigante. ######
  
#####  9. *Folder: src:*
  
###### 10. Routes(definição das rotas e dos verbos. Nesse projeto utilizei apenas o verbo GET.)
          
###### 11. index.js ->Passa a versão que a API está, ou um balanceador para verificar se a API está no ar.
            
###### 12. tarefasRoute.js ->Usada para determinar como um app responde à uma request.
           
###### 13. Controllers ->Definição propriamente dita da ação.
          
###### 14. tarefasController.js ->recebe a chamada, busca a informação e a retorna.
          
###### 15. Models -> Dados armazenados, pode ser json, BD, xml.
          
###### 16. tarefas.json ->aqui temos as informações das tarefas listadas em um grande objeto. 
            
###### 17. postman -> ferramenta para realizarmos testes da API. Ela funciona como uma URL, na qual podemos utilizar os diferentes verbos e ver o retorno das requisições efetuadas. É possível salvar seus endpoints e exportar seu histórico.

#### *Endpoints:* ####
###### ('/', controller.get),

###### ('/concluido', controller.getConcluido),

###### ('/:id', controller.getById),

###### ('/:id/colaborador', controller.getNome)

###### Lembrando que foi utilizado apenas o verbo GET nesse exercício.

   
    
