// routes/findCriminal.js
const express = require('express');
const router = express.Router();
const { captureCriminal } = require('../controllers/findCriminalController');

router.post('/findCriminal', captureCriminal);

module.exports = router;
