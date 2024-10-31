const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    name: {type: mongoose.Schema.Types.String},
    age: {type: mongoose.Schema.Types.Number},
    position: {type: mongoose.Schema.Types.String},
    country: {type: mongoose.Schema.Types.String},
    lastAttended: {type: mongoose.Schema.Types.String},
    experience: {type: mongoose.Schema.Types.Number},
    draftYear: {type: mongoose.Schema.Types.Number}
}, { versionKey: false });

module.exports = mongoose.model('model-player', playerSchema);
