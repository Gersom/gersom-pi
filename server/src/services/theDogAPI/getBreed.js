const instanceAPI = require("./instanceAPI")

const getBreed = async (id) => {
  try {
    const response = await instanceAPI({
      method: 'get',
      url: `/breeds/${id}`,
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

module.exports = getBreed