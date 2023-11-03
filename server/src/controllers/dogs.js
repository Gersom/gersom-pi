const { breedsModel, temperamentsModel } = require("../models")
const getBreedsDogApi = require("../services/theDogAPI/getAllBreeds")
const getBreedDogApi = require("../services/theDogAPI/getBreed")
const getBreedsName = require("../services/theDogAPI/getBreedsName")
const {
  normalizeBreedDogAPI,
  normalizeBreedsDogAPI,
} = require("../services/theDogAPI/normalizeBreeds")
const {
  normalizeBreedsDB,
} = require("../services/database/normalizeBreeds")
const {
  getAllBreedsController,
  getBreedController
} = require("./breeds")
const formatResponse = require("../utils/formatResponse")
const filterByTemperament = require("../utils/filterByTemperament")

const getAllDogsController = async ({
  dogName, temperamentName, page, source
}) => {
  let breedsDB = []
  let breedsDogApi = []
  
  if(source==='database') {
    if (dogName === undefined) {
      breedsDB = await getAllBreedsController()
    } else {
      breedsDB = await breedsModel.findByPartial(
        'name', dogName.toLowerCase()
      )
    }
    breedsDB = await normalizeBreedsDB(breedsDB)
  }
  else if (source === 'dogapi') {
    if (dogName === undefined) {
      breedsDogApi = await getBreedsDogApi()
    } else {
      breedsDogApi = await getBreedsName(dogName)
    }
    breedsDogApi = await normalizeBreedsDogAPI(breedsDogApi)
  }
  else {
    if (dogName === undefined) {
      breedsDB = await getAllBreedsController()
      breedsDogApi = await getBreedsDogApi()
    } else {
      breedsDB = await breedsModel.findByPartial(
        'name', dogName.toLowerCase()
      )
      breedsDogApi = await getBreedsName(dogName)
    }
    breedsDB = await normalizeBreedsDB(breedsDB)
    breedsDogApi = await normalizeBreedsDogAPI(breedsDogApi)
  }

  let allBreeds = [...breedsDB, ...breedsDogApi]
  
  if(temperamentName !== undefined) {
    allBreeds = filterByTemperament(allBreeds, temperamentName)
  }  

  // paginado
  return formatResponse(allBreeds, page)
}

const getDogsNameController = async (name, page=1) => {
  let breedsDB = await breedsModel.findByPartial(
    'name', name.toLowerCase()
  )
  breedsDB = await normalizeBreedsDB(breedsDB)

  let breedsDogApi = await getBreedsName(name)
  breedsDogApi = normalizeBreedsDogAPI(breedsDogApi)

  const allBreeds = [...breedsDB,...breedsDogApi]

  return formatResponse(allBreeds, page)
}

const getDogController = async (id) => { 
  const breedDogApi = await getBreedDogApi(id)
  if (Object.keys(breedDogApi).length !== 0) {
    return normalizeBreedDogAPI(breedDogApi)
  }

  try {
    const breedDB = await getBreedController(id)
    if (Object.keys(breedDB).length !== 0) {
      return breedDB
    }
  } catch (error) {
    return {}
  }

  return {}
}

const postDogController = async (data) => {
  const {temperaments,...body} = data
  let tempsDB = []

  for (const temperamentId of temperaments) {
    const tempDB = await temperamentsModel.findOneData(temperamentId)
    if(tempDB==null){
      throw Error(`Temperament ID incorrect: ${temperamentId}`)
    }
    tempsDB.push(tempDB)
  }
  const newDog = await breedsModel.create(body)
  
  for (const temp of tempsDB) {
    await newDog.addTemperaments(temp);
  }

  return {
    success: 'breed data was saved correctly.'
  }
}

const updateDogController = async (id, data) => {
  // await breedsModel.updateData(id, data)
  // return {
  //   success: 'breed data was update correctly.'
  // }
}

const deleteDogController = async (id, data) => {
  // await breedsModel.removeData(id)
  // return {
  //   success: 'breed data was update correctly.'
  // }
}

module.exports = {
  getAllDogsController,
  getDogController,
  getDogsNameController,
  postDogController,
  updateDogController,
  deleteDogController
}
