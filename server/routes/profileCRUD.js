const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');

router.get('/', (req, res, next) => {
    User.find()
        .then(data => res.status(200).json(data))
        .catch(err => console.log(err))
})

module.exports = router