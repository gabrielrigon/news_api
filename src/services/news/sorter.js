const byDate = items => {
  return items.sort((a, b) => {
    return b.date - a.date
  })
}

module.exports = {
  byDate
}
