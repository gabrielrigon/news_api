const { sources } = require('../data')

const index = (req, res) => {
  const { query } = req

  sources
    .getLatest(query)
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
