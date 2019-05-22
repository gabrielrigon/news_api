const { proxy } = require('../config')
const { parser, queryHelper, sorter } = require('../services/news')

const callService = source => {
  const [service, url] = source

  return new Promise((resolve, reject) => {
    proxy
      .get(url)
      .then(result => {
        resolve(parser[service](result))
      })
      .catch(err => {
        reject(err)
      })
  })
}

const mergeResults = results => {
  return results.reduce((prev, current) => {
    return [...prev, ...current]
  }, [])
}

const getLatest = query => {
  return new Promise((resolve, reject) => {
    const { sources } = query
    const handledSources = queryHelper.safeParams(sources)

    const requests = handledSources.map(item => {
      return callService(item)
    })

    Promise.all(requests)
      .then(results => {
        resolve(sorter.byDate(mergeResults(results)))
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = {
  getLatest
}
