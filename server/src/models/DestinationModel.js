// Import mongoose
const mongoose = require('mongoose');

// Define the Destination schema
const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    attractions: [String],
    accommodationOptions: [String],
    localActivities: [String],
    // Add more fields as needed based on your requirements
});

// Create a Destination model using the schema
const Destination = mongoose.model('Destination', destinationSchema);

// Export the Destination model
module.exports = Destination;