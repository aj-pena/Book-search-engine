import { gql } from '@apollo/client';

const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks{
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

export default GET_ME;