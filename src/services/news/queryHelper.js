const { config } = require('../../config')

const safeParams = paramNames => {
  const { services } = config
  const permitted = Object.entries(services || [])

  if (!paramNames || paramNames === 'all') {
    return permitted
  }

  const sources = (paramNames || '').split(',') || []

  return permitted.filter(item => {
    const [key, _] = item
    return sources.includes(key)
  })
}

module.exports = {
  safeParams
}