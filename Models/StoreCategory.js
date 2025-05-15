const mongoose = require('mongoose');

const StoreCategory = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },

    description:{
        type: String,
        required: true,
    },

    icon:{
        type: String,
    },

},{timestamps: true});

module.exports = mongoose.model("StoreCategory", StoreCategory);