/* eslint-disable max-len */
const router = require('express').Router();
const { User, Comment, Book } = require('../../db/models');
const CommentView = require('../../views/Comment');
const TableComment = require('../../views/TableComment');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await Comment.findAll({ where: { bookId: id }, include: { model: User, key: 'userId' }, raw: true });
    const book = await Book.findOne({ where: { id } });
    const user = await User.findOne({ where: { id: req.session.userId } });
    res.renderComponent(CommentView, {
      comments, book, user,
    });
  } catch ({ message }) {
    res.json(message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { comment, bookId } = req.body;
    console.log(req.body);
    if (comment && bookId) {
      const newComments = await Comment.create({ userId: req.session.userId, bookId, comment });
      const comments = await Comment.findAll({
        where: { bookId }, include: { model: User, key: 'userId' }, raw: true,
      });
      res.json({ html: res.renderComponent(TableComment, { comments }, { htmlOnly: true }) });
    }
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
