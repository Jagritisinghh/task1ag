const User = require('../models/userModel');

// Function to update user's plan
const updateUserPlan = async (req, res) => {
    const { id } = req.params;
    const { selectedPlan } = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, { plan: selectedPlan }, { new: true });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'Plan updated successfully', user });
    } catch (err) {
        res.status(500).json({ message: 'Error updating plan', error: err.message });
    }
};

// Function to create a dummy user
const createDummyUser = async () => {
    try {
        const existingUser = await User.findOne({ username: "user567" });

        if (!existingUser) {
            const user = await User.create({
                name: "AghUser567",
                email: "user567@gmail.com",
                username: "user567",
                plan: "Basic" // Set a default plan
            });
            console.log('Dummy user created:', user);
        } else {
            console.log('Dummy user already exists:', existingUser);
        }
    } catch (error) {
        console.error('Error creating dummy user:', error.message);
    }
};

module.exports = { updateUserPlan, createDummyUser };
