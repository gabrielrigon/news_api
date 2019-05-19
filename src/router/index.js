const router = require('express').Router()

router.use('/', (req, res) => {
  res.sendStatus(501)
})

module.exports = router