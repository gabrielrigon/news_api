const cors = require('cors')
const express = require('express')
const router = require('./router')

const { config } = require('./config')

const app = express()
const port = config.api.port

app.use(cors())
app.use(router)

app.listen(port, () => {
  console.log(`listen on port ${port}`)
})