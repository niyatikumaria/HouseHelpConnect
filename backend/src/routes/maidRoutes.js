const express = require('express');
const router = express.Router();
const maidController = require('../controllers/maidController');

router.post('/', maidController.registerMaid);
router.get('/', maidController.getMaids);

module.exports = router;
