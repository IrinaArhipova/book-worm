const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const Login = require('../../views/Login');
const Home = require('../../views/Home');
router
  .route('/login')
  .get(async (req, res) => {
    res.renderComponent(Login);
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    try {
      if (email && password) {
        const user = await User.findOne({ where: { email } });
        if (user) {
          if (await bcrypt.compare(password, user.password)) {
            if (!req.session.userId) {
              req.session.userId = user.id;
            }
            return res.send('ok');
          } else {
            res.json('Wrong email or password');
          }
        } else {
          res.json('Cant find user');
        }
      }
    } catch ({ message }) {
      res.json(message);
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
