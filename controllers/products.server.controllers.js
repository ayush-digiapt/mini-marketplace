var express = require('express');
var db = require('../db/db');
var router = express.Router();

exports.getOneProduct = function(req, res) {}

exports.getAllProducts = function(req, res) {
    console.log("entering into getAllUsers");
    console.log("body: ", req.body);
    dbConnection = db.getDbConnection();
    var queryStatement = "select id, name , description, price, quantity from products where is_archived=0";
    console.log("query to be exectuted:: ", queryStatement);
    dbConnection.query(queryStatement, function(err, result) {
        if (err) {
            console.log("error: ", err);
            res.status(400).send(err);
        } else {
            console.log("success: ", result);
            if (result.length === 0) {
                res.status(204).send("no user found");
            } else {
                res.status(200).send(result);
            }
        }
        console.log("exiting from getAllUsers");
    });
}


exports.getSellerProducts = function(req, res) {
    console.log("entering into getSellerProducts");
    dbConnection = db.getDbConnection();
    var queryStatement = "select name ,email, mobile, address_line1, address_line1, city, state, pincode from users where is_archived=0 and role_id=1";
    console.log("query to be exectuted:: ", queryStatement);
    dbConnection.query(queryStatement, function(err, result) {
        if (err) {
            console.log("error: ", err);
            res.status(400).send(err);
        } else {
            console.log("success: ", result);
            if (result.length === 0) {
                res.status(204).send("no user found");
            } else {
                res.status(200).send(result);
            }
        }
        console.log("exiting from getSellerProducts");
    });
}



exports.addProduct = function(req, res) {
    console.log("entering into addproduct");
    console.log("body: ", req.body);
    dbConnection = db.getDbConnection();
    var name = req.body.name;
    var description = req.body.description;
    var price = req.body.price;
    var quantity = req.body.quantity;
    if (name.length < 3 || name.length > 32) {
        console.log("invalid name");
        res.status(204).send("invalid name");
    } else if (description.length < 8 || description.length > 32) {
        console.log("invalid description");
        res.status(204).send("invalid description");
    } else if (price < 1) {
        console.log("invalid price");
        res.status(204).send("invalid price");
    } else if (quantity < 1) {
        console.log("invalid quantity");
        res.status(204).send("invalid quantity");
    } else {
        var queryStatement = "select user_id from sessions where token ='" + req.body.token + "'";
        console.log("query to be exectuted:: ", queryStatement);
        dbConnection.query(queryStatement, function(err, result) {
            console.log(result);
            var user_id = result[0].user_id;
            console.log("user_id is " + user_id);
            if (err) {
                console.log("error: ", err);
                res.status(400).send(err);
            } else {
                if (result.length === 1) {
                    console.log("user_id found");
                    queryStatement2 = "select id from sellers where user_id = " + user_id + "";
                    dbConnection.query(queryStatement2, function(err, result2) {
                        var id = result2[0].id;
                        console.log("seller_id is " + id);
                        if (err) {
                            console.log(err);
                            res.status(400).send(err);
                        } else if (result2.length > 0) {
                            console.log("seller id found");
                            queryStatement3 = "insert into products(name,description,price,quantity,seller_id,created,updated,is_archived) values('" + name + "','" + description + "'," + price + "," + quantity + "," + id + ",now(),now(),0)";
                            dbConnection.query(queryStatement3, function(err, result3) {
                                if (err) {
                                    console.log(err);
                                    res.status(400).send(err);
                                } else if (result3.affectedRows === 1) {
                                    console.log("product added");
                                    res.status(201).send("product added");
                                } else {
                                    console.log("product not added");
                                    res.status(204).send("product not added");
                                }
                            });
                        } else {
                            console.log("seller not found")
                            res.status(204).send("seller not found");
                        }
                    });

                } else {
                    res.status(204).send("user not found");
                }
            }
            console.log("exiting from add product");
        });
    }
}

exports.editProduct = function(req, res) {
    console.log("entering into editproduct");
    console.log("body: ", req.body);
    dbConnection = db.getDbConnection();
    var name = req.body.name;
    var description = req.body.description;
    var price = req.body.price;
    var quantity = req.body.quantity;
    if (name.length < 3 || name.length > 32) {
        console.log("invalid name");
        res.status(204).send("invalid name");
    } else if (description.length < 8 || description.length > 32) {
        console.log("invalid description");
        res.status(204).send("invalid description");
    } else if (price < 1) {
        console.log("invalid price");
        res.status(204).send("invalid price");
    } else if (quantity < 1) {
        console.log("invalid quantity");
        res.status(204).send("invalid quantity");
    } else {
        var queryStatement = "select user_id from sessions where token ='" + req.body.token + "'";
        console.log("query to be exectuted:: ", queryStatement);
        dbConnection.query(queryStatement, function(err, result) {
            console.log(result);
            //var id= result.[0].user_id;
            var user_id = result[0].user_id;
            console.log("user_id is " + user_id);

            if (err) {
                console.log("error: ", err);
                res.status(400).send(err);
            } else {
                if (result.length === 1) {
                    console.log("user_id found");
                    queryStatement2 = "select id from sellers where user_id = " + user_id + "";
                    dbConnection.query(queryStatement2, function(err, result2) {
                        var id = result2[0].id;
                        console.log("seller_id is " + id);
                        if (err) {
                            console.log(err);
                            res.status(400).send(err);
                        } else if (result2.length > 0) {
                            console.log("seller id found");
                            queryStatement3 = "update products set name='" + name + "', description='" + description + "',price=" + price + ",quantity=" + quantity + " where id=" + id + "";
                            dbConnection.query(queryStatement3, function(err, result3) {
                                if (err) {
                                    console.log(err);
                                    res.status(400).send(err);
                                } else if (result3.affectedRows === 1) {
                                    console.log("product edited");
                                    res.status(200).send("product edited");
                                } else {
                                    console.log("product not edited");
                                    res.status(204).send("product not edited");
                                }

                            });
                        } else {
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

exports.getOneProduct = function(req, res) {
    console.log("enterning into getOneProduct");
    console.log("body: ", req.body);
    dbConnection = db.getDbConnection();
    var id = req.params.id;
    var queryStatement = "select name, description, price, quantity from products where id=" + id + " and is_archived=0";
    console.log("query to be exectuted:: ", queryStatement);
    dbConnection.query(queryStatement, function(err, result) {
        if (err) {
            console.log("error: ", err);
            res.status(400).send(err);
        } else {
            console.log("success: ", result);
            if (result.length === 0) {
                res.status(204).send("no product found");
            } else {
                res.status(200).send(result);
            }
        }
        console.log("exiting from getOneProduct");
    });
}


exports.deleteProduct = function(req, res) {
    console.log("enterning into deleteProduct");
    console.log("body: ", req.body);
    dbConnection = db.getDbConnection();
    var id = req.params.id;
    queryStatement = "update products set is_archived=1 where is_archived=0 and id=" + id + "";
    dbConnection.query(queryStatement, function(err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);

        } else if (result.affectedRows === 1) {
            console.log("product is deleted ");
            res.status(200).send("product is deleted");
        } else {
            console.log("product is not found")
            res.status(204).send("product is not found");
        }

    });
}