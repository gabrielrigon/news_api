const theGuardian = payload => {
  const { results } = ((payload || {}).data || {}).response || {}

  return results.map(item => {
    return {
      date: item.webPublicationDate,
      title: item.webTitle,
      url: item.webUrl
    }
  })
}

const theNewYorkTimes = payload => {
  const { results } = (payload || {}).data || {}

  return results.map(item => {
    return {
      date: item.published_date,
      title: item.title,
      url: item.url
    }
  })
}

module.exports = {
  theGuardian,
  theNewYorkTimes
}