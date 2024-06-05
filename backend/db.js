// db.js
const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

  
// Define schema for reviews
const reviewSchema = new mongoose.Schema({
  title: String,
  rating: Number,
  content: String,
  name: String,
  photo: String, // Store image as base64 string
  season: String,
  episode: String,
});

// Create model for reviews
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
