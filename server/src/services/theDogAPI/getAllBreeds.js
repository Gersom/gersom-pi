const instanceAPI = require("./instanceAPI")

const getAllBreeds = async () => {
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

module.exports = getAllBreeds