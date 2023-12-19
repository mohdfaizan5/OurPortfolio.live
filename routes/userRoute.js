const express = require('express')
const router = express.Router()

// Importing middleware

// Importing controllers
const {createUser, updateUser, deleteUser, getUser} = require('../controllers/userController')



// CRUD

// S1: Reading a user
router.get('/:username', getUser)

// S2: Creating a user
router.post('/add', createUser)

// S3: Deleting a user
router.delete('/:username', deleteUser)

// S4: Updating a user
router.put('/:username', updateUser)


// Exporting all routes
module.exports = router;