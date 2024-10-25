const express = require('express');
const {ApolloServer, gql} = require('apollo-server-express');

const schema = gql(`
    type Query {
        id: Int
        name: String
        age: Int
        birthdate: String
        position: String
        country: String 
        lastAttended: String
        experience: Int
        draftYear: Int
    }
`)

const resolvers = {
    Query : {
        id: () => 0,
        name: () => 'Player name',
        age: () => 25 ,
        birthdate: () => '00/00/0000',
        position: () => 'Forward',
        country: () => 'Brasil',
        lastAttended: () => 'Memphis',
        experience: () => 4,
        draftYear: () => 2020
    }
}

const server = new ApolloServer({
    typeDefs: schema,
    resolvers
});

const main = async () => {
    const app = express();
    await server.start();
    server.applyMiddleware({app});
    app.listen({port: 4000}, () => console.log('Started - port: 4000', server.graphqlPath))
}

main();