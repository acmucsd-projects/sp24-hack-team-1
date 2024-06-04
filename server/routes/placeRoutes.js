const express = require('express');
const router = express.Router();

const placeController = require('../controllers/placeController');

router.get('/plan', placeController.getPlace);
router.post('/plan', placeController.postPlace);

module.exports = router;