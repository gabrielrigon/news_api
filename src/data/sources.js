const { proxy } = require('../config')
const { parser, queryHelper } = require('../services/news')

const callService = source => {
  const [service, url] = source

  return new Promise((resolve, reject) => {
    proxy
      .get(url)
      .then(result => {
        const data = parser[service](result)
        resolve({ service, data })
      })
      .catch(err => {
        reject(err)
      })
  })
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
        resolve(results)
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = {
  getLatest
}
