// var express = require('express');
// var router = express.Router();

// var mysql=require('mysql');

// var config = {
//   host    : 'localhost',
//   user    : 'root',	
//   password: 'root',
//   database: 'mini_marketplace'
// };


// var connection;

// exports.getDbConnection =  function () {
//   console.log('\n\n\n\n');
//   console.log('*****************************************');
//   console.log("outside try - in getDbConnection");
//   try {
//     console.log("in getDbConnection");
//     if(!connection) {
//       console.log("No DB connection established, going to create new connection");
//       var connection = mysql.createConnection(config);
//       console.log("created db connection");
//       return connection;
//     } else {
//       console.log("DB connection is established already");
//       return connection;
//     }
//   } catch(e) {
//     console.log("Error catched: "+e);
//   }
//   console.log('*****************************************');
// }

var config = require('config');
var Sequelize = require('sequelize');

/*Mysql Database Setup*/
var sequelize = new Sequelize('mysql://' + config.db.user + ':' + config.db.password + '@' + config.db.host + ':' + config.db.port + '/' + config.db.database, {
    define: config.sequelize.options
});


module.exports = {
    sequelize: sequelize,
}