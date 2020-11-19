import express from 'express';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import Canal from './models/canal.js'
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './rotes/user.js';
import gameRouter from './rotes/game.js';

mongoose.connect(process.env.DB ?? 'mongodb://localhost:27017/self', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.set('view engine', 'hbs');

const MongoStore = connectMongo(session);

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: true,
    key: 'selfvolw'
  },
  store: new MongoStore({
    mongooseConnection: mongoose.createConnection(process.env.DB ?? 'mongodb://localhost:27017/self', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  })
}));

app.use((req,res,next) => {
  if (req.session.username) {
    res.locals.username = req.session.username;
    res.locals.userId = req.session.userId;// если в сессии есть юзер записываем его в объект res.locals который доступен всем hbs
  };
  next();
});

app.get('/', async (req, res) => {
  const canals = await Canal.find();
  return res.render('index', {canals});
});

app.use('/user', userRouter);
app.use('/game', gameRouter);
app.listen(process.env.PORT ?? 3000);


// gameRouter
