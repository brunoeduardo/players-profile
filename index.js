const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { resolversPlayer } = require('./src/resolvers/resolvers-player');
const { connectDB } = require('./src/config/dbConnect');
const { schemaPlayer } = require('./src/shemas/schema-player');


const server = new ApolloServer({
    typeDefs: schemaPlayer,
    resolvers: resolversPlayer
});

(async () => {
    connectDB();
    const app = express();
    await server.start();
    server.applyMiddleware({app});
    app.listen({port: 4000}, () => console.log('Started - port: 4000', server.graphqlPath))
})



