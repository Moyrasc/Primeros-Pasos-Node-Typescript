import express from 'express'
import generateError from '../utils/generateError'
const router = express.Router()

const users = [
  {
    id: 1,
    username: 'Moyra',
    email: 'prueba@prueba.com',
    password: 'Prueba1234'
  }
]
router.post('/', (req, res, next) => {
  const { username, email, password } = req.body
  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm
  console.log(username, email)
  try {
    if (username === undefined) throw generateError(400, 'missing username')
    if (email === undefined) throw generateError(400, 'missing email')
    if (!regexEmail.test(email)) throw generateError(400, 'wrong email address')
    if (password === undefined) throw generateError(400, 'missing password')
    if (!regexPassword.test(password)) throw generateError(400, 'wrong password')
    const user = users.find(user => user.username === username)
    if (user !== undefined) throw generateError(400, 'Already created user')
    users.push({
      id: Math.max(...users.map(user => user.id)) + 1,
      username,
      email,
      password

    })
    res.status(200).json({ msg: 'Successfully signed up!' })
  } catch (error) {
    next(error)
  }
})

router.get('/', (_req, res) => {
  res.send(users)
})
export default router
