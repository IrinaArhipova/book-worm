const router = require('express').Router();
const { Book } = require('../../db/models');
const CardBook = require('../../views/CardBook');

router.route('/')
  .post(async (req, res) => {
    try {
      const {
        nameBook, autor, comment, img,
      } = req.body;
      if (nameBook && autor && comment && img) {
        const { userId } = req.session;
        const book = {
          nameBook, autor, img, userId,
        };
        const books = await Book.create(book);
        res.json({ html: res.renderComponent(CardBook, { books }, { htmlOnly: true }) });
      }
    } catch ({ message }) {
      res.json(message);
    }
  });

module.exports = router;
