import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
let port = 3000
import userRouter from './resources/user/user.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// initiate the start of the userRouters
app.use('/api/user', userRouter)

// add a new user
app.post('/api/user', userRouter)

// get all users
app.get('/api/user', userRouter)

export const start = () => {
  app.listen(port, () => {
    console.log('doggydate server on port 3000')
  })
}
