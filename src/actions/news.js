const { sources } = require('../data')

const index = (req, res) => {
  const { query } = req

  sources
    .getLatest(query)
    .then(items => {
      res.json({ items })
    })
    .catch(err => {
      console.error(err)
      res.sendStatus(422)
    })
}

module.exports = {
  index
}
