const router = require('express').Router();
const { User } = require('../../db/models');
const Home = require('../../views/Home');

router.route('/').get(async (req, res) => {
  try {
    const users = await User.findAll({ raw: true });
    if (req.session.userId) {
      const id = req.session.userId;
      console.log(id)
      const user = await User.findOne({ where: id });
      console.log(user);
      res.renderComponent(Home, { users, user });
    } else {
      res.renderComponent(Home, { users });
    }
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;