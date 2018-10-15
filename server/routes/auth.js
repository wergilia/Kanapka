const uploadCloud = require('../config/cloudinary');
const express = require('express');
const passport = require('passport');
const router  = express.Router();
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
const User = require('../models/User');



const login = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, err => {
      console.log('req.login ')
      console.log(user)
      
      if(err) {
        reject(new Error('Something went wrong'))
      }else{
        resolve(user);
      }
    })
  })
}


// SIGNUP
router.post('/signup', uploadCloud.single('photo'), (req, res, next) => {

  console.log(req)
  const {username, password, email} = req.body;
  const imgPath = req.file.url
  

  // Check for non empty user or password
  if (!username || !password){
    next(new Error('You must provide valid credentials'));
  }

  // Check if user exists in DB
  User.findOne({ username })
  .then( user => {
    if (user) throw new Error('Username already exists');
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    console.log(imgPath)

    const newUser = new User({
      username,
      password: hashPass,
      email,
      imgPath
    }).save()
    .then( newUser => login(req, newUser)) // Login the user using passport
    .then( user => res.json({status: 'signup & login successfully', user})) // Answer JSON
  })
  .catch(e => {console.log(e);next(e)});
});


router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    
    // Check for errors
    if (err) next(new Error('Something went wrong')); 
    if (!theUser) next(failureDetails)

    // Return user and logged in
    login(req, theUser).then(user => res.status(200).json(req.user));

  })(req, res, next);
});


router.get('/currentuser', (req,res,next) => {
  if(req.user){
    res.status(200).json(req.user);
  }else{
    next(new Error('Not logged in'))
  }
})


router.get('/logout', (req,res) => {
  req.logout();
  res.status(200).json({message:'logged out'})
});


router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
})

module.exports = router;
