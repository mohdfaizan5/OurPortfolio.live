// const userModel = require('../models/userModel')
import userModel from "../models/userModel.js"
import asyncHandler from "express-async-handler"


const getUser = asyncHandler(async (req, res) => {
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
      res.json(
        {
          username: foundUser.username,
          name: foundUser.name,
          aboutMe: foundUser.aboutMe,
          jobTitle: foundUser.jobTitle,
          shortDescription: foundUser.shortDescription,
          socails: foundUser.socails
        }

      )
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

      res.status(200).json({ success: true, message: `Deleted user`, deletedUser })
      // console.log("didn't find user to delete -"+username)
    }
    else {

      res.status(404).json({ success: false, message: `user not found ${username}` })
      // console.log("deleting user -" + username)
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
    const updatedUser = await userModel.findOneAndUpdate({ username }, req.body)

    if (updatedUser) {
      res.status(201).json({ success: true, message: "User updated succesfully", ...updatedUser })
      // console.log(`updated user ${updatedUser}`)
    }
    else {
      res.status(401).json({ success: false, message: `Can't find User ${updatedUser}` })
      // console.log(`can't find user ${updatedUser} to update`)

    }
  }
  catch (error) {
    res.status(401).json({ success: false, message: error.message })
  }
}


const createUser = async (req, res) => {

  try {
    // console.log("created user", req.body)
    const userData = req.body
    const createdUser = await userModel.create(userData)
    res.status(200).json({ message: "User Created succesfully", success: true, ...createdUser['_doc'] })
  }

  catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
}

export { getUser, deleteUser, updateUser, createUser }