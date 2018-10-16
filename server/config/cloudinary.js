
require('dotenv').config();
const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'kanapka',
  allowedFormats: ['jpg', 'png', 'jpeg', 'webp'],
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  }
});

const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;