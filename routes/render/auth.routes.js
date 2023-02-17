const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const Reg = require('../../views/Reg');
const Login = require('../../views/Login');

router.get('/reg', (req, res) => {
  res.renderComponent(Reg);
});

router.get('/login', (req, res) => {
  res.renderComponent(Login);
});

router.post('/reg', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (name && password && email) {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hash });
        req.session.userId = newUser.id;
        res.json({ message: 'ok' });
      } else {
        res.json({ message: 'User is already exists' });
      }
    }
  } catch ({ message }) {
    res.json(message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        res.json({ message: 'Неверный email или пароль!' });
      }
      const compare = await bcrypt.compare(password, user.password);
      if (user && compare) {
        req.session.userId = user.id;
        res.json({ message: 'ok' });
      } else {
        res.json({ message: 'Cant find user!' });
      }
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.route('/logout').get((req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('user_sid').redirect('/');
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
