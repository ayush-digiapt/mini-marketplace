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

mysql -umini-marketplace root -pmini-marketplace
create user 'mini-marketplace'@'localhost' identified by 'mini-marketplace';
drop database mini-marketplace;
create database mini-marketplace;
grant all privileges on mini-marketplace.* to 'mini-marketplace'@'localhost' with grant option;
exit;
mysql -u mini-marketplace -pmini-marketplace mini-marketplace < db/schema.sql;

mysql -u mini-marketplace -pmini-marketplace mini-marketplace < db/mock.sql

```


## If you would like to re-generate the models from the DB, run the below ##

```
#!shell

sequelize-auto -o "./models" -d mini-marketplace -h localhost -u mini-marketplace -p 3306 -x mini-marketplace -e mysql

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