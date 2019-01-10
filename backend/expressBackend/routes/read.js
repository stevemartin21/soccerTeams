var express = require('express');
var router = express.Router();
var Team = require('../models/team');
var Player = require('../models/player');
var Game = require('../models/game');

router.get('/teams', (req, res) => {
    Team.find().then(teams => {
        res.status(200).json(teams);
    }).catch(err => res.status(400).json(err))
})

router.get('/players', (req, res) => {
    Player.find().then(players => {
        res.status(200).json(players);
    }).catch(err => res.status(400).json(err))
})

router.get('/games', (req, res) => {
    Game.find().then(games => {
        res.status(200).json(games);
    }).catch(err => res.status(400).json(err))
})

// individual search 

router.get('team/:id', (req, res) => {
    Team.findOne({_id: req.params.id}).then(team => {
        res.status(200).json(team)
    }).catch(err => res.status(400).json(err))
})

router.get('player/:id', (req, res) => {
    Player.findOne({_id: req.params.id}).then(player => {
        res.status(200).json(player)
    }).catch(err => res.status(400).json(err))
})

router.get('game/:id', (req, res) => {
    Game.findOne({_id: req.params.id}).then(game => {
        res.status(200).json(game)
    }).catch(err => res.status(400).json(err))
})



module.exports = router;