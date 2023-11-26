const mongoose = require('mongoose')

const userModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    // name: [
    //   { first: String },
    //   { last: String }
    // ],
    // description: {
    //   type: string,
    // },
    // password: {
    //   type: password,
    //   required: true
    // },
    // socails: [
    //   {email: String},
    //   {linkedIn: String},

    // ]

    // insta, 
    // Achievements, Testimonials, profile pic, 
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('users', userModel)

module.exports = User