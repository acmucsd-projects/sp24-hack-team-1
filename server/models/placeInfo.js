const mongoose = require('mongoose');

// Creating a schema–a "blueprint" for our data
const placeInfoSchema = new mongoose.Schema({
  title: { type: String }, 
  imageURL: { type: String },
  description: { type: String }
});

// Create a model for our PlaceInfo based on the schema
const PlaceInfo = mongoose.model('PlaceInfo', placeInfoSchema);

module.exports = PlaceInfo;