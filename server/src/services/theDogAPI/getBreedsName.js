const instanceAPI = require("./instanceAPI")

const getBreedsName = async (name) => {
  try {
    const response = await instanceAPI({
      method: 'get',
      url: '/breeds/search',
      params: { q: name }
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

module.exports = getBreedsName