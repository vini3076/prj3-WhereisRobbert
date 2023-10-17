import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
        locationCount
        username
        savedCampgrounds {
          URL
          name
          description
          reservationURL
          fees
          images
        }
      }
    }
  }
  
`

export const LOGIN_USER =gql`
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        locationCount
        username
        savedCampgrounds {
          URL
          name
          description
          reservationURL
          fees
          images
        }
      }
    }
  }

`
export const ADD_CAMPGROUND =gql`
mutation Mutation($campgroundData: CampgroundInput!) {
  addCampGround(campgroundData: $campgroundData) {
    URL
    _id
    description
    fees
    images
    name
    reservationURL
  }
}
`