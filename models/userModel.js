const mongoose = require('mongoose')

const userModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    designation: String,
    name: [
      { first: String },
      { last: String }
    ],
    description: {
      type: String,
    },
    password: {
      type: String,
      required: true
    },
    socails: [
      { email: String },
      { linkedIn: String },
      { resume: String }
    ],
    theme: {
      type: Number,
      default : 1
    }

    // insta, 
    // Achievements, Testimonials, profile pic, 
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('users', userModel)

module.exports = User