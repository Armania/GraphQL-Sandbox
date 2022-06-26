import { makeExecutableSchema } from '@graphql-tools/schema'
import { resolvers } from './resolvers.js';

const typeDefs = `
  type Friend {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    language: String
    emails: [Email]
    contacts: [Contact]
  }

  type Alien {
    id: ID
    firstName: String
    lastName: String
    planet: String
  }

  type Email {
    email: String
  }

  type Contact {
    firstName: String
    lastName: String
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  type Query {
    getOneFriend(id: ID): Friend
    getAliens: [Alien]
  }

  input FriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    age: Int
    language: String
    emails: [EmailInput]
    contacts: [ContactInput]
  }

  input EmailInput {
    email: String
  }

  input ContactInput {
    firstName: String
    lastName: String
  }

  type Mutation {
    createFriend(input: FriendInput): Friend
    updateFriend(input:FriendInput): Friend
    deleteFriend(id: ID!): String
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export {schema};