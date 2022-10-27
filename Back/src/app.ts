import express from 'express'
// import * as MySQLConnector from './utils/mysql.connector'
import usersRoutes from './routes/users'

const app = express()
// Create database pool
// MySQLConnector.init()

app.use(express.json()) // middleware que transforma la req.body a un json

// quiero que utilice la rutas que hay dentro de usersRoutes
app.use('/users', usersRoutes)
// middelware que gestiona los errores
app.use((error: any, _req: any, res: any, _next: any) => {
  res.status((error.httpStatus !== undefined) ? error.httpStatus : 500).send({
    status: 'error',
    message: error.message
  })
})

export default app
