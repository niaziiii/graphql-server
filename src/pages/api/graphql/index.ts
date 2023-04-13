import type { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer, gql } from "apollo-server-micro";
import cors from "cors";

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello(parent: any, args: any, context: any) {
      return "Hello World!";
    },
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = server.start();
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const corsMiddleware = cors();
  await new Promise((resolve) => corsMiddleware(req, res, resolve));

  await startServer;
  await server.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
export default handler;
