const express = require('express');
const router = express.Router();

const Product = require('../models/product');


router.get('/',(req,res)=>{
    res.send("<h1>MarketPlace API</h1>");
});
//route to search all products in the database
router.get('/api/products',(req,res)=>{
    Product.find({}).exec((err,products)=>{
        if(err){
            res.status(500).json({
                status:"Error",
                message:"Se presento un error"
            });
        }

        if(!products){
            res.status(404).json({
                status:"Error",
                message:"No hay productos en la Base"
            });
        }

        res.status(200).json({
            status:"OK",
            products
        });

    });
});

//POST path to send product data to the database
router.post('/api/products',(req,res)=>{
    const {nameProduct,urlPhotoProduct,description,price,category} = req.body;

    const product = new Product();

    product.nameProduct = nameProduct;
    product.urlPhotoProduct = urlPhotoProduct;
    product.description = description;
    product.price = price;
    product.category = category;

    product.save((err,productStored)=>{
        if(err || !productStored){
            res.status(404).json({
                status:"Error",
                message:"Error Registering Product"
            });
        }
        res.status(200).json({
            status:"OK",
            message:"Registered Product"
        });
    });
});

//GET route to search products by name
router.get('/api/search/:name',(req,res)=>{
    const {name} = req.params;

    Product.find({nameProduct:new RegExp(name, "i")}).exec((err,products)=>{
        if(err){
            res.status(500).json({
                status:"Error",
                message:"Error"
            });
        }

        if(!products){
            res.status(404).json({
                status:"Error",
                message:"There are no products"
            });
        }

        res.status(200).json({
            status:"OK",
            products
        });

    });
});
//GET route to search products by category
router.get('/api/filter/:category',(req,res)=>{
    const {category} = req.params;

    Product.find({category:category}).exec((err,products)=>{
        if(err){
            res.status(500).json({
                status:"Error",
                message:"Error"
            });
        }

        if(!products){
            res.status(404).json({
                status:"Error",
                message:"There are no products"
            });
        }

        res.status(200).json({
            status:"OK",
            products
        });

    });

});


module.exports = router;