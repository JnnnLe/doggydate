const mongoose = require('mongoose')
require('dotenv').config({ path: '../../.env' })

let uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@doggydate-biwhc.gcp.mongodb.net/test?retryWrites=true&w=majority`

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  err ? console.log(err) : console.log('Success, connected to Mongo database :).')
})
