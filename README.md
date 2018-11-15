# SYSTEM SETUP #

## Pre-Requisites ##
node version 8.11.1
mysql version 5.7

```
#!shell
nvm install 8.11.1
nvm use 8.11.1
npm install -g mysql
npm install -g sequelize-auto

```

# CODE SETUP #
## Get the repository ##
```
#!shell
git clone <THIS_PROJECT_GIT_URL>

```

## Install packages ##

```
#!shell

npm install

```

# mySQL DB SETUP #
## Login to mysql ##


```
#!shell  

mysql -umini_marketplace  -pmini_marketplace
create user 'mini_marketplace'@'localhost' identified by 'mini_marketplace';
drop database mini_marketplace;
create database mini_marketplace;
grant all privileges on mini_marketplace.* to 'mini_marketplace'@'localhost' with grant option;
exit;
mysql -u mini_marketplace -pmini_marketplace mini_marketplace < db/schema.sql;

mysql -u mini_marketplace -pmini_marketplace mini_marketplace < db/mock.sql

```


## If you would like to re-generate the models from the DB, run the below ##

```
#!shell

sequelize-auto -o "./models" -d mini_marketplace -h localhost -u mini_marketplace -p 3306 -x mini_marketplace -e mysql

```

## Login to mysql ##


```
#!shell

TODO

```

# RUN #
## Start server on command line ##

```
#!shell

PORT=3000 NODE_ENV=development DEBUG=mini-marketplace:* npm start

```

## Start server on command line as a background process ##

```
#!shell

PORT=3000 NODE_ENV=development DEBUG=mini-marketplace:* forever start bin/www 

```


#https://gist.github.com/andrewmunro/030f0bf62453239c495b0347c8cd1247