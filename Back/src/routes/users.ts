import express from 'express'
import * as usersController from '../controllers/usersControllers'
const router = express.Router()

router.post('/', (req, res) => {
  const user = usersController.newUser(req.body)
  res.send(user)
})
