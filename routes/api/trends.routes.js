const router = require('express').Router();
const { User } = require('../../db/models');
const Trends = require('../../views/Trends');

router.route('/').get(async (req, res) => {
  const books = await fetch(
    'https://api.airtable.com/v0/appybL1OJaEEIvAdS/Books?api_key=keymAugpaEvXsyGBr',
  );
  const { records } = await books.json();
  const user = await User.findByPk(req.session.userId);
  const booksArr = records.map((el) => el.fields);
  res.renderComponent(Trends, { booksArr, user });
});
module.exports = router;
