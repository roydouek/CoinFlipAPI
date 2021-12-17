const express = require('express');

const router = express.Router();

function getRnd() {
  return Math.random() > 0.5;
}

router.get('/', (req, res) => {
  if (getRnd())
    res.render('indexH')
  else res.render('indexT')
});

module.exports = router;
