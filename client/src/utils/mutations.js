import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: Bookinfo!) {
    addSkill(bookData: $bookData) {
      _id
      username
      email
      bookCount
      savedBooks
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: bookId!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks
    }
  }
`;
