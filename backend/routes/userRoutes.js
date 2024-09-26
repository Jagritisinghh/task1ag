const express = require('express');
const router = express.Router();
const { updateUserPlan, createDummyUser } = require('../controllers/userController');

// Define routes
router.put('/users/:id/update-plan', updateUserPlan);

// Optionally call createDummyUser when the server starts
createDummyUser();

module.exports = router;
