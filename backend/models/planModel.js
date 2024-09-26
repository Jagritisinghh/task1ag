const mongoose = require('mongoose');
const Feature = require('./featureModel');

const PlanSchema = new mongoose.Schema({
    plan: {
        type: String,
    },
    price: {
        type: Number,
    },
    features: [Feature.schema] // Embedding the features schema
});

module.exports = mongoose.model("Plan", PlanSchema);
