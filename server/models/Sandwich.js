const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const sandwichSchema = new Schema({
  name: String,
  imgName: {type: String, default: 'default-avatar.jpeg'},
  imgPath: {type: String, default: '/images/default-avatar.jpeg'},
  base: [{type: String, enum:["rye", "white", "whole wheat", "bagel"]}],
  middle:[{type: String, enum:["pecorino", "ricotta", "gouda", "cheese", "goat cheese", "feta", "anchovy", "tuna", "ham", "salami"]}],
  toppings: [{type: String, enum:["tomato", "lettuce", "olives", "pepper", "cucumber", "onion", "baked beetroot", "walnuts"]}],
  condiments: [{type: String, enum:["mayonese", "mustard", "horseradish", "parsley", "olive oil", "butter", "black pepper"]}],
  author: {type:Schema.Types.ObjectId, ref:'User'},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Sandwich = mongoose.model('Sandwich', sandwichSchema);
module.exports = Sandwich;