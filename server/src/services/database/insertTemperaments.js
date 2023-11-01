const getBreedsDogAPI = require("../theDogAPI/getAllBreeds")
const getUniqueTemperaments = require("../../utils/getUniqueTemperaments")
const { temperamentsModel } = require('../../models')

const insertTemperaments = async () => {
  try {
    const breeds = await getBreedsDogAPI()
    let tempsDogAPI = getUniqueTemperaments(breeds)
    tempsDogAPI = tempsDogAPI.map((temp) => ({ name: temp }))
    
    let amounttemps = []
    let tempsDB = await temperamentsModel.findAllData()

    if (tempsDB.length === 0) {
      amounttemps = await temperamentsModel.createMany(tempsDogAPI)
    } 
    else {
      tempsDB = tempsDB.map(obj => obj.name)
      tempsDogAPI = tempsDogAPI.filter((temp) => {
        return !tempsDB.includes(temp.name)
      })
      
      if (tempsDogAPI.length > 0) {
        amounttemps = await temperamentsModel.createMany(tempsDogAPI)
      }
    }
    
    console.log(`- ${amounttemps.length} Temperaments data inserted into the database.`)
  } catch (err) {
    console.log('ERROR: insert data into Temperaments.\n')
    throw Error(err.message)
  }
}

module.exports = insertTemperaments