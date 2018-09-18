const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

//get data
router.get('/register-users', function(req, res, next) {
  User.find(function(err, register) {
    res.json(register);
  });
});
// Register
router.post('/register', (req, res, next) => {
  let newUser = new User ({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    rollNo: req.body.rollNo,
    subscriptionPlan: req.body.subscriptionPlan,
    branch: req.body.branch
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.json({success: true, msg: 'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
            rollNo: user.rollNo,
            subscriptionPlan: user.subscriptionPlan,
            branch: user.branch
          }
        })
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

router.delete('/register/:id', function(req, res, next) {
  User.remove({_id: req.params.id}, function(err, result) {
     if(err) {
         res.json(err);
     } else {
         res.json(result);
     }
 });
});
// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;
