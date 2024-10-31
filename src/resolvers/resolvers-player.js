const modelPlayer = require("../models/model-player");

const resolversPlayer = {
    Query: {
        players: async () => await modelPlayer.find(),
        player: async (_, { _id }) => await modelPlayer.findById(_id),
    }
}

module.exports = {resolversPlayer}