var express = require('express');
var db = require('../db/db');
var router = express.Router();
var randomToken = require('random-token');

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

                if(id){
                    logout();
                }
                
                
                var queryStatement2 = "select id, role_id from users where email='"+req.body.email+"' and password='"+req.body.password+"'";
                connection.query(queryStatement2,function(err,result2){
                   
                   
                  
                
                    if(err) {
                        console.log("error: ",err);
                        res.status(400).send(err);
                       
                       
                                
                    } 
                    // else {
                    //    // console.log("success: ",result);
                       else if(result2.length>0){
                            console.log(id);
                            console.log(result2);
                       var id=result2[0].id;
                       var role_id=role_id;
                       var role_id=result2[0].role_id;
                       console.log("role_id is "+role_id);
                      console.log("user_id is "+id);
                      console.log(result2);

                      
                            // res.status(200).send(" successfully login ");
                            // console.log("hii login successfull");

                            
                            
                            var token = randomToken(12);


                           
                            var currentDate = new Date();
                            var year = currentDate.getFullYear();
                            var month = currentDate.getMonth();
                            var day = currentDate.getDate();
                            var nextDate = new Date(year, month, day+10)
                           
                            
                            var token_expires = nextDate;
                         
                            
                            
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
                               res.status(200).json({ token_variable , role});
                                    
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


                          
                            
                        } else {
                            res.status(401).send("password is wrong");
                            console.log("password is wrong");
                        
                        }
                // res.status(200).send(" successfully login result");
                // console.log("hii login successfull");
                    //}
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
   
    queryStatement = "delete * from sessions where token ='"+token+"'";
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

    
