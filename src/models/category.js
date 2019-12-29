const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = Schema({
    nameCategory: String
});


module.exports = mongoose.model('Category',CategorySchema);