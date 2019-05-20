const { sources } = require("../data")

const index = (req, res) => {
  sources.getLatest()
    .then(data => {
      res.json({ data })
    })
    .catch(err => {
      console.error(err)
      res.status(500).send(err)
    })
}

module.exports = {
  index
}
