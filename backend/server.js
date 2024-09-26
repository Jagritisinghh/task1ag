const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const featureRoutes = require('./routes/featureRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// Use routes
app.use(featureRoutes);
app.use(userRoutes);

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
