const express = require('express')
const config = require('./config.json')
const router = require('./router')

const app = express()
const port = config.api.port

app.use(router)

app.listen(port, () => {
  console.log(`listen on port ${port}`)
})