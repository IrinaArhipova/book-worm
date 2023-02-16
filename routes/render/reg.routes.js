const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const Reg = require('../../views/Reg');

router
  .route('/')
  .get(async (req, res) => {
    res.renderComponent(Reg);
  })
  .post(async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const hashPassword = await bcrypt.hash(password, 10);
      if (name && email && password) {
        const user = await User.findOne({ where: { email } });
        if (user) {
          res.json('User already exists');
        }
        const newUser = await User.create({
          name,
          email,
          password: hashPassword,
        });
        if (!req.session.userId) {
          req.session.userId = newUser.id;
        }
        res.json('ok');
      } else {
        res.json('Cant reg user');
      }
    } catch ({ message }) {
      res.json(message);
    }
  });

module.exports = router;
