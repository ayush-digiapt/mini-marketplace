var express = require('express');
var db = require('../db/db');
var router = express.Router();

exports.getRoles= function(req,res){

    console.log("entering into roles");
    console.log("request body: ", req.body);
    
        dbConnection = db.getDbConnection();

        var queryStatement = "select id, name from roles";
    
        console.log("query to be exectuted:: ",queryStatement);
    
        dbConnection.query(queryStatement,function(err,result){
            if(err) {
                console.log("error: ",err);
                res.status(400).send(err);	
                    
            } 
            else {
               // console.log("success: ",result);
               // if(result.affectedRows === 1 ) {
                    
                    console.log("successfull selected");
                    res.status(200).send(result);		
                }
           // }
            console.log("exiting from roles");
        });
    }
    