const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const Login = require('../../views/Login');
const Home = require('../../views/Home');
router
  .route('/')
  .get(async (req, res) => {
    res.renderComponent(Login);
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      if (candidate.password === password) {
        if (!req.session.email) {
          req.session.email = email;
        }
        const users = await User.findAll({ raw: true });
        return res.renderComponent(Home, { users, email });
      }
    }
    res.json('Cant find user');
  });

module.exports = router;
