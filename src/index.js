const { config } = require('./config')
const express = require('express')
const router = require('./router')

const app = express()
const port = config.api.port

app.use(router)

app.listen(port, () => {
  console.log(`listen on port ${port}`)
})