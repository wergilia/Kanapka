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
    const imgPath = req.file.url;
    const newSandwich = new Sandwich({
        name,
        base,
        middle,
        toppings,
        condiments,
        imgPath
    }).save()
        .then(Sandwich => res.status(200).json({ status: 'Sandwich has been created' }))
        .catch(e => next(e))
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
        //imgPath
    }
    const newSandwich = new Sandwich(create)
    newSandwich.save()
        .then(created => { console.log(created); return res.status(200).json(created) })
        .catch(e => console.log(e))
})





// router.post('/:id', parser.single('picture'), (req, res,next) => {
//     Sandwich.findOneAndUpdate({}, { pictureUrl: req.file.url })
//     .then(() => {
//         res.json({
//             success: true,
//             pictureUrl: req.file.url
//         })
//     })
// })

module.exports = router