const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

router.get('/:id', (req, res, next) => {

    User.findById(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => console.log(err))
})

router.post('/edit/:id', (req, res, next)=> {
    console.log("holaaa")
    console.log(req.params.id)
 
    User.findById(req.params.id)
    .then(res => {
        console.log(res)
        res.json({message: 'Your profile has been updated successfully'})
    })
    .catch(err => {
        res.json(err);
    }) 
})

router.delete('/:id', (req, res, next) => {
    User.findByIdAndRemove(req.params.id)
    .then(() => {
        res.json({message: 'Your profile has been deleted'})
    })
    .catch( err => {
        res.json(err)
    })
})

module.exports = router