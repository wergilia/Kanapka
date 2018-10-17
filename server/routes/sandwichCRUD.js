const uploadCloud = require('../config/cloudinary');
const express = require('express');
const router = express.Router();
const Sandwich = require('../models/Sandwich')

router.get('/all', (req, res, next) => {
    Sandwich.find()
        .then(sandwiches => res.status(200).json(sandwiches))
        .catch(err => console.log(err))
})

router.post('/create', uploadCloud.single('photo'), (req, res, next) => {
    const { name, base, author } = req.body;
    const toppings = JSON.parse(req.body.toppings);
    const middle = JSON.parse(req.body.middle);
    const condiments = JSON.parse(req.body.condiments);
    console.log(toppings);
    const imgPath = req.file.url;
    console.log(req.file)
    const newSandwich = new Sandwich({
        name,
        base,
        middle,
        toppings,
        condiments,
        imgPath,
        author
    }).save()
        .then(Sandwich => {
            res.status(200).json({status: "Sandwich created"})

        })
        
        .catch(e => console.log(e))
});

router.put('/edit/:sandwichId',  uploadCloud.single('photo'), (req, res, next) => {
    console.log(req.params.sandwichId)
    console.log(req.body.author)
    console.log(req.body.photo)
    console.log(req.body)

    Sandwich.findByIdAndRemove(req.params.sandwichId)
        .then(() => console.log("goooood"))
        .catch(e => console.log("ODIOOOOOO"))

        const { name, base, author } = req.body;
        const toppings = JSON.parse(req.body.toppings);
        const middle = JSON.parse(req.body.middle);
        const condiments = JSON.parse(req.body.condiments);
        
        const imgPath = req.file.url;

        const newOne = {
            name,
            base,
            author,
            toppings,
            middle, 
            condiments,
            imgPath
        }

    const newSandwich = new Sandwich(newOne)
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