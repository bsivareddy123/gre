const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedbacks');

router.get('/feedbacks', function(req, res, next) {
    Feedback.find(function(err, feedbacks) {
       res.json(feedbacks);
    })
 });
 // add content crerator
 router.post('/feedback', function(req, res, next) {
    let newFeedback = new Feedback({
        email: req.body.email,
        name: req.body.name,
        mobile: req.body.mobile,
        subject: req.body.subject,
        message: req.body.message,
        date: req.body.date
    });
    newFeedback.save((err, feedback) => {
        if(err) {
            res.json({msg: 'Failed to Send Message'});
        } else {
            res.json({msg :'Message Sent Successfully'});
        }
    });
 });
 // delete contacts content crerator
 router.delete('/feedback/:id', function(req, res, next) {
    Feedback.remove({_id: req.params.id}, function(err, result) {
        if(err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
 });
 module.exports = router;