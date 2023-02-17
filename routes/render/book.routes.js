const router = require('express').Router();
const { Book, Comment } = require('../../db/models');
const CardBook = require('../../views/CardBook');

router.route('/')
  .post(async (req, res) => {
    try {
      const {
        nameBook, autor, comment, img,
      } = req.body;
      const { userId } = req.session;
      const book = {
        nameBook, autor, img, userId,
      };
      if (nameBook && autor && comment && img) {
        const createdBook = await Book.create(book);
        // req.app.locals.allBooks = await Book.findAll();
        const bookId = createdBook.id;
        // const createdComment = await Comment.create({ userId, bookId, comment });
        res.json(res.renderComponent(CardBook, { createdBook }, { htmlOnly: true }));
      }
    } catch (error) {
      res.json(error);
    }
  });

module.exports = router;
