const axios = require('axios')

const proxy = axios.create({
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000
})

module.exports = proxy