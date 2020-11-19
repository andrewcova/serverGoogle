import express from 'express';
// import User from '../models/user.js'
const router = express.Router();
import Question from '../models/question.js';
import Game from '../models/game.js';

router.get('/questions', async (req, res) => {
  const questions = await Question.find();
  console.log(questions);
  setTimeout(() =>  res.json(questions).end(), 3000);
  // return res.json(questions);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const games = await Game.find({user: id});
  console.log(games);

  return res.json(games);
});

router.post('/', (req, res) => {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', req.body );
  const {user, score} = req.body;
   const game = new Game({ user, score });
   game.save();
  return res.json(game);
});

export default router;
