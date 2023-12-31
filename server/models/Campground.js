import { Schema, model } from 'mongoose';
//const { searchCampgrounds, getCamps } = require('../utils/API');

const campGroundSchema = new Schema({
  URL: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  }, 
  reservationURL: {
    type: String,
  },
  fees: {
    type: Number
  },
  images: [{
    type: String,
  }],
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
// we can add more fields here later if we want
});
// static method to search campgrounds using nps API
/* locationSchema.statics.searchCampgrounds = async (query) => {
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
}; */

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

//const Campground = model('Campground', campGroundSchema);

const Campground = model('Campground', campGroundSchema)

export default Campground