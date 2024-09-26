const mongoose = require('mongoose');


const featureSchema = new mongoose.Schema({
    category: { 
        type: String 
    },
    items: [{ 
        type: String 
    }]
});

module.exports = mongoose.model("Feature", featureSchema);
