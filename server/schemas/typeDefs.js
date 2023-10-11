const { gql } = require('apollo-server-express');


const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String
    locationCount: Int
    savedLocations: [Location]
  }


  type Location {
    locationId: ID!
    campsite: [String]
    description: String
    image: String
    link: String
    city: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  input LocationInput {
    campsite: [String]
    description: String!
    locationId: String!
    image: String
    link: String
    city: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveLocation(locationData: LocationInput!): User
    removeLocation(locationId: ID!): User
  }
`;

module.exports = typeDefs;