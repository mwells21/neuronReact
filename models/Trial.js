const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const ItemSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    lng:{
        type: Number,
        required: false
    },

    lat: {
        type: Number,
        required: false
    },

    contact: {
        type: String,
        required: false
    }
    
  });
  
  module.exports = Trial = mongoose.model('trial', ItemSchema);