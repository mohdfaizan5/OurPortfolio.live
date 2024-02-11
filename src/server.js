import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/connectDB.js"
import {app } from "./app.js"

const PORT = process.env.PORT || 8000

dotenv.config({ path: "./.env" })



connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`\t✅  Server running on PORT ${PORT}\n`)
    )
  })
  .catch((error) => {
    console.log("\t❌  MongoDb Connection Failed:\n", error)
  })
