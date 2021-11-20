const { Class } = require('../models');
const {User, Book} = require('../models');

const resolvers = {
  Query: {
    me: async (parent, {userId}) => {
      return await User.findOne({_id:userId});
    }    
  },

  Mutation: {
    login: async () => {

    }
    addUser: async () => {

    }
    saveBook: async (parent, args, context) => {
        if(context.user){

        }
    }
    removeBook: async () => {

    }

  },
};

module.exports = resolvers;
