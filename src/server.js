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

app.use('/api/user', userRouter)

app.post('/api/user', userRouter)

app.get('/api/user', userRouter)

export const start = () => {
  app.listen(port, () => {
    console.log('doggydate server on port 3000')
  })
}
