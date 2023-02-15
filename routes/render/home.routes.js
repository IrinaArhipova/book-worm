const router = require('express').Router();
const { User } = require('../../db/models');
const Home = require('../../views/Home');

router.route('/').get(async (req, res) => {
  const users = await User.findAll({ raw: true });
  res.renderComponent(Home, { users });
});

module.exports = router;
