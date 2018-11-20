var express = require('express');
var db = require('../db/db');
var router = express.Router();



exports.getAllProducts= function(req,res){

    console.log("entering into getAllUsers");
    console.log("body: ",req.body);
    
    
    dbConnection = db.getDbConnection();
    
    var queryStatement = "select id, name , description, price, quantity from products where is_archived=0";
  
    console.log("query to be exectuted:: ",queryStatement);

    dbConnection.query(queryStatement,function(err,result){
		if(err) {
			console.log("error: ",err);
            res.status(400).send(err);	
        }	
		
        else{
            console.log("success: ",result);
            if(result.length === 0){
                res.status(204).send("no user found");
            } else {
                res.status(200).send(result);
            }
        }
       
        console.log("exiting from getAllUsers");
    });
}


exports.getSellerProducts= function(req,res){

    console.log("entering into getSellerProducts");
    
    
    dbConnection = db.getDbConnection();
    
    var queryStatement = "select user_id from sessions where token='"+req.headers.token+"'";

    //console.log("query to be exectuted:: ",queryStatement);

    dbConnection.query(queryStatement,function(err,result){
		if(err) {
			console.log("error: ",err);
            res.status(400).send(err);	
        }	
        else if(result.length>0){
            console.log(result);
            var user_id=result[0].user_id;
            console.log(user_id);
            console.log("user_id is "+user_id);

            queryStatement2="select id from sellers where user_id="+user_id+"";
            dbConnection.query(queryStatement2,function(err,result2){

                if(err){
                    console.log(err);
                    res.status(400).send(err);
                }
                else if(result2.length>0){
                    console.log(result2);
                    var seller_id=result2[0].id;
                    console.log(seller_id);
                    console.log("seller_id is "+seller_id);

                    queryStatement3="select id, name, description, price, quantity from products where seller_id="+seller_id+"";
                    dbConnection.query(queryStatement3, function(err,result3){
                        if(err){
                            console.log(err);
                            res.status(400).send(err);
                        }
                        else if(result3.length>0){
                            console.log(result3);
                            res.status(200).send(result3);
                        }
                        else{
                            console.log("no data found");
                            res.status(204).send("no data found")
                        }

                    });
                }
                else{
                    console.log("seller_id not found");
                    res.status(204).send("seller_id not found");

                }
              
            });

        }
        else{
            console.log("user_id not found");
            res.status(204).send("user_id not found");
        }
		
       
        console.log("exiting from getSellerProducts");
    });
}



