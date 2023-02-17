/* eslint-disable max-len */
const router = require('express').Router();

const { User, Book, Favorite } = require('../../db/models');
const FavoriteView = require('../../views/Favorite');

router.get('/', async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId);
    const books = await Favorite.findAll({ where: { userId: req.session.userId }, include: { model: Book, key: 'bookId' }, raw: true });
    res.renderComponent(FavoriteView, { user, books });
  } catch ({ message }) {
    res.json(message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    const userId = await User.findOne({ where: { id: req.session.userId }, raw: true });
    const favorite = await Favorite.findOne({ where: { userId: userId.id, bookId: id }, raw: true });
    if (!favorite) {
      const newfavorite = await Favorite.create({ userId: userId.id, bookId: id });
    }
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;
