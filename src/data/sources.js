const { proxy, config } = require('../config')

const callService = data => {
  const [service, url] = data

  return new Promise((resolve, reject) => {
    proxy
      .get(url)
      .then(data => {
        resolve({ service, data })
      })
      .catch(err => {
        reject(err)
      })
  })
}

const getLatest = () => {
  return new Promise((resolve, reject) => {
    const { services } = config

    const requests = Object.entries(services).map(item => {
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