exports.addProduct= function(req,res){

    console.log("entering into addproduct");
    
    console.log("body: ",req.body);
    dbConnection = db.getDbConnection();
    console.log("avc");

    var name=req.body.name;
    var description=req.body.description;
    var price=req.body.price;
    var quantity=req.body.quantity;

    console.log(name);
    console.log(description);console.log(price);console.log(quantity);
   
     if(name.length<3 || name.length>32)
    {
        console.log("invalid name");
        res.status(204).send("invalid name");
    
    }
    else if(description.length<8 || description.length>32)
    {
        console.log("invalid description");
        res.status(204).send("invalid description");
    
    }
    else if(price<1 )
    {
        console.log("invalid price");
        res.status(204).send("invalid price");
    
    }
    else if(quantity<1 )
    {
        console.log("invalid quantity");
        res.status(204).send("invalid quantity");
    
    }
   
    
    else{
              
    
    var queryStatement = "select user_id from sessions where token ='"+req.headers.token+"'";

    console.log("query to be exectuted:: ",queryStatement);

    dbConnection.query(queryStatement,function(err,result){
        console.log(result);
        //var id= result.[0].user_id;
       
		if(err) {
			console.log("error: ",err);
            res.status(400).send(err);	
        }	
		//  else  {
        //     console.log("success: ",result);
        //     res.status(200).send(result);
        // }
        else{
           // console.log("success: ",result);
            if(result.length === 1){
                // res.status(204).send("no user found");
                var user_id=result[0].user_id;
                console.log("user_id is "+ user_id);
        
                console.log("user_id found");

                queryStatement2="select id from sellers where user_id = "+user_id+"";
                dbConnection.query(queryStatement2,function(err,result2){
                   
                    if(err)
                    {
                        console.log(err);
                        res.status(400).send(err);
                    }
                    else if(result2.length>0)
                    {
                        console.log("seller id found");
                        var id=result2[0].id;
                        console.log("seller_id is "+id);
    

                        queryStatement3="insert into products(name,description,price,quantity,seller_id,created,updated,is_archived) values('"+name+"','"+description+"',"+price+","+quantity+","+id+",now(),now(),0)";
                        dbConnection.query(queryStatement3,function(err,result3)
                        {
                            if(err)
                            {
                                console.log(err);
                                res.status(400).send(err);
                            } 
                            else if(result3.affectedRows === 1)
                            {
                                console.log("product added");
                                res.status(201).send("product added");
                            }
                            else
                            {
                                console.log("product not added");
                                res.status(204).send("product not added");
                            }

                        });
                    }
                    else{
                        console.log("seller not found")
                        res.status(204).send("seller not found");
                    }
                });

            } else {
                res.status(204).send("user not found");
                console.log("user not found");
            }
        }
       
        console.log("exiting from add product");
    });
}
}

    exports.editProduct= function(req,res){

    console.log("entering into editproduct");
    
    console.log("body: ",req.body);
    dbConnection = db.getDbConnection();

    var name=req.body.name;
    var description=req.body.description;
    var price=req.body.price;
    var quantity=req.body.quantity;


   
     if(name.length<3 || name.length>32)
    {
        console.log("invalid name");
        res.status(204).send("invalid name");
    
    }
    else if(description.length<8 || description.length>32)
    {
        console.log("invalid description");
        res.status(204).send("invalid description");
    
    }
    else if(price<1 )
    {
        console.log("invalid price");
        res.status(204).send("invalid price");
    
    }
    else if(quantity<1 )
    {
        console.log("invalid quantity");
        res.status(204).send("invalid quantity");
    
    }
   
    
    else{
              
    
    var queryStatement = "select user_id from sessions where token ='"+req.headers.token+"'";

    console.log("query to be exectuted:: ",queryStatement);

    dbConnection.query(queryStatement,function(err,result){
        console.log(result);
        //var id= result.[0].user_id;
        // var user_id=result[0].user_id;
        // console.log("user_id is "+ user_id);

		if(err) {
			console.log("error: ",err);
            res.status(400).send(err);	
        }	
		//  else  {
        //     console.log("success: ",result);
        //     res.status(200).send(result);
        // }
        else{
           // console.log("success: ",result);
            if(result.length>0){
                // res.status(204).send("no user found");
                var user_id=result[0].user_id;
                 console.log("user_id is "+ user_id);
                console.log("user_id found");

                queryStatement2="select id from sellers where user_id = "+user_id+"";
                dbConnection.query(queryStatement2,function(err,result2){
                    // var seller_id=result2[0].id;
                    // console.log("seller_id is "+seller_id);

                    if(err)
                    {
                        console.log(err);
                        res.status(400).send(err);
                    }
                    else if(result2.length>0)
                    {
                        var seller_id=result2[0].id;
                        console.log("seller_id is "+seller_id);
                        console.log("seller id found");

                        queryStatement3="update products set name='"+name+"', description='"+description+"',price="+price+",quantity="+quantity+" where seller_id="+seller_id+" and id="+req.params.id+"";
                        dbConnection.query(queryStatement3,function(err,result3)
                        {
                            if(err)
                            {
                                console.log(err);
                                res.status(400).send(err);
                            } 
                            else if(result3.affectedRows === 1)
                            {
                                console.log("product edited");
                                res.status(200).send("product edited");
                            }
                            else
                            {
                                console.log("product not edited");
                                res.status(204).send("product not edited");
                            }

                        });
                    }
                    else{
                        console.log("seller not found")
                        res.status(204).send("seller not found");
                    }
                });

            } else {
                res.status(204).send("user not found");
            }
        }
       
        console.log("exiting from edit product");
    });
}

}

