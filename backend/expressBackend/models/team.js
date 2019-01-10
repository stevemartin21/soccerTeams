const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    name: {type: String},
    players: {type: String},
    games: {type: String},
    city: {type: String},
    stadium: {type: String},
    yearFounded: {type: String},
    

});

module.exports = mongoose.model('Team', teamSchema);