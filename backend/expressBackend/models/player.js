const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
    name: {type: String},
    number: {type: String},
    position: {type: String},
    goals: {type: String},
    assists: {type: String}
})

module.exports = mongoose.model('Player', playerSchema);