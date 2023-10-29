const { breedsModel } = require('../../models')

const data = [
  {
    "image": "url",
    "name": "electrico",
    "height": "60cm",
    "weight": "12kg",
    "life_span": "5 años"
  }, {
    "image": "url",
    "name": "acuatico",
    "height": "89cm",
    "weight": "15kg",
    "life_span": "8 años"
  },
]

const insertBreeds = async () => {
  try {
    const message = 'Breeds data inserted into the database.'
    const dataExist = await breedsModel.dataExist()
    if(!dataExist){
      await breedsModel.createMany(data)
      console.log(`- ${data.length} ${message}`)
    } else {
      console.log(`- 0 ${message}`)
    }
  } catch (err) {
    console.log('ERROR: insert data into Breeds.\n')
    throw Error(err.message)
  }
}

module.exports = insertBreeds