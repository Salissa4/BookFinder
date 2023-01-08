const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Auth {
        token: ID!
        profile: Profile
    }

    type Query {
        me: User
    }

    type Mutation{

    }
    `;

module.exports = typeDefs;