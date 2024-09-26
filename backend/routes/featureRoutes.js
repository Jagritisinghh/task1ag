const express = require('express');
const router = express.Router();
const { createFeatures, getFeatures } = require('../controllers/featureController');

// Define routes
router.get('/api/featuresInitiation', createFeatures);
router.get('/api/features', getFeatures);

module.exports = router;
