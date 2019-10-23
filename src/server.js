import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
let port = 3000
import router from './resources/user/user.router'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/api/user', router)

app.get('/data', (req, res) => {
  res.json({ message: "Jennifer Lê Jowett's server is running!" })
})

app.post('/data', (req, res) => {
  console.log(req.body)
  res.status(200).end()
})

export const start = () => {
  app.listen(port, () => {
    console.log('doggydate server on port 3000')
  })
}
