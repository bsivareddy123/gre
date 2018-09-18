const mongoose = require('mongoose');
const FeedbackSchema = mongoose.Schema({
      email: {
        type: String, 
        required: true
      },
      name: {
        type: String, 
        required: true
      },
      mobile: {
        type: Number,
        required: true
      },
      subject: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
});

const Feedback = module.exports = mongoose.model('Feedback', FeedbackSchema);