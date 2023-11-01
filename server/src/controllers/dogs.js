require('dotenv').config()

const portEnv = process.env.PORT || 3000
const hostEnv = process.env.HOST || 'http://localhost'
const urlEnv = `${hostEnv}:${portEnv}`

const { breedsModel, temperamentsModel } = require("../models")
const getBreedsDogApi = require("../services/theDogAPI/getAllBreeds")
const getBreedDogApi = require("../services/theDogAPI/getBreed")
const getBreedsName = require("../services/theDogAPI/getBreedsName")
const {
  normalizeBreed,
  normalizeBreeds,
} = require("../services/theDogAPI/normalizeBreeds")
const {
  getAllBreedsController,
  getBreedController
} = require("./breeds")

const getAllDogsController = async (page = 1) => {
  const breedsDB = await getAllBreedsController()

  let breedsDogApi = await getBreedsDogApi()
  breedsDogApi = normalizeBreeds(breedsDogApi)
  
  const allBreeds = [...breedsDB, ...breedsDogApi]

  const parts = 8
  const initialIndex = parts * (page-1)

  const pagesTotal = Math.ceil(allBreeds.length / parts)
  const pageNext = (page+1) <= pagesTotal ? page+1 : null
  const pagePrev = (page-1) >= 1 ? page-1 : null
  const urllAll = `${urlEnv}/api/dogs?page=`

  return {
    info: {
      currentPage: page,
      pages: pagesTotal,
      count: allBreeds.length,
      next: pageNext ? urllAll+pageNext : null,
      prev: pagePrev ? urllAll+pagePrev : null,
      author: 'Gersom'
   },
    results: allBreeds.slice(initialIndex, initialIndex+parts)
  }
}

const getDogController = async (id) => { 
  const breedDogApi = await getBreedDogApi(id)
  if (Object.keys(breedDogApi).length !== 0) {
    return normalizeBreed(breedDogApi)
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

const getDogsNameController = async (name) => {
  const breedsDB = await breedsModel.findByPartial(
    'name', name.toLowerCase()
  )
  let breedsDogApi = await getBreedsName(name)
  breedsDogApi = normalizeBreeds(breedsDogApi)

  return [...breedsDB,...breedsDogApi]
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
