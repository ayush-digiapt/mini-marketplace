var express = require('express');
var db = require('../db/db');
var router = express.Router();
var randomToken = require('random-token');
var passwordHash = require('password-hash');

exports.login= function(req,res){
    console.log("request body: ", req.body);
   // var token = randomToken(12);

    // console.log(token);
    // res.status(200).send(token);

    console.log("in login");
    console.log("body: ",req.body);
    var connection = db.getDbConnection();
   
    var queryStatement = "select id from users where email='"+req.body.email+"' ";
	connection.query(queryStatement,function(err,result){
       
		if(err) {
			console.log("error: ",err);
            res.status(400).send(err);
           
        } 		
		// else {
        //    // console.log("success: ",result);
            else if(result.length>0){

            //    var password=req.body.password;
            //     var hashedPassword = passwordHash.generate(password);
            //     console.log(hashedPassword);

             //   var passwordHash = require('./lib/password-hash');

             //   var hashedPassword = '    var passwordHash = require('./lib/password-hash');

                queryStatement4="select password from users where email='"+req.body.email+"'";
                connection.query(queryStatement4,function(err,result4){
                    if(err){
                        console.log(err);
                        res.status(400).send(err);
                    }
                    else if(result4.length>0)
                    {

                    var hashedPassword=result4[0].password;
                    var password=req.body.password;
                    
                
               // var hashedPassword = 'sha1$adc396c1$1$b9b48ac15357b11d51ac47f5814a3bcd6b9b44a4';
                
               // console.log(passwordHash.verify('password123', hashedPassword)); // true
               // console.log(passwordHash.verify('Password0', hashedPassword)); // false';
                
                console.log(passwordHash.verify(password, hashedPassword)); // true
               // console.log(passwordHash.verify('12349qwert', hashedPassword)); // false
              var valid = passwordHash.verify(password, hashedPassword);
                //verify(password, hashedPassword)
                
            
                if(valid){
                var queryStatement2 = "select id, role_id from users where email='"+req.body.email+"' and password='"+hashedPassword+"'";
                connection.query(queryStatement2,function(err,result2){
                   
                   
                  
                
                    if(err) {
                        console.log("error: ",err);
                        res.status(400).send(err);
                       
                       
                                
                    } 
                    // else {
                    //    // console.log("success: ",result);
                
                       else if(result2.length>0){
                          //  console.log(id);
                            console.log(result2);
                       var id=result2[0].id;
                       var role_id=role_id;
                       var role_id=result2[0].role_id;
                       console.log("role_id is "+role_id);
                      console.log("user_id is "+id);
                      console.log(result2);

                    //   queryStatement5="delete from sessions where user_id="+id+"";
                    //   connection.query(queryStatement5,function(err,result5){
                    //       if(err){
                    //           console.log(err);
                    //           res.status(400).send(err);
                    //       }
                    //       else if(result5.affectedRows>0){

                         

                      
                            // res.status(200).send(" successfully login ");
                            // console.log("hii login successfull");

                            
                            
                            var token = randomToken(12);


                           
                            // var currentDate = new Date();
                            // var year = currentDate.getFullYear();
                            // var month = currentDate.getMonth();
                            // var day = currentDate.getDate();
                            // var nextDate = new Date(year, month, day+10)
                           
                            
                            // var token_expires = nextDate;
                         
                            
                            
                            //    var now;
                                // var currentDate = new Date();
                                // var year = now.getFullYear();
                                // var month = now.getMonth();
                                //  var day = now.getDate();
                                //  var nextDate = now(day+1)
                               
                                // // //var now = moment();
                               
                                //  var token_expires = nextDate;

                               // 2018-11-14 10:21:29
                               //Sat Nov 24 2018 00:00:00 GMT+0530 (IST)

                            //    var currentNow = new now();
                            //    currentNow= currentNow+ 24;  
                                                 
                            
                            var queryStatement3="insert into sessions(user_id,token,token_expiry,created) values("+id+",'"+token+"',now()+10000,now())";
                          // var queryStatement3="insert into sessions(user_id,token,token_expiry,created) values("+id+",'"+token+"',"+token_expires+",now())";
                            connection.query(queryStatement3,function(err,result3){


                               if (err) {
                                    console.log(err);
                                    res.status(400).send(err);
                                } 
                                else if(result3.affectedRows === 1){ 
                                    console.log('inserted');
                                    //res.status(200).send("Email is send ");
                                 //   console.log(role_id);
                                //  console.log("successfull login");
                                //  res.status(200).send("successfull login");
                                var token_variable={token};
                                // console.log(token_variable);
                                // res.status(200).send(token_variable);
                                var role= {role_id};
                                //var token={token}
                               //res.status(200).send(token_variable);
                               console.log(token_variable,role);
                               res.status(200).json({ token , role_id});
                                    
                                 //  res.res.sendStatus(role_id);
                                   //res.res.sendStatus(token);
                               // result=role_id;
                            //    if(role_id===1){
                            //         res.status(200).send("1");
                            //         console.log("1");
                            //    }
                            //    else{
                            //     res.status(200).send("2");
                            //     console.log("1");

                            //    }
                                    // if(res.status===200)
                                    // {
                                    //     res.send(role_id);
                                    //     console.log(role_id);
                                    //     console("rinjit1234");
                                    // }
                                }
                                
                                
                               
                        });
                //     }

                // });
                    

                          
                            
                        } else {
                            res.status(401).send("password is wrong");
                            console.log("password is wrong");
                        
                        }
                
        });
    }
    else {
        res.status(401).send("password is wrong");
        console.log("password is wrong");
    }
}
});
    
        }else {
                res.status(401).send("Email id is not valid");
                console.log("Email id is not valid");
            }
			
        
	
        //}
});
}
exports.logout = function(req,res){
    console.log("entering into logout");
    console.log("body: ",req.body);
    var connection = db.getDbConnection();
   
    queryStatement = "delete from sessions where token ='"+req.headers.token+"'";
    connection.query(queryStatement, function(err,result)
    {
        if(err){
            console.log(err);
            res.status(400).send(err);
        }
        else if( result.affectedRows>0){

            console.log("logout successfully");
            res.status(200).send("logout successfully");
        }
        else{
            console.log("no login");
            res.status(204).send("not login");
        }
    });


}

    
