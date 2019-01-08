const express = require('express');
const router = express.Router();

// Trial Model
const Trial = require('../../models/Trial');

// @route   GET api/trials
// @desc    Get All Trials
// @access  Public
router.get('/', (req, res) => {
  Trial.find()
    .then(trials => res.json(trials));
});


module.exports = router;