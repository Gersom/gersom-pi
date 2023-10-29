const instanceAPI = require("./instanceAPI")

// const temperamentsFromAPI = async () => {
const getBreedsData = async () => {
  try {
    const response = await instanceAPI({
      method: 'get',
      url: '/breeds',
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

module.exports = getBreedsData