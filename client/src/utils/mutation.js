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
        savedLocations {
          campsite
          city
          description
          image
          link
          locationId
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
        savedLocations {
          campsite
          city
          description
          image
          link
          locationId
        }
      }
    }
  }

`

