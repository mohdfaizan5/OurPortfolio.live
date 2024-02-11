const homePage = (req, res)=>{
  res.status(200).json({message: "Everything will be alright"})
}

const registerUser = (req, res) => {
  console.log("Registering user")
  
  /** Algo
   *  1. Get details from req.body
   *  2. Validate Info
   *  3. check if user already exist with email and password
   *  4. Generate access token & refresh token 
   *  5. return data

   */
  
  











}

const loginUser = (req, res) => {
  console.log("Logging in user")
}

export { loginUser, registerUser, homePage}
