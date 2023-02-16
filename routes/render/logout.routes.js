const router = require('express').Router();

router.route('/').get((req, res) => res.clearCookie('user_sid').json({ message: "You're logged out" }));

module.exports = router;
