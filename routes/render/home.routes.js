const router = require('express').Router();

const { User, Book } = require('../../db/models');
const Home = require('../../views/Home');

router.route('/').get(async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId);
    const books = await Book.findAll({ raw: true });
    res.renderComponent(Home, { user, books });
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