exports.getOneProduct=function(req,res){
    console.log("enterning into getOneProduct");
    console.log("body: ",req.body);
    dbConnection = db.getDbConnection();

    
            
    
         var id = req.params.id;
        
        var queryStatement = "select id, name, description, price, quantity, seller_id from products where id="+id+" and is_archived=0";
    
       // console.log("query to be exectuted:: ",queryStatement);
    
        dbConnection.query(queryStatement,function(err,result){
            if(err) {
                console.log("error: ",err);
                res.status(400).send(err);		
            } 
        
              //  console.log("success: ",result);
                else if(result.length > 0){
                    var product_id=result[0].id;
                    var name=result[0].name;
                    var price=result[0].price;
                    var description=result[0].description;
                    var quantity=result[0].quantity;
                    var seller_id=result[0].seller_id;
                //     console.log(product_id);
                //     console.log(name);
                //     console.log(description);
                //     console.log(price);

                //     console.log(quantity);

                //     console.log(seller_id);

                //    console.log(result);
                //    console.log(result);

                   queryStatement2="select user_id , company_name from sellers where id="+seller_id+"";
                   dbConnection.query(queryStatement2,function(err,result2){
                       if(err){
                           console.log(err);
                           res.status(400).send(err);
                       }
                       else if(result2.length>0){
                           var user_id=result2[0].user_id;
                           var company_name=result2[0].company_name;

                           queryStatement3="select name, role_id from users where id="+user_id+"";
                           dbConnection.query(queryStatement3,function(err,result3){
                            if(err){
                                console.log(err);
                                res.status(400).send(err);
                            }
                            else if(result3.length>0){
                                var seller_name=result3[0].name;
                             //   var role_id=result3[0].role_id;
                              
                                console.log(seller_name,company_name,product_id,name,description,quantity,price);
                      //  res.status(200).send(user_name,company_name,product_id,name,description,quantity,price);
                                res.status(200).json({ seller_name,company_name,id,name,description,quantity,price});
                            
                            
                        }
                           });
                       }

                   });
                
                   // res.status(200).send(result);
                }
                
            
            
            console.log("exiting from getOneProduct");
        });
    }



exports.deleteProduct=function(req,res){
    console.log("enterning into deleteProduct");
    console.log("body: ",req.body);
    dbConnection = db.getDbConnection();
 
    var id = req.params.id;
queryStatement="update products set is_archived=1 where is_archived=0 and id="+id+"";
dbConnection.query(queryStatement,function(err,result){

    if(err){
        console.log(err);
        res.status(400).send(err);

        }
        else if(result.affectedRows===1){
            console.log("product is deleted ");
            res.status(200).send("product is deleted");
        }
        else{
            console.log("product is not found")
            res.status(204).send("product is not found");
        }

});
}


exports.addFav= function(req,res){
        console.log("entering into add fav products");
        
        console.log("body: ",req.body);
        dbConnection = db.getDbConnection();
        var id = req.params.id;
    
     
        
        var queryStatement = "select user_id from sessions where token ='"+req.headers.token+"'";
    
        console.log("query to be exectuted:: ",queryStatement);
    
        dbConnection.query(queryStatement,function(err,result){
            console.log(result);
            //var id= result.[0].user_id;
           
    
    		if(err) {
    			console.log("error: ",err);
                res.status(400).send(err);	
            }	
    		//  else  {
            //     console.log("success: ",result);
            //     res.status(200).send(result);
            // }
            
               // console.log("success: ",result);
               else if(result.length > 0){
                var user_id=result[0].user_id;
                console.log("user_id is "+ user_id);
                    // res.status(204).send("no user found");
                    console.log("user_id found");

                    queryStatement2="insert into favourites(user_id, product_id, created) values("+user_id+","+id+",now())";
                        dbConnection.query(queryStatement2,function(err,result2
                            ){
                            if(err){
                                console.log(err);
                                res.status(400).send(err);
                            }
                            else if(result2.affectedRows===1){
                                console.log("added fav");
                                res.status(201).send("added fav");
                            }
                            else{
                                console.log("product not added as fav");
                                res.status(204).send("product not added as fav");
                            }
                        });
                    }
                        else{
                            console.log("user_id not found");
                            res.status(204).send("user_id not found");
                        }
                        });
                    }
                    


