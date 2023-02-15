const router = require('express').Router();

const { User } = require('../../db/models');
const Reg = require('../../views/Reg');

router
  .route('/')
  .get(async (req, res) => {
    res.renderComponent(Reg);
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    await User.create(req.body);
    if (!req.session.email) {
      req.session.email = email;
    }
    res.json('ok');
  });

module.exports = router;
