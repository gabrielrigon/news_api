const { news } = require('../actions')
const router = require('express').Router()

router.get('/', news.index)

module.exports = router