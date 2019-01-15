var express = require('express');
var router = express.Router();
var Team = require('../models/team');
var Player = require('../models/player');
var Game = require('../models/game');
var User = require('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var validRegistrationInput = require('../validation/register');
var validLoginInput = require('../validation/login');

//

router.post('/user', (req, res) => {
    /*
    const { errors, isValid} = validRegistrationInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    */

    console.log(req.body);

    User.findOne({email: req.body.email}).then(user => {
        console.log(user);
        if(user) {
           res.status(400).json({message: 'The email address already exists'})
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            console.log(newUser)
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save().then(user => {
                        console.log(user + ' save new user')
                        res.status(200).json(user);
                    }).catch(err => 
                         res.status(400).json({
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
    User.findOne({email: req.body.email}).then(user => {
        if(!user) {
            console.log(user)
          return  res.status(400).json({message: 'There is not a user with that email'})
        }    
            selectedUser = user;
           return  bcrypt.compare(req.body.password, user.password)
    }).then(success => {
        console.log(success + ' passed passwords');
        if(!success) {
            res.status(400).json({message:'The passwords do not match'})
        }
        console.log('Sign that token');
        const token = jwt.sign(
            {email: selectedUser.email, userId: selectedUser._id, name: selectedUser.name},
            'thesecretisyabbadabbado',
            {expiresIn: '1h'}
           )
    
           console.log(token);
           res.status(200)
            .json({token: 'Bearer ' + token,
            expiresIn: '3600',
            userId: selectedUser._id
            })
        }).catch(error => {
            res.status(400).json({message: 'There was an error'
            })
        })
})

// create Team, Player, Game

// router.post('')

router.post('/team', (req, res) => {
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
    console.log(req.body);
    const newGame = new Game({
        date: req.body.date,
        time: '',
        location: '',
        score: '',
        teams: ''
    })

    newGame.save().then(game => {
        console.log(game);
        res.status(200).json(game)
    }).catch(err => res.status(400).json({
        err: err, 
        message: 'There was an error'
    }));
})

/*




*/




module.exports = router;