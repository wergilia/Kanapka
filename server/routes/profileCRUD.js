const uploadCloud = require('../config/cloudinary');
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Post = require('../models/Post')
const passport = require('passport');
// const _ = require('lodash');


router.get('/:id', (req, res, next) => {
  User.find({ userId: req.user._id })
    .then(data => res.status(200).json(data))
    .catch(e => next(e))
})

router.post('/edit/:id', uploadCloud.single('photo'), (req, res, next) => {
  const { username, password, email } = req.body;

  User.findByIdAndUpdate(req.params.id, { name: username, email, imgPath: req.file.url }, { new: true })
    .then((user) =>
      res.status(200).json({ message: `Your profile has been updated successfully.`, user })
    )
    .catch(err => {
      console.log(err)
      res.json(err);
    })
})

router.post('/newPost'), (req, res, next) => {  

  Post.create({
    title: title.req.body,
    text: text.req.body,
    sandwich: sandwich.req.body
  })
  .then(res => {
    res.json(res)
  })
  .catch(err => {
    console.log(err)
  })
}



module.exports = router


