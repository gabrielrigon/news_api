const theGuardian = payload => {
  const { results } = ((payload || {}).data || {}).response || {}

  return results.map(item => {
    return {
      date: new Date(item.webPublicationDate),
      title: item.webTitle,
      url: item.webUrl,
      source: 'The Guardian'
    }
  })
}

const theNewYorkTimes = payload => {
  const { results } = (payload || {}).data || {}

  return results.map(item => {
    return {
      date: new Date(item.published_date),
      title: item.title,
      url: item.url,
      source: 'The New York Times'
    }
  })
}

module.exports = {
  theGuardian,
  theNewYorkTimes
}