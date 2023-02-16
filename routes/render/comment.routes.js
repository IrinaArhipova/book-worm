const router = require('express').Router();
const { User, Comment, Book } = require('../../db/models');
const CommentView = require('../../views/Comment');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await Comment.findAll({ where: { bookId: id } });
    const book = await Book.findOne({ where: { id } });
    const comment = await Comment.findOne({ where: { bookId: id }, include: { model: User, key: 'userId' } });
    res.renderComponent(CommentView, { comments, comment, book });
  } catch ({ message }) {
    res.json(message);
  }
});
//   router.post('/', async (req, res) => {
//     try {
//     } catch ({ message }) {
//       res.json(message);
//     }
//   });
// });

module.exports = router;
