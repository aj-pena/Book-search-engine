const { Class } = require('../models');
const User = require('../models/User')

const resolvers = {
  Query: {
    me: async () => {

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
