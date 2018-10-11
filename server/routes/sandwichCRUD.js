const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');
const Sandwich = require('../models/Sandwich')

router.get('/all', (req, res, next) => {
    Sandwich.find()
        .then(sandwiches => res.status(200).json(sandwiches))
        .catch(err => console.log(err))
})

// router.post('/all', parser.single('picture'), (req, res,next) => {
//     Sandwich.findOneAndUpdate({}, { pictureUrl: req.file.url })
//     .then(() => {
//         res.json({
//             success: true,
//             pictureUrl: req.file.url
//         })
//     })
// })

module.exports = router