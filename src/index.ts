import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";
import express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageGraphQLPlayground
} from "apollo-server-core";
import { UserTypeResolver } from "../resolvers/user-type.resolver";
import { Container } from "typedi";
import config from "../config/config";

async function bootstrap() {
  // Build the schema
  const schema = await buildSchema({
    resolvers: [
      UserTypeResolver
    ],
    container: Container,
    emitSchemaFile: true,
    validate: false
  });

  // Init express
  const app = express();

  // Create the apollo server
  const server = new ApolloServer({
    schema,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
  });

  await server.start();

  // apply middleware to server
  server.applyMiddleware({ app });

  // app.listen on express server
  app.listen({ port: config.server.port }, () => {
    console.log(`Server is running on ${config.server.hostname}:${config.server.port}`);
  });
}

bootstrap();
