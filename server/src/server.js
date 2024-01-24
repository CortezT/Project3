const express = require('express');
const mongoose = require('mongoose');
const Destination = require('./models/DestinationModel');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a route to fetch destinations
app.get('/destinations', async (req, res) => {
  try {
    // Fetch all destinations from the database
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});