const express = require('express')
const router = express.Router()

// Importing middleware

// Importing controllers
const {createUser, updateUser, deleteUser, getUser} = require('../controllers/userController')



// CRUD

// Basic routing
router.get('/', (req, res) => {
  res.render('landingpage')
})

// S2: Reading a user
router.get('/:username', getUser)

// S1: Creating a user
router.post('/add', createUser)

// S3: Deleting a user
router.delete('/:username', deleteUser)

// S4: Updating a user
router.put('/:username', updateUser)

// Exporting all routes
module.exports = router;