const userModel = require('../models/userModel')

const asyncHandler = require('express-async-handler')

const getUser = asyncHandler(async (req, res) => {
  // res.status(500);
  // throw new Error('This is fake🐍🐍🐍')
  try {

    // getting user out from URL parameter
    const { username } = req.params

    // Finding user with `username`
    const foundUser = await userModel.findOne({ username: username })

    // validating if user exists
    if (!foundUser) {
      res.status(404).json({ message: "User not found" })
      console.log('not found')
    }
    else {
      console.log('found user')
      res.render('portfolio/p1', {
        username: foundUser.username,
        profilePic: null
      })
    }

  }
  catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
})

const deleteUser = async (req, res) => {

  try {
    const { username } = req.params

    const deletedUser = await userModel.findOneAndDelete({ username: username })

    if (deletedUser) {

      res.status(200).json({ message: `Deleted user`, deletedUser })
      // console.log("didn't find user to delete -"+username)
    }
    else {

      res.status(404).json({ message: `user not found ${username}` })
      console.log("deleting user -" + username)
    }
  }
  catch (error) {
    res.status(500)
    throw new Error(error.message)
  }

}


const updateUser = async (req, res) => {
  try {
    const { username } = req.params
    console.log(username, req.body)
    const updatedUser = await userModel.findOneAndUpdate({ username: username }, req.body)

    if (updatedUser) {
      console.log(`updated user ${updatedUser}`)

    }
    else {
      console.log(`can't find user ${updatedUser} to update`)

    }
  }
  catch (error) {
    console.log(error)
  }
}

const createUser = async (req, res) => {


  try {
    const userData = req.body
    const createdUser = await userModel.create(userData)
    res.status(200).json(createdUser)
  }

  catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports = { getUser, deleteUser, updateUser, createUser }