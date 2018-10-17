const uploadCloud = require('../config/cloudinary');
const express = require('express');
const router = express.Router();
const Sandwich = require('../models/Sandwich')

router.get('/all', (req, res, next) => {
    Sandwich.find()
        .then(sandwiches => res.status(200).json(sandwiches))
        .catch(err => console.log(err))
})

router.post('/', uploadCloud.single('photo'), (req, res, next) => {
    const { name, base, middle, toppings, condiments } = req.body;
    console.log(req.body)
    //const imgPath = req.file.url;
    const newSandwich = new Sandwich({
        name,
        base,
        middle,
        toppings,
        condiments,
        //imgPath: req.file.url
    }).save()
        .then(Sandwich => res.status(200).json(Sandwich))
        .catch(e => console.log(e))
});

router.put('/edit/:sandwichId', (req, res, next) => {
    console.log(req.params.sandwichId)
    console.log(req.body)
    Sandwich.findByIdAndRemove(req.params.sandwichId)
        .then(() => console.log("goooood"))
        .catch(e => console.log("ODIOOOOOO"))

    const create = {
        name: req.body.name,
        base: req.body.base,
        middle: req.body.middle,
        toppings: req.body.toppings,
        condiments: req.body.condiments,
        imgPath: req.file.url
        
    }
    const newSandwich = new Sandwich(create)
    newSandwich.save()
        .then(created => { console.log(created); return res.status(200).json(created) })
        .catch(e => console.log(e))
})



router.get('/:sandwichId', (req,res,next) => {
    Sandwich.findById(req.params.sandwichId)
      .then(sandwich => {
          return res.status(200).json(sandwich);
        })
        .catch(err => {
          res.json(err);
        }) 
  })


module.exports = router