const router = require('express').Router();
const { Book, User } = require('../../db/models');
const MyBooks = require('../../views/MyBooks');

router.route('/')
  .get(async (req, res) => {
    try {
      const { userId } = req.session;
      const books = await Book.findAll({ where: { userId } });
      const user = await User.findOne({ where: { id: userId } });
      res.renderComponent(MyBooks, { books, user });
    } catch ({ message }) {
      res.json(message);
    }
  });

module.exports = router;
