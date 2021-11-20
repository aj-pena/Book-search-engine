const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID
    user: User
  }
  input Bookinfo{
    authors:[String]
    description:String
    title: String
    bookId: ID
    image: String
    link: String
  }
  type Query {
    me(userId:ID!):User
  }

  type Mutation {
    login(email:String, password:String): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    saveBook(bookData:Bookinfo): User
    removeBook(bookId:bookId): User
  }
`;

module.exports = typeDefs;