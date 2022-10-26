import express from 'express'

const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json

app.post('/register', (req, res) => {
  const { username, email, password } = req.body
  res.send({ username, password, email })
})

export default app
