const router = require('express').Router();
const { Book } = require('../../db/models');
const Trends = require('../../views/Trends');
router.route('/').get(async (req, res) => {
  const books = await fetch(
    'https://api.airtable.com/v0/appybL1OJaEEIvAdS/Books?api_key=keymAugpaEvXsyGBr'
  );
  const { records } = await books.json();
  const booksArr = records.map((el) => el.fields);
  res.renderComponent(Trends, { booksArr });
});
module.exports = router;
