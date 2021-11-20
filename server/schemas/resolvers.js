const { AuthenticationError } = require('apollo-server-express');
const {User} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user){
      return await User.findOne({_id: context.user._id});
      }
      throw new AuthenticationError('You need to be logged in!')
    }    
  },

  Mutation: {
    login: async (parent, {email, password}) => {
      const user = await User.findOne({ email });
      if(!user){
        throw new AuthenticationError('No user with this email found!')
      }
      
      const correctPw = await user.isCorrectPassword(password);

      if(!correctPw){
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, {username, email, password}) => {
      const user = await User.create( { username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, {bookData}, context) => {
        if(context.user){
          return User.findOneAndUpdate(
            { _id: context.user._id},
            {
              $addToSet: { savedBooks: bookData }
            },
            { new: true, runValidators: true }
          )
        }
        throw new AuthenticationError('You need to be logged in!');
    },
    removeBook: async (parent, {bookId}, context) => {
     
      if(context.user){
      return await User.findOneAndUpdate(
        {_id: context.user._id},
        {$pull: {savedBooks: {bookId: bookId} } },
        { new: true }
        )
      }
      throw new AuthenticationError('You need to be logged in!');
    }

  },
};

module.exports = resolvers;
