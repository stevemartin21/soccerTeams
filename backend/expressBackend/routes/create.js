var express = require('express');
var router = express.Router();
var Team = require('../models/team');
var Player = require('../models/player');
var Game = require('../models/game');
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


//

router.post('/user', (req, res) => {
    User.find({email: req.body.email}).then(user => {
        if(user) {
            res.status(400).json({message: 'The email address already exists'})
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash
                    newUser.save().then(user => {
                        res.status(200).json(user)
                    }).catch(err => res.status(400).json({
                        err: err,
                        message: 'Authorization Failed'
                    }))
                })
            })
        }
    })
})

// Creat Token
let selectedUser;
router.post('/token', (req, res) => {
    User.find({email: req.body.email}).then(user => {
        if(!user) {
          return  res.status(400).json({message: 'There is not a user with that email'})
        }    
            selectedUser = user;
           return  bcrypt.compare(req.body.password, user.password)
    }).then(success => {
        if(!success) {
            res.status(400).json({message:'The passwords do not match'})
        }
        const token = jwt.sign({email: fetchedUser.email, userId: fetchedUser._id , name: fetchedUser.name},
            'thesecretisyabbadabbado',
            {expiresIn: '1h'}
        );
        res.status(200).json({
            token: token,
            userId: selectedUser._id,
            expiresIn: 3600
        })
    }).catch(err => res.status(400).json({
        err:err,
        message: 'Authorization Failed'
    }));
})

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