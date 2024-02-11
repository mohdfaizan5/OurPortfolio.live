import express from "express"
const router = express.Router()
import { homePage, loginUser, registerUser } from "../controllers/user.controller.js"

// router.route("/").get(loginUser)
router.route("/login").get(loginUser)
router.route("/register").get(registerUser)
router.route("/").get(homePage)

export default router
