const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
  campsite: {
    type: String,
    required: true,
  },
  amenities: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const Location = model('Location', locationSchema);

module.exports = Location;
