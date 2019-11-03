import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
let port = 3000
import authRouter from './resources/user/user.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// initiate the start of the authRouters
app.use('/api/auth', authRouter)

// add a new user
app.post('/api/auth', authRouter)

// get all users
app.get('/api/auth', authRouter)

export const start = () => {
  app.listen(port, () => {
    console.log('doggydate server on port 3000')
  })
}
