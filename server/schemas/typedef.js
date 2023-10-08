const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String
    locationCount: Int
    savedLocations: [Book]
  }

// pj3- switched the following to fit our project: book = location; author = campsite; BookInput = LocationInput; title = city//

  type Location {
    locationId: ID!
    campsite: [String]
    description: String
    image: String
    link: String
    city: String!
  }

  type Location {
    token: ID!
    user: User
  }

  input LocationInput {
    campsite: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    city: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): City
    saveLocation(locationData: LocationInput!): User
    removeLocation(locationId: ID!): User
  }
`;

module.exports = typeDefs;