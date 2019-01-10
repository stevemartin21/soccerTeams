var express = require('express');
var router = express.Router();
var Team = require('../models/team');
var Player = require('../models/player');
var Game = require('../models/game');

router.put('team/:id', (req, res) => {
    Team.findByIdAndUpdate({_id: req.params.id}, {$set:req.body}).then(team =>{
        res.status(200).json(team)
    }).catch(err => res.status(400).json(err))
})

router.put('player/:id', (req, res) => {
    Player.findByIdAndUpdate({_id: req.params.id}, {$set:req.body}).then(team =>{
        res.status(200).json(team)
    }).catch(err => res.status(400).json(err))
})

router.put('game/:id', (req, res) => {
    Game.findByIdAndUpdate({_id: req.params.id}, {$set:req.body}).then(game =>{
        res.status(200).json(game)
    }).catch(err => res.status(400).json(err))
})




module.exports = router;