
const { gql} = require('apollo-server-express');

const schemaPlayer = gql(`
    type Player {
        id: ID!
        name: String
        age: Int
        position: String
        country: String 
        lastAttended: String
        experience: Int
        draftYear: Int
    }

    type Query {
        players: [Player],
        player(id: ID!): Player
    }
`)

module.exports = {schemaPlayer}