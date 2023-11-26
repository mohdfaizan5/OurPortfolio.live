require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

// importing all routes
const userRouter = require('./routes/userRoute')
const { default: mongoose } = require('mongoose');

const errorMid = require('./middlewares/errorMid')

// 
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL

// To take json as input
app.use(express.json())
app.use(cors())

// Ejs template engine setup
app.set('view engine', 'ejs')

// Setup static
app.use(express.static('./public'))

app.get('/error', (req, res)=>{
  throw new Error("HI ---");

})

app.use(errorMid);
app.use('/', userRouter)


// Listening to port
mongoose.connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, console.log('Server Up and MongoConnected!!'))
  })
  .catch(error => {
    console.log(error.message)
  })