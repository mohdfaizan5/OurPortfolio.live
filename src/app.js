import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
)
app.use(express.json({ limit: "16kb" }))
app.use(express.static("./public"))
// app.use(cookieParser())
app.use(cookieParser({ extends: true, limit: "16kb" }))

// Importing Routes
import userRoute from "./routes/user.routes.js"

// Route declaration
app.use("/", userRoute)

export { app }
