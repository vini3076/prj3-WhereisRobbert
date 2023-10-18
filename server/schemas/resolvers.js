import { User, Campground } from "../models/index.js";
// const { signToken, AuthenticationError } = require("../utils/city");
import { signToken } from "../utils/auth.js";
import { AuthenticationError } from "apollo-server-express";
import dotenv from 'dotenv';
dotenv.config();


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).populate('savedCampgrounds');

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    getCamps: async(parent, {searchString}) => {
      console.log(process.env.API_KEY)
      const response = await fetch(`https://developer.nps.gov/api/v1/campgrounds?stateCode=CA&q=${searchString}&api_key=${process.env.API_KEY}`)


        if (!response.ok) {
          throw new Error('something went wrong!');
        }
       else{
          let data = await response.json()
        
          const items = (data.data)
         /* for(let i in data) { 
            items.push([i,data[i]]); 
         };  */
          
          const campData = items.map((camp) => ({
            campId: camp.id,
            URL: camp.url,
            name: camp.name,
            description: camp.description,
            reservationURL: camp.reservationUrl,
            fees: camp.fees[0].cost,
            images: camp.images[0]?.url,
          }));

          return campData
        }


        


    }
  },

  Mutation: {
    addUser: async (parent, {username, email, password}) => {
      const user = await User.create({username, email, password});
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    // prj3: changed saveBook = saveLocation; bookData = locationData; auth = city
    addCampGround: async (parent, { campgroundData }, context) => {
      console.log('Michael said add campground')
      if (context.user) {
        console.log(campgroundData)
        const newCampground = await Campground.create({
          ...campgroundData
        })
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
               //   changed: savedBooks to saveLocation
          { $push: { savedCampgrounds: newCampground._id } },
          { new: true }
        );

        return newCampground;
      }

      throw new AuthenticationError('could not create campground');
    },
    // removeLocation: async (parent, { locationId }, context) => {
    //   if (context.user) {
    //     const updatedUser = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //     // prj3: changed savedBooks = saveLocation
    //       { $pull: { savedLocation: { locationId } } }, 
    //       { new: true }
    //     );

    //     return updatedUser;
    //   }

    //   throw AuthenticationError;
    // },
  },
};
export default resolvers;








