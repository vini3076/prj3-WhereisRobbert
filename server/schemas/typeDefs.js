import { gql } from 'apollo-server-express';



const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    locationCount: Int
    savedCampgrounds: [Campground]
  }


  type Campground {
    _id: ID!
    URL: String
    name: String
    description: String
    reservationURL: String
    fees: Float
    images: [String]
  }
  type CampgroundOutput{
    URL: String
    name: String
    description: String
    reservationURL: String
    fees: Float
    images: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input CampgroundInput {
    URL: String
    name: String
    description: String
    reservationURL: String
    fees: Float
    images: [String]
    userId: ID!
  }

  type Query {
    me: User
    getCamps(searchString: String!): [CampgroundOutput]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCampGround(campgroundData: CampgroundInput!): Campground
  }
`;

export default typeDefs;











