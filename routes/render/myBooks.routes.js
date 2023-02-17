const router = require('express').Router();
const Book = require('../../db/models/book');
const MyBooks = require('../../views/MyBooks');

router.route('/')
  .get(async (req, res) => {
    try {
      const userId = req.session.userID;
      const books = await Book.findall({ where: { userId } });
      res.renderComponent(MyBooks, { books });
    } catch (error) {
      res.json(error);
    }
  });
