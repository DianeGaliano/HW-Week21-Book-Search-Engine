const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    bookId: String!
    authors: [String]
    description: String
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }
  {
    input SavedBookInput {
        authors: [String]
        title: String 
        description: String
        bookId: String
        image: String
        link: String
    }
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, email: String!, password: String!): Auth
    saveBook(input: SavedBookInput ): User
    removeBook(bookId: String!): User
  }
`;
module.exports = typeDefs;