exports.removeFav= function(req,res){
    console.log("entering into removefav");
    
    console.log("body: ",req.body);
    dbConnection = db.getDbConnection();
    var id = req.params.id;

 
    
    var queryStatement = "select user_id from sessions where token ='"+req.headers.token+"'";

    console.log("query to be exectuted:: ",queryStatement);

    dbConnection.query(queryStatement,function(err,result){
        console.log(result);
        //var id= result.[0].user_id;
      

        if(err) {
            console.log("error: ",err);
            res.status(400).send(err);	
        }	
        //  else  {
        //     console.log("success: ",result);
        //     res.status(200).send(result);
        // }
        
           // console.log("success: ",result);
           else if(result.length > 0){
            var user_id=result[0].user_id;
            console.log("user_id is "+ user_id);
                // res.status(204).send("no user found");
                console.log("user_id found");

                queryStatement2="delete from favourites where product_id="+id+" and user_id="+user_id+"";
                    dbConnection.query(queryStatement2,function(err,result2
                        ){
                        if(err){
                            console.log(err);
                            res.status(400).send(err);
                        }
                        else if(result2.affectedRows===1){
                            console.log("removed fav");
                            res.status(200).send("removed fav");
                        }
                        else{
                            console.log("product not removed as fav");
                            res.status(204).send("product not removed as fav");
                        }
                    });
                }
                    else{
                        console.log("user_id not found");
                        res.status(204).send("user_id not found");
                    }
                    }); 
                }


                exports.search= function(req,res){

                    console.log("entering into search");
                   // var search=req.body.search;
                  // var search= req.headers.search;
                  var search = req.params.search;
    
                    console.log("body: ",req.body);
                    dbConnection = db.getDbConnection();
                    queryStatement="select id, name, description, price, quantity from products where name='"+search+"' or description='"+search+"'";
                    dbConnection.query(queryStatement,function(err,result){
                        if(err){
                            console.log(err);
                            res.status(400).send(err);
                        }
                        else if(result.length>0){
                            console.log(result);
                            res.status(200).send(result);
                        }
                        else{
                            console.log("no data by search");
                            res.status(200).send("no data is found by search");
                        }

                    });

                }

    
     exports.getFavProducts= function(req,res){

     console.log("entering into getFavProducts");
                                
    // console.log("body: ",req.body);
     dbConnection = db.getDbConnection();
     console.log("before header");
     console.log(req.headers.token);
     console.log("after header");
                    
    var queryStatement = "select user_id from sessions where token ='"+req.headers.token+"'";

    //console.log("query to be exectuted:: ",queryStatement);
    console.log("query to be exectuted:: ",queryStatement);

    dbConnection.query(queryStatement,function(err,result){
       

        if(err) {
            console.log("error: ",err);
            res.status(400).send(err);	
        }	
       
        
          
        //    else if(result.length > 0){
        //     console.log(result);
        //     //var id= result.[0].user_id;
        //     var user_id=result[0].user_id;
        //     console.log("user_id is "+ user_id);
        //         // res.status(204).send("no user found");
        //         console.log("user_id found");
        //         queryStatement2="select product_id from favourites where user_id="+user_id+"";
        //         dbConnection.query(queryStatement2,function(err,result2){
        //             console.log(result2);
                   
        //             if(err){
        //                 console.log("error: ",err);
        //                 res.status(400).send(err);	
        //             }
                   
                    else if(result.length>0){
                        var id= result[0].user_id;
                         var user_id=result[0].user_id;
                        console.log("user_id is "+ user_id);
                    //     var i=0;
                    //     var count=result2.length;
                    //    var n=result.length;
                    //   console.log(result.length);
                    // //      while(i<count){
                        
                        
                       // console.log("result length is "+result2.length);
                       // var product_id=result2[i].product_id;
                    //    var product_id2=result2[1].product_id;
                       // console.log("product_id is "+ product_id);
                      //  console.log("seller_id found");
                     
                    //    if(n==1){
                       // queryStatement3="select id, name, description, price, quantity from products where id="+result2[0].product_id+"";
                       queryStatement3="select id, name, description, price, quantity from products where id IN(select product_id from favourites where user_id="+user_id+")";

                        console.log(queryStatement3);
                      
                       
                        dbConnection.query(queryStatement3, function(err,result2){
                            console.log(result2);
                            if(err){
                                console.log("error: ",err);
                                res.status(400).send(err);	
                            }
                            else if(result2.length){
                     
                           console.log(result2);
                         
                           res.status(200).send(result2);
                            }
                            else{
                                console.log("no data found");
                              res.status(204).send("no data found");
                            }
                        
                        
                        });
                }
      
        else{
            console.log("user_id not found");
           res.status(204).send("user_id not found");	
        }
    
    });

}

            
                


               
       





