const normalizeBreedDB = (breed) => {
  if(breed.temperaments.length == 0) return []
  let temperaments = breed.temperaments.map(temp => {
    return temp.name
  })

  temperaments = temperaments.map(temp => {
    return temp.charAt(0).toUpperCase() + temp.slice(1)
  }).join(', ')
  
  breed.temperament = temperaments
  delete breed.temperaments;
  
  return breed
}

const normalizeBreedsDB = (breeds) => {
  if(breeds.length == 0) return []
  breeds = breeds.map(breed => {
    return normalizeBreedDB(breed.toJSON())
  })
  
  return breeds
}


module.exports = {
  normalizeBreedDB,
  normalizeBreedsDB,
}