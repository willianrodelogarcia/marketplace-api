const express = require('express');
const router = express.Router();

const Product = require('../models/product');
const Category = require('../models/category');

router.get('/',(req,res)=>{
    res.send("Funciona");
});

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


router.get('/api/categories',(req,res)=>{
    Category.find({}).exec((err,categories)=>{
        if(err){
            res.status(500).json({
                status:"Error",
                message:"Se presento un error"
            });
        }

        if(!categories){
            res.status(404).json({
                status:"Error",
                message:"No hay categorias en la Base"
            });
        }

        res.status(200).json({
            status:"OK",
            categories
        });

    });
});

router.post('/api/categories',(req,res)=>{
    const {name} = req.body;

    const category = new Category();

    category.nameCategory = name;

    category.save((err,categoryStored)=>{
        if(err || !categoryStored){
            res.status(404).json({
                status:"Error",
                message:"No se pudo guardar los datos"
            });
        }
        res.status(200).json({
            status:"OK",
            message:"Datos Guardados"
        });
    });
});


module.exports = router;