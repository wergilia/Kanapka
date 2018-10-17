const mongoose = require("mongoose");
const User = require("../models/User");
const Sandwich = require('../models/Sandwich')

mongoose
  .connect('mongodb://localhost/kanapka', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to Mongo', err)
  });

  const sandwiches = [
        {
            "imgPath": "./images/florence-pecorino-parsley-anchovy-sandwich.webp",
            "name": "Pecorino parsley anchovy sandwich",
            "base": "Whole Wheat",
            "middle": ["Pecorino", "Anchovy"],
            "toppings": null,
            "condiments": ["Parsley", "Olive Oil"],
            "author": "5bbce2f2cc9747787cc25565",
            
        },
        
        { 
            "imgPath": "./images/freshVeggieBagel.jpg",
            "name": "Fresh Veggie Bagel",
            "base": "Bagel",
            "middle": "Ricotta", 
            "toppings": ["Tomato", "Lettuce", "Cucumber", "Pepper"], 
            "condiments": ["Black Pepper", "Mustard"],
            "author": "5bbdd4f4c655dc20642835a1",
            
        },
        
        { 
            "imgPath": "./images/kanapka-z-kozim-serem-burakiem-i-orzechami-wloskimi.jpg",
            "name": "Goat cheese, beetroot and walnuts",
            "base": "Rye", 
            "middle": "Goat Cheese", 
            "toppings": ["Baked Beetroot", "Onion", "Walnuts"], 
            "condiments": ["Olive Oil", "Mustard"],
            "author": "5bbdda2a9948f0265fecbc52",
            
        }
    ];


  Sandwich.collection.drop();

  Sandwich.create(sandwiches, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${sandwiches.length} sandwiches`)
    mongoose.disconnect();
})