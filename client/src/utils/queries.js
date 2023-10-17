import {gql} from '@apollo/client'

export const QUERY_ME = gql`
query Query {
  me {
    _id
    email
    locationCount
    username
    savedCampgrounds {
      _id
      description
      fees
      images
      URL
      name
      reservationURL
    }
  }
}
`
export const QUERY_CAMPS = gql`
query Query($searchString: String!) {
  getCamps(searchString: $searchString) {
    description
    fees
    images
    name
    reservationURL
    URL
  }
}`