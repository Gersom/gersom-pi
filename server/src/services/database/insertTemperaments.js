const getBreedsDogAPI = require("../theDogAPI/getBreeds")
const getUniqueTemperaments = require("../../utils/getUniqueTemperaments")
const { temperamentsModel } = require('../../models')

const insertTemperaments = async () => {
  try {
    const breeds = await getBreedsDogAPI()
    let tempsDogAPI = getUniqueTemperaments(breeds)
    
    let tempsDB = await temperamentsModel.findAllData()
    tempsDB = tempsDB.map(obj => obj.name)
    let amounttemps = []
    if (tempsDB.length === 0) {
      tempsDogAPI = tempsDogAPI.map((temp) => ({ name: temp }))
      amounttemps = await temperamentsModel.createMany(tempsDogAPI)
    } else {
      tempsDogAPI = tempsDogAPI.filter(temp => !tempsDB.includes(temp))
      if (tempsDogAPI.length > 0) {
        tempsDogAPI = tempsDogAPI.map((temp) => ({ name: temp }))
        amounttemps = await temperamentsModel.createMany(tempsDogAPI)
      }
    }
    
    console.log(`- ${amounttemps.length} Temperaments data inserted into the database.`)
  } catch (err) {
    throw Error(err.message)
    // throw Error('ERROR: insert data into Temperaments.')
  }
}

module.exports = insertTemperaments