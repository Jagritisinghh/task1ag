// routes/feature.js
const express = require('express');
const router = express.Router();
const User = require('../models/usermodel'); 

// getuser




// Update user's plan
router.put('/users/:id/update-plan', async (req, res) => {
  const { id } = req.params;
  const { selectedPlan } = req.body;
  console.log("updated plan",selectedPlan);

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { plan: selectedPlan },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Plan updated successfully', user });
  } catch (err) {
    res.status(500).json({ message: 'Error updating plan', error: err.message });
  }
});



module.exports = router;
