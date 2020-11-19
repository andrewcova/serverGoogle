import express from 'express';
import User from '../models/user.js'
const router = express.Router();

router.get('/registration', (req, res) => {
  return res.render('user/registration');
});

router.put('/registration', async (req, res) => {

  const { name, password, email } = req.body;
  console.log(name, password, email);
  try {
    const user = await new User({ name, password, email });
    await user.save();
  } catch (error) {
    console.error(error);
    return res.status(404).end();
  }
  res.status(200).end();
});

router.get('/login', (req, res) => {
  const user = req.query;

  return res.render('user/login', user);
});
/////////////////////// a89852654645@gmail.com
router.post('/login', async (req, res) => {
  const { password, email } = req.body;
  // console.log(password, email);
  const user = await User.findOne({password, email });
  console.log(user);
  if(user.name){
    return res.json(user);
  }

  const useremail = await User.findOne({ email });
  if (useremail) {
    return res.send('No corect password');
  }
  res.send('No corect email');
});
// router.post('/login', async (req, res) => {
//   const { password, email } = req.body;
//   const user = await User.findOne({password, email });
//   if(user.name){
//     req.session.username = user.name;
//     req.session.userId = user._id;
//     return res.redirect('/');
//   }

//   const useremail = await User.findOne({ email });
//   if (useremail) {
//     return res.render('login', {massege: 'No corect password'});
//   }
//   res.render('login', {massege: 'No User'});
// });

router.get('/logout', (req, res) => {
  req.session.destroy(); // удаляем сессию
  res.locals.username = '';
  res.status(200);
  res.render('index');
});

export default router;
