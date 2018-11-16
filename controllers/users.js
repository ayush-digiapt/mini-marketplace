var express = require('express');
var db = require('../db/db');
var router = express.Router();

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
    res.status(204).send("invalid email address");
    }
    else if(name.length<3 || name.length>32)
    {
        console.log("invalid name");
        res.status(204).send("invalid name");
    
    }
    // else if(last_name.length!=0 && (last_name.length<3 || last_name.length>32))
      
    //         {
    //         console.log("invalid last_name");
    //         res.status(204).send("invalid last_name");
    //          }
    
     else if(password.length<8 || password.length>32)
      
             {
             console.log("invalid password");
             res.status(204).send("invalid password");
              }
    
    else if(address_line1.length!=0 && (address_line2.length<8 || address_line1.length>100))
      
            {
            console.log("invalid address_line1");
            res.status(204).send("invalid address_line1");
             }

  else if(address_line2.length!=0 && (address_line2.length<8 || address_line2.length>100))
      
            {
                 console.log("invalid address_line2");
                 res.status(204).send("invalid address_line2");
             }
 else if(city.length<3 || city.length>32)
      
             {
             console.log("invalid city");
             res.status(204).send("invalid city");
              }
      
else if(state.length<3 || state.length>32)
      
              {
              console.log("invalid state");
              res.status(204).send("invalid state");
               }          
    // else if(mobile!=null )
      
    //         {
    //         console.log("invalid mobile");
    //         res.status(204).send("invalid mobile");
    //          }
        
    else if(mobile!=null && mobile<6000000000  || mobile> 10000000000 )
    {
        console.log("mobile number is not valid")
        res.status(204).send("mobile number is not valid");
    }
    
    else{
        var queryStatement = "insert into users(name, email, password, mobile, role_id, address_line1, address_line2, city, state, pincode,is_archived, created, updated) values('"+name+"','"+email+"','"+password+"',"+mobile+","+role_id+",'"+address_line1+"','"+address_line2+"','"+city+"','"+state+"',"+pincode+",0,now(),now())";
    
        console.log("query to be exectuted:: ",queryStatement);
    
        dbConnection.query(queryStatement,function(err,result){
            if(err) {
                console.log("error: ",err);
                res.status(400).send(err);	
                    
            } 
            else {

                console.log("success: ",result);
                if(result.affectedRows === 1 ) {


                if(role_id === 1){

                         
                    // if(company_name.length<3 || company_name.length>32)
                           
                    //    {
                    //    console.log("invalid company name");
                    //    res.status(204).send("invalid comapny name");
                    //    }          
                       queryStatement2= "select id from users where email='"+email+"'";
                       dbConnection.query(queryStatement2,function(err,result2){
   
                           
                           
                           console.log(result2);
                           var id=result2[0].id;
                            console.log("user_id is "+id);
                            //console.log(result2);
                           if(err){
                               console.log("error: ",err);
                               res.status(400).send(err);	
                           }
   
                           else if(result2.length>0)
                           {
                               
                               queryStatement3="insert into sellers(user_id, company_name, created, updated) values("+id+",'"+company_name+"',now(),now())";
                               dbConnection.query(queryStatement3,function(err,result3){
                                   if(err){
                                       console.log("error: ",err);
                                       res.status(400).send(err);
                                   }
                                   else if(result3.affectedRows>0)
                                   {
   
                                       console.log("seller created");
                                      res.status(201).send("user has been created successfully");	
                                   }
                               });
                           }
                       });
                   }
                   else{
                       console.log("user has been created successfully");
                    res.status(201).send("user has been created successfully");
                   }
   

                     console.log("successfull createUsers");
                   // res.status(201).send("user has been created successfully");		
                }
            }
            console.log("exiting from createUsers");
        });
    }
    }
