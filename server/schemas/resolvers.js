const { User } = require("../models");
// const { signToken, AuthenticationError } = require("../utils/city");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    // prj3: changed saveBook = saveLocation; bookData = locationData; auth = city
    saveLocation: async (parent, { locationData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
               //   changed: savedBooks to saveLocation
          { $push: { savedLocation: locationData } },
          { new: true }
        );

        return updatedUser;
      }

      throw AuthenticationError;
    },
    removeLocation: async (parent, { locationId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
        // prj3: changed savedBooks = saveLocation
          { $pull: { savedLocation: { locationId } } }, 
          { new: true }
        );

        return updatedUser;
      }

      throw AuthenticationError;
    },
  },
};
