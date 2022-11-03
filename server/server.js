const express = require('express')
const cors = require('cors')
require('dotenv').config()
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())

const {homeHTML, homeCSS, homeJS} = require('./controllers/pageCtrl')

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.RB_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.get('/', homeHTML)
app.get('/css', homeCSS)
app.get('/js', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/home.js'))
  })

const { PORT } = process.env

app.listen(PORT, () => console.log('Server listening on port ' + PORT))

// The resource from “https://deployment7882.herokuapp.com/js” was blocked due to MIME type (“text/html”) mismatch (X-Content-Type-Options: nosniff).