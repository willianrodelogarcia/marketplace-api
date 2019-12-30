const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//the structure that the object will have in the database is defined
const ProductSchema = Schema({
    urlPhotoProduct: String, 
    nameProduct: String,
    price: Number,
    description: String,
    category:String
});


module.exports = mongoose.model('Product',ProductSchema);