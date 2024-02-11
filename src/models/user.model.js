/**
 * 1. Name
2. Socials  
- ContactEmail
- LinkedIn
- Twitter
- other}
1. Short hooky descriptions
2. About me [long note]
3. Titles or keywords
4. Skills
5. Experience 
6. Education

 */

import { Schema, model } from "mongoose"

const userSchema = Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lower: true,
    },

    username: {
      type: String,
      trim: true,
      lower: true,
    },
    password: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    description: {
      type: String,
    },
    socails: {
      linkedIn: String,
      contactEmail: String,
      twitter: String,
      other: String,
    },
    aboutMe: {
      type: String,
    },
    titles: [{ type: String }],
    skills: [{ type: String }],
  },
  { timestamps: true }
)

export const User = model("User", userSchema)
