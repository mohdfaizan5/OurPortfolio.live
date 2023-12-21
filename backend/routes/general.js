import { Router } from 'express'
const router = Router()

// S2: Reading a user
// router.get('/login', (req, res)=>{
//   res.render('login')
// })

router.post("/login", (req, res)=>{
  console.log(req.body)
})

export default router