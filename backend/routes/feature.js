// routes/feature.js
const express = require('express');
const router = express.Router();
const Feature = require('../models/plans'); // Ensure this path is correct

// GET /api/features - Retrieve all feature plans
router.get('/api/features', async (req, res) => {
    try {
        const features = await Feature.find({});
        console.log("features router:" ,features);
        res.status(200).json({
            message: "Features fetched successfully",
            data: features
        });
    } catch (error) {
        console.error("Error fetching features:", error);
        res.status(500).json({
            message: "An error occurred while fetching features.",
            error: error.message
        });
    }
});

module.exports = router;
