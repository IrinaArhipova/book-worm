const router = require('express').Router();
const { Book, Comment } = require('../../db/models');
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
        // req.app.locals.allBooks = await Book.findAll();
        // const bookId = createdBook.id;
        // const createdComment = await Comment.create({ userId, bookId, comment });
        // console.log(createdBook);
        res.json({html: res.renderComponent(CardBook, { books }, { htmlOnly: true })});
      }
    } catch ({ message }) {
      res.json(message);
    }
  });

module.exports = router;
