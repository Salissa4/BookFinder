const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const user //
                return user;//
            }
            throw new AuthenticationError('You need to be logged in');
        },
    },

    Mutation: {
        addUser: async (parent, { email, password }) => {
          const user = await user.create({ name, email, password });
          const token = signToken(user);
    
          return { token, user };
        },
        login: async (parent, { email, password }) => {
          const user = await user.findOne({ email });
    
          if (!user) {
            throw new AuthenticationError('No user found!');
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect password!');
          }
    
          const token = signToken(user);
          return { token, user };
        },
        saveBook: async (parent, {  }, context) => {
            if (context.user) {
              const = await User.findOneAndUpdate(
                { _id: profileId },
                { $addToSet: { : {} } },
                { new: true },
              );
              return ;
            }
    
            throw new AuthenticationError('You need to be logged in!');
        },
}