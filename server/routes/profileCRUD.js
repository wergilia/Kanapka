const uploadCloud = require('../config/cloudinary');
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('passport');
const _ = require('lodash');


router.get('/:id', (req, res, next) => {
    User.find({userId: req.user._id})
    .then(data => res.status(200).json(data))
    .catch(e => next(e))
  })

router.post('/edit/:id', uploadCloud.single('photo'), (req,res,next) => {
 
  const {username, password, email} = req.body;
  // const imgPath = req.file.url

  console.log(req.body)
      
    User.findByIdAndUpdate(req.params.id, {name: username, email, imgPath:req.file.url}, {new:true})
    .then((user) => {
        res.json({message: `${req.params.username} profile has been updated successfully.`, user});
      })
      .catch(err => {
        console.log(err)
        res.json(err);
      })
      

// router.get('/:id', (req, res, next) => {

//     User.findById(req.params.id)
//         .then(data => res.status(200).json(data))
//         .catch(err => console.log(err))
// })

// router.post('/edit/:id', (req, res, next)=> {
//     console.log("holaaa")
//     console.log(req.params.id)
 
//     User.findById(req.params.id)
//     .then(res => {
//         console.log(res)
//         res.json({message: 'Your profile has been updated successfully'})
//     })
//     .catch(err => {
//         res.json(err);
//     }) 
// })




//     const {id} = req.params;
//     const object = _.pickBy(req.body, (e,k) => paths.includes(k));
//     const updates = _.pickBy(object, _.identity);
//     console.log(updates);
//    User.findByIdAndUpdate(id, updates ,{new:true})
//    console.log(updates)
//         .then( obj => {
//             res.redirect('/profile/:id')
//             res.status(200).json({status:'updated',obj});
//         })
//         .catch(e => next(e))
})



module.exports = router





// router.patch('/:id',(req,res,next) => {
//     const {id} = req.params;
//     const object = _.pickBy(req.body, (e,k) => paths.includes(k));
//     const updates = _.pickBy(object, _.identity);
//     console.log(updates);
//     Model.findByIdAndUpdate(id, updates ,{new:true})
//         .then( obj => {
//             res.status(200).json({status:'updated',obj});
//         })
//         .catch(e => next(e))
// })


// router.delete('/:id', (req, res, next) => {
//     User.findByIdAndRemove(req.params.id)
//     .then(() => {
//         res.json({message: 'Your profile has been deleted'})
//     })
//     .catch( err => {
//         res.json(err)
//     })
// })
