const news = require('./news')
const router = require('express').Router()

router.use('/news', news)

module.exports = router