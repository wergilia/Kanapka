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
            "img": "./images/florence-pecorino-parsley-anchovy-sandwich.webp",
            "name": "Pecorino parsley anchovy sandwich",
            "base": "whole wheat",
            "middle": ["pecorino", "anchovy"],
            "toppings": null,
            "condiments": ["parsley", "olive oil"],
            "author": "5bbce2f2cc9747787cc25565",
            "rating": null
        },
        
        { 
            "img": "./images/freshVeggieBagel.jpg",
            "name": "Fresh Veggie Bagel",
            "base": "bagel",
            "middle": "ricotta", 
            "toppings": ["tomato", "lettuce", "cucumber", "pepper"], 
            "condiments": ["black pepper", "mustard"],
            "author": "5bbdd4f4c655dc20642835a1",
            "rating": null
        },
        
        { 
            "img": "./images/kanapka-z-kozim-serem-burakiem-i-orzechami-wloskimi.jpg",
            "name": "Goat cheese, beetroot and walnuts",
            "base": "rye", 
            "middle": "goat cheese", 
            "toppings": ["baked beetroot", "onion", "walnuts"], 
            "condiments": ["olive oil", "mustard"],
            "author": "5bbdda2a9948f0265fecbc52",
            "rating": null
        }
    ];


  Sandwich.collection.drop();

  Sandwich.create(sandwiches, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${sandwiches.length} sandwiches`)
    mongoose.disconnect();
})

