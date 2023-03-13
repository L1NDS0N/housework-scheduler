## Projeto Housework Scheduler

 

#### Este projeto foi feito para ser avaliado em um exame empregatício para a empresa Eco Consultoria, desde já gostaria de demonstrar minha gratidão pela confiança que a mim depositaram em poder desenvolver um projeto com novas tecnologia sem experiências prévias com tais. Esse tipo de atitude para mim, deveria se tornar referência na contratação de desenvolvedores juniores, todavia, muito obrigado pela oportunidade.

###### Este projeto utiliza as stacks MySql, Angular 15 e Php 8.1
##### principais dependencias do projeto: php 8.1, nodejs e composer, para rodar o projeto na sua máquina tenha certeza de que possui estas tecnologias instaladas em seu computador.

#### Primeiro,  execute o comando de instalação de pacotes do laravel, para isso, com o composer instalado, execute um terminal no diretório server com o seguinte comando:

     composer update

 Para iniciar, tenha certeza de que você criou um banco de dados Mysql nas seguintes configurações:
ou ajuste-as nas configurações do projeto na pasta server, arquivo .env
```

DB_CONNECTION=mysql

DB_HOST=127.0.0.1

DB_PORT=3306

DB_DATABASE=housework

DB_USERNAME=root

DB_PASSWORD=

```

  

Em seguida, rode o seguinte comando no seu terminal no diretório server

  

```

php artisan migrate

```

  

feito isso, as migrations já foram inseridas no seu banco de dados MySql.

  

O próximo passo é executar o servidor, então, com um terminal aberto na pasta server, execute:

  

```

php artisan serve

```

  

pronto, seu servidor backend já está funcionando em ambiente local.

Agora, para iniciarmos o servidor web, com um terminal aberto no diretório web, rode o seguinte comando:

    npm install

em seguida rode 

    npm run start
pronto, seu projeto já está completamente no ar, em ambiente local.

para visualizar o projeto, em seu navegador, abra a seguinte página na web:
```
  http://localhost:4200
```

