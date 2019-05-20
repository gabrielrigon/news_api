const { sources } = require('../data')

const index = (req, res) => {
  sources
    .getLatest()
    .then(data => {
      res.json({ data })
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(500)
    })
}

module.exports = {
  index
}
