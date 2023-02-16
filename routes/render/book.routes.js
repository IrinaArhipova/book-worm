const router = require('express').Router();
const { Book, Comment } = require('../../db/models');

router.route('/')
  .post(async (req, res) => {
    try {
      const {
        nameBook, autor, comment, img,
      } = req.body;
      const { userId } = req.session;
      const book = {
        nameBook: nameBook.value, autor: autor.value, img: img.value, userId: userId.value,
      };
      if (nameBook && autor && comment && img) {
        const createdBook = await Book.create(book);
        const bookId = createdBook.id;
        const createdComment = await Comment.create({ userId, bookId, comment });
        const newCommentHtml = res.renderComponent(Comment, { createdComment }, { htmlOnly: true});
        const newBookHtml = res.renderComponent(Book, { createdBook }, { htmlOnly: true});
        req.session.addedBooks = [].unshift(createdBook);
        req.session.addedComments = [].unshift(createdComment);
        res.json({ newBookHtml, newCommentHtml });
      }
    } catch (error) {
      res.json(error);
    }
  });

module.exports = router;
