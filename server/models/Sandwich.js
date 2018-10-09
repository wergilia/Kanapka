const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const sandwichSchema = new Schema({
  imgName: {type: String, default: 'default-avatar.jpeg'},
  imgPath: {type: String, default: '/images/default-avatar.jpeg'},
  base: [{type: String, enum:["rye", "white", "whole"]}],
  middle:[{type: String, enum:["tomatoes", "lettuce", "cheese", "goat cheese", "feta", "tuna"]}],
  toppings: [{type: String, enum:["tomatoes", "lettuce", "cheese"]}],
  condiments: [{type: String, enum:["mayonese", "mustard", "horseradish"]}]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Sandwich = mongoose.model('Sandwich', sandwichSchema);
module.exports = Sandwich;