## Projeto Housework Scheduler

  

#### feito para um exame para a empresa Eco Consultoria

###### Projeto utilizou as stacks MySql, Angular 15 e Php 8.1
##### principais dependencias do projeto: php 8.1, nodejs e composer, tenha certeza de que estas tecnologias estão instaladas no seu computador.
 



o primeiro comando que você precisará executar é o de instalação de pacotes do laravel, para isso, com o composer instalado, execute um terminar no diretório server com o seguinte comando:

     composer update

 **Para iniciar, tenha certeza de que você criou um banco de dados Mysql nas seguintes configurações:
ou ajuste-as nas configurações do projeto na pasta server, arquivo .env**
```

DB_CONNECTION=mysql

DB_HOST=127.0.0.1

DB_PORT=3306

DB_DATABASE=housework

DB_USERNAME=root

DB_PASSWORD=

```

  

Em seguida, rode o seguitne comando no seu terminal no diretório server

  

```

php artisan migrate

```

  

pronto, feito isso, as migrations já foram inseridas no seu banco de dados MySql.

  

O próximo passo é executar o servidor, para isso, com um terminal aberto na pasta server,

execute:

  

```

php artisan serve

```

  

pronto, seu servidor backend já está funcionando modo local.

Agora, para iniciarmos o servidor web, com um terminal aberto no diretório web, rode o seguinte comando:

    npm install

em seguida rode 

    npm run start
feito isso, seu projeto já está completamente no ar, em ambiente local.

