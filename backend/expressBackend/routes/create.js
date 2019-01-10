var express = require('express');
var router = express.Router();
var Team = require('../models/team');
var Player = require('../models/player');
var Game = require('../models/game');
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


//

// create Team, Player, Game

// router.post('')

router.post('team', (req, res) => {
    const newTeam = new Team({
        name: req.body.name,
        players: req.body.players,
        city: req.body.city,
        stadium: req.body.stadium,
        yearFounded: req.body.yearFounded
    })
    newTeam.save().then(team => {
        res.status(200).json(team);
    }).catch(err => res.status(400).json(err))
})

router.post('/player', (req, res) => {
    const newPlayer = new Player({
        name: req.body.name,
        number: req.body.number,
        goals: req.body.goals,
        assists: req.body.assists
    })
    newPlayer.save().then(player => {
        res.status(200).json(player)
    }).catch(err => res.status(400).json(err))
})

router.post('/game', (req, res) => {
    const newGame = new Game({
        date: req.body.date,
        time: req.body.time,
        location: req.body.location,
        score: req.body.score,
        teams: req.body.teams
    })

    newGame.save().then(game => {
        res.status(200).json(game)
    }).catch(err => res.status(400).json(err));
})

/*




*/




module.exports = router;