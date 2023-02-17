const router = require('express').Router();

const { User, Rating, Book } = require('../../db/models');

router.route('/:bookId/:rating').get(async (req, res) => {
  const userId = req.session.userId;
  await Rating.create({
    userId: userId,
    bookId: req.params.bookId,
    rating: req.params.rating,
  });
  const avgArr = await Rating.findAll({
    where: { bookId: req.params.bookId },
    raw: true,
  });
  const avgNum = avgArr.map((el) => el.rating);
  const avgOne = avgNum.reduce((a, b) => a + b) / avgNum.length;
  res.json(`Thanks! The avg score is:${avgOne.toFixed(1)}`);
});

module.exports = router;
