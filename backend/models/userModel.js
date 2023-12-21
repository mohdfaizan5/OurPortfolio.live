import { Schema, model } from 'mongoose'
/*
User data:

* Name ✅
* Job title / what i do✅
* Work description✅
* photo
* Socails
  * LinkedIn
  * Mail
  * Twitter
  * Github
* About me
  * 4 tags/keywords to tell about you

*/
/**

*@type {mongoose.SchemaDefinitionProperty}

*/
const userModel = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    name:
    {
      first: String,
      last: String,
      _id: false
    },
    aboutMe: {
      type: String,
    },
    jobTitle: {
      type: String
    },
    shortDescription: {
      type: String
    },
    socails:
    {
      email: String,
      linkedIn: String,
      github: String,
      twitter: String,
      _id: false
    },
  },
  {
    timestamps: true
  }
)

const User = model('users', userModel)

export default User