const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body);
  return res.send('dsf');
});

module.exports = router;
