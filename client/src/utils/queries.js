import { gql } from '@apollo/client';

const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks
    }
  }
`;

export default GET_ME;