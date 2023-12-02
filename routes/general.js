const express = require('express')
const router = express.Router()

// S2: Reading a user
router.get('/login', (req, res)=>{
  res.render('login')
})

module.exports = router