require('dotenv').config();
require('./config/cloudinary');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cors = require('cors');
const flash = require("connect-flash");

const { DBURL } = process.env;
mongoose.Promise = Promise;
mongoose
  .connect(DBURL)
  .then(() => {
    console.log(`Connected to Mongo on ${DBURL}`)
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

// mongoose
//   .connect('mongodb://localhost/server', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });


const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
// var whitelist = [
//   'http://localhost:3000'
// ];
// var corsOptions = {
//   origin: function(origin, callback){
//       var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
//       callback(null, originIsWhitelisted);
//   },
//   credentials: true
// };
// app.use(cors(corsOptions));

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));


// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

app.use(session({
  secret: 'secret polonia react abstraction', // words para mezclar con salt, puede ser pepe
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 2419200000
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(flash());
require('./passport')(app);



app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



const authRouter = require('./routes/auth');
const sandRouter = require('./routes/sandwichCRUD');
const profileRouter = require('./routes/profileCRUD');
// const genericCrud = require('./routes/genericCRUD');
app.use('/auth', authRouter);
app.use('/sandwich', sandRouter);
app.use('/profile', profileRouter);
// app.use('/api/news', genericCrud(require('./models/News')));
// app.use('/api/user', genericCrud(require('./models/User')));



module.exports = app;