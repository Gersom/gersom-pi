const normalizeBreed = (breed) => {
  breed.image = breed?.image?.url
  breed.height = breed?.height?.metric
  breed.weight = breed?.weight?.metric
  breed.source = 'dogApi'
  return breed
}

const normalizeBreeds = (breeds) => {
  breeds = breeds.map(breed => {
    return normalizeBreed(breed)
  })
  return breeds
}


module.exports = {
  normalizeBreed,
  normalizeBreeds,
}