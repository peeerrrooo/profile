const _ = require('lodash')
const morgan = require('morgan')
const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const feedbackRoute = require('./src/api/feedback')
const config = require('./config')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = app.getRequestHandler()

const server = express()
server.use(bodyParser.json())

if (!dev) {
  server.use(
    morgan(':method :url :status :res[content-length] - :response-time ms', {
      skip(req) {
        return /^\/_next/.test(req.originalUrl)
      }
    })
  )
}

server.get('/health', (req, res) => {
  res.json({
    health: true
  })
})

server.post('/api/feedback', feedbackRoute.sendFeedback)

app
  .prepare()
  .then(() => {
    server.use((req, res) => handler(req, res))

    server.listen(config.port, (err) => {
      if (err) {
        throw err
      }

      console.log(`Server start on port: ${config.port}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
