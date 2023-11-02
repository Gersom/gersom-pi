const normalizeBreedDogAPI = (breed) => {
  breed.image = breed?.image?.url
  breed.height = breed?.height?.metric
  breed.weight = breed?.weight?.metric
  breed.source = 'dogApi'
  return breed
}

const normalizeBreedsDogAPI = (breeds) => {
  breeds = breeds.map(breed => {
    return normalizeBreedDogAPI(breed)
  })
  return breeds
}


module.exports = {
  normalizeBreedDogAPI,
  normalizeBreedsDogAPI,
}