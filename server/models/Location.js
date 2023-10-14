const { Schema, model } = require('mongoose');
//const { searchCampgrounds, getCamps } = require('../utils/API');

const locationSchema = new Schema({
  campId: {
    type: String,
    required: true,
  },
  URL: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }, 
  reservationURL: {
    type: String,
    required: true,
  },
  fees: {
    cost: {
      type: Number,
      required: true,
    },
  },
  images: {
    type: String,
    required: true,
  },
// we can add more fields here later if we want
});
// static method to search campgrounds using nps API
locationSchema.statics.searchCampgrounds = async (query) => {
  const apiKey = 'M31Zo4yT0EEs0fQy35TtlXXXkdL0SEl0QzGu1d6U'; // this is Laurel's nps API key from the google doc
  const apiURL = `https://developer.nps.gov/api/v1/campgrounds?stateCode=CA&q=${query}&api_key=${apiKey}`;

  try {
    const response = await getCamps(apiURL);
    const data = await response.json();
    return data; // this will be an array of campgrounds
  } catch (err) {
    console.log(err);
    throw new Error('Failed to get campgrounds from the API.');
  }
};

/* // static method to save a campground to the database
locationSchema.statics.saveCampground = async (name, description) => {
  try {
    const newCamp = new campground({ name, description })
    const campground = await Location.create(campground);
    return campground;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to save campground to the database.');
  }
};
 */

const Location = model('Location', locationSchema);

module.exports = Location;

