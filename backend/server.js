import 'dotenv/config'
import { default as mongoose } from 'mongoose'

import express, { json } from 'express'
const app = express()
import cors from 'cors'

// importing all routes
import generalRouter from './routes/general.js'
import userRouter from './routes/userRoute.js'
import errorMid from './middlewares/errorMid.js'


// 
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL

// To take json as input
app.use(json())
app.use(cors())

// Ejs template engine setup
app.set('view engine', 'ejs')

// Setup static
app.use(express.static('./public'))

app.get('/error', (req, res) => {
  throw new Error("HI ---");

})

app.use(errorMid);
app.use('/', generalRouter)
app.use('/', userRouter)


// Listening to port
mongoose.connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, console.log('Server Up and MongoConnected!!'))
  })
  .catch(error => {
    console.log(error.message)
  })