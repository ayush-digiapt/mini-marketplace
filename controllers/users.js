var express = require('express');
var db = require('../db/db');
var router = express.Router();
var passwordHash = require('password-hash');

function validateEmail(email) {
    // First check if any value was actually set
    if (email.length == 0) return false;
    // Now validate the email format using Regex
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return re.test(email);
}

exports.createUser= function(req,res){
   
        console.log("entering into createUsers");
        
        // print inputs
        console.log("request body: ", req.body);
    
        dbConnection = db.getDbConnection();

     var name= req.body.name;
    var password = req.body.password;
    var mobile=req.body.mobile;
    var address_line1 = req.body.address_line1;
    var address_line2 = req.body.address_line2;
    var city=req.body.city;
    var state=req.body.state;
    var pincode=req.body.pincode;
    var email = req.body.email;
    var role_id= req.body.role_id;
    var company_name= req.body.company_name;

       
        if(name===undefined )
        {
            name='';
        }
        if(password===undefined )
        {
            password='';
        }
        if(mobile===undefined )
        {
            mobile= null;
        }
        if(address_line1===undefined)
        {
            address_line1= '';
        }
        if(address_line2===undefined)
        {
            address_line2= '';
        }
        if(city===undefined)
        {
            req.body.city= '';
        }
        if(state===undefined)
        {
            state= '';
        }
        if(pincode===undefined)
        {
            pincode= null;
        }
    
    
        
      
    
    if (!validateEmail(email)) { console.log('Invalid email address');
    res.status(204).json("invalid email address");
    }
    else if(name.length<3 || name.length>32)
    {
        console.log("invalid name");
        res.status(204).json("invalid name");
    
    }
    // else if(last_name.length!=0 && (last_name.length<3 || last_name.length>32))
      
    //         {
    //         console.log("invalid last_name");
    //         res.status(204).json("invalid last_name");
    //          }
    
     else if(password.length<8 || password.length>32)
      
             {
             console.log("invalid password");
             res.status(204).json("invalid password");
              }
    
    else if(address_line1.length!=0 && (address_line2.length<8 || address_line1.length>100))
      
            {
            console.log("invalid address_line1");
            res.status(204).json("invalid address_line1");
             }

  else if(address_line2.length!=0 && (address_line2.length<8 || address_line2.length>100))
      
            {
                 console.log("invalid address_line2");
                 res.status(204).json("invalid address_line2");
             }
 else if(city.length<3 || city.length>32)
      
             {
             console.log("invalid city");
             res.status(204).json("invalid city");
              }
      
else if(state.length<3 || state.length>32)
      
              {
              console.log("invalid state");
              res.status(204).json("invalid state");
               }          
    // else if(mobile!=null )
      
    //         {
    //         console.log("invalid mobile");
    //         res.status(204).json("invalid mobile");
    //          }
        
    else if(mobile!=null && mobile<6000000000  || mobile> 10000000000 )
    {
        console.log("mobile number is not valid")
        res.status(204).json("mobile number is not valid");
    }
    
    else{
        var passwordHash = require('password-hash');

        var hashedPassword = passwordHash.generate(password);
        console.log(hashedPassword);
        var queryStatement = "insert into users(name, email, password, mobile, role_id, address_line1, address_line2, city, state, pincode,is_archived, created, updated) values('"+name+"','"+email+"','"+hashedPassword+"',"+mobile+","+role_id+",'"+address_line1+"','"+address_line2+"','"+city+"','"+state+"',"+pincode+",0,now(),now())";
    
        console.log("query to be exectuted:: ",queryStatement);
    
        dbConnection.query(queryStatement,function(err,result){
            if(err) {
                console.log("error: ",err);
                res.status(400).json(err);	
                    
            } 
            else {

                console.log("success: ",result);
                if(result.affectedRows === 1 ) {


                if(role_id === 1){

                         
                    // if(company_name.length<3 || company_name.length>32)
                           
                    //    {
                    //    console.log("invalid company name");
                    //    res.status(204).json("invalid comapny name");
                    //    }          
                       queryStatement2= "select id from users where email='"+email+"'";
                       dbConnection.query(queryStatement2,function(err,result2){
   
                           
                           
                           console.log(result2);
                           var id=result2[0].id;
                            console.log("user_id is "+id);
                            //console.log(result2);
                           if(err){
                               console.log("error: ",err);
                               res.status(400).json(err);	
                           }
   
                           else if(result2.length>0)
                           {
                               
                               queryStatement3="insert into sellers(user_id, company_name, created, updated) values("+id+",'"+company_name+"',now(),now())";
                               dbConnection.query(queryStatement3,function(err,result3){
                                   if(err){
                                       console.log("error: ",err);
                                       res.status(400).json(err);
                                   }
                                   else if(result3.affectedRows>0)
                                   {
   
                                       console.log("seller created");
                                      res.status(201).json("user has been created successfully");	
                                   }
                               });
                           }
                       });
                   }
                   else{
                       console.log("user has been created successfully");
                    res.status(201).json("user has been created successfully");
                   }
   

                     console.log("successfull createUsers");
                   // res.status(201).json("user has been created successfully");		
                }
            }
            console.log("exiting from createUsers");
        });
    }
    }

    exports.details=function(req,res){
       
        console.log("entering into details of users");
        
        // print inputs
        console.log("request body: ", req.body);
    
        dbConnection = db.getDbConnection();

        queryStatement="select user_id from sessions where token='"+req.headers.token+"'";
        console.log(queryStatement);
        dbConnection.query(queryStatement,function(err,result){
            if(err){
                console.log(err);
                res.status(400).json(err);
            }
            else if(result.length>0){
                var user_id=result[0].user_id;
                console.log(user_id);
                console.log("user_id "+user_id);

                queryStatement2="select name from users where id="+user_id+"";
                dbConnection.query(queryStatement2,function(err,result2){
                    //if
                    if(err){
                      console.log(err);
                      res.status(400).json(err);
                    }
                    else if(result2.length>0){
                        console.log(result2);
                        res.status(200).json(result2);
                    }
                    else{
                        console.log("no data found");
                        res.status(204).json("no data found");

                    }
                });
                

            }
            else{
                console.log("user_id not found");
                res.status(204).json("user_id not found");
            }
        });


    }

