require('dotenv').config()

const portEnv = process.env.PORT || 3000
const hostEnv = process.env.HOST || 'http://localhost'
const urlEnv = `${hostEnv}:${portEnv}`

const formatResponse = (paramsData, page) => {
  const parts = 8
  const initialIndex = parts * (page-1)

  const pagesTotal = Math.ceil(paramsData.length / parts)
  const pageNext = (page+1) <= pagesTotal ? page+1 : null
  const pagePrev = (page-1) >= 1 ? page-1 : null
  const urllAll = `${urlEnv}/api/dogs?page=`

  return {
    info: {
      currentPage: page,
      pages: pagesTotal,
      count: paramsData.length,
      next: pageNext ? urllAll+pageNext : null,
      prev: pagePrev ? urllAll+pagePrev : null,
      author: 'Gersom'
   },
    results: paramsData.slice(initialIndex, initialIndex+parts)
  }
}

module.exports = formatResponse