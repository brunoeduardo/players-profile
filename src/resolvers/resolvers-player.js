const modelPlayer = require("../models/model-player");

const resolversPlayer = {
    Query: {
        players: async () => await modelPlayer.find(),
        player: async (_, { id }) => await modelPlayer.findById(id),
        // id: () => 0,
        // name: () => 'Player name',
        // age: () => 25 ,
        // position: () => 'Forward',
        // country: () => 'Brasil',
        // lastAttended: () => 'Memphis',
        // experience: () => 4,
        // draftYear: () => 2020
    }
}

module.exports = {resolversPlayer}