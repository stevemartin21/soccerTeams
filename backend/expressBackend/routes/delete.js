var express = require('express');
var router = express.Router();
var Team = require('../models/team');
var Player = require('../models/player');
var Game = require('../models/game');

router.delete('/team/:id', (req, res) => {
    Team.findOneAndDelete({_id: req.params.id}).then(team => {
        res.status(200).json(team)
    }).catch(err => res.status(400).json(err))
})

router.delete('/player/:id', (req, res) => {
    Player.findOneAndDelete({_id: req.params.id}).then(player => {
        res.status(200).json(player)
    }).catch(err => res.status(400).json(err))
})

router.delete('/game/:id', (req, res) => {
    Game.findOneAndDelete({_id: req.params.id}).then(game => {
        res.status(200).json(game)
    }).catch(err => res.status(400).json(err))
})




module.exports = router;