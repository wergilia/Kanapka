const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const sandwichSchema = new Schema({
  name: String,
  imgPath: {type: String, default: '/images/default-avatar.jpeg'},
  base: [{type: String, enum:["Rye", "White", "Whole Wheat", "Bagel"]}],
  middle:[{type: String, enum:["Pecorino", "Ricotta", "Gouda", "Cheese", "Goat Cheese", "Feta", "Anchovy", "Tuna", "Ham", "Salami"]}],
  toppings: [{type: String, enum:["Tomato", "Lettuce", "Olives", "Pepper", "Cucumber", "Onion", "Baked Beetroot", "Walnuts"]}],
  condiments: [{type: String, enum:["Mayonese", "Mustard", "Horseradish", "Parsley", "Olive Oil", "Butter", "Black Pepper"]}],
  author: {type:Schema.Types.ObjectId, ref:'User'},
}, {
  
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Sandwich = mongoose.model('Sandwich', sandwichSchema);
module.exports = Sandwich;