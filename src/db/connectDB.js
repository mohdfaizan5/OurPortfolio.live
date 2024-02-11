import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    )
    console.log(
      `\n\t✅  MongoDb connect and Host url: ${connectionInstance.connection.host}`
    )
  } catch (error) {
    console.log(`\t❌  MongoDB Connection Error`, error)
    process.exit(1)
  }
}

export default connectDB