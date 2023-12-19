const express = require('express')
const router = express.Router()
const userModel = require("../models/userModel")




router.post('/signup', async (req, res) => {
  const { username, password } = req.body

  const foundUser = await userModel.findOne({ username })
  if (foundUser) {
    res.status(403).json({ message: "User already exits" })
  }
  else {
    const createUser = await userModel.create({
      username: username,
      password: password
    })

    res.status(201).json({ message: "Created user", ...createUser })

  }

  console.log(req.body)
})






router.get('/', (req, res) => {
  res.render('landingpage')
})

router.get('/login', (req, res) => {
  res.render('login')
})

// const userAuthentication = (req, res, next){
//   // const
// }


router.post('/login', async (req, res) => {
  const {username, password} = req.body

  const foundUser = await userModel.findOne({username})

  if(foundUser && foundUser.password == password){
    res.status(200).json({message: "Login in succesfull"})
  }
  else{
    res.status(403).json({message: "User not found"})

  }
})

router.get('/signup', (req, res) => {
  res.render('signup')
})
module.exports = router