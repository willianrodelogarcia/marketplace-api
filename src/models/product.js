const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = Schema({
    urlPhotoProduct: String, 
    nameProduct: String,
    price: Number,
    description: String,
    category:String
});


module.exports = mongoose.model('Product',ProductSchema);