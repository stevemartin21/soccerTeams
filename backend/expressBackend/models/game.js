const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    date: {type: String},
    time: {type: String},
    location: {type: String},
    score: {type: String},
    teams: {type: String}

})

module.exports = mongoose.model('Game', gameSchema);