const { ApolloServer, gql } = require("apollo-server");

let events = [
  {
    id: "1",
    name: "IPL 2024",
    date: "2024-05-10",
    sport: "Soccer",
    participants: [
      { id: "101", name: "Avinash Kishwe", age: 25 },
      { id: "102", name: "Balaji Deshmukh", age: 28 },
    ],
  },
  {
    id: "2",
    name: "Pro Kabbadi League",
    date: "2024-06-15",
    sport: "Basketball",
    participants: [
      { id: "201", name: "Aditya Kumar", age: 40 },
      { id: "202", name: "Pradnya Patil", age: 35 },
    ],
  },
];

const typeDefs = gql`
  type Event {
    id: ID!
    name: String!
    date: String!
    sport: String!
    participants: [Participant]!
  }

  type Participant {
    id: ID!
    name: String!
    age: Int!
  }

  type Query {
    events: [Event]
  }
`;

const resolvers = {
  Query: {
    events: () => events,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
