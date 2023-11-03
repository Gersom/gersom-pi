const paramsObject = (dogName, temperamentName, page) => {
  let result = {}

  if(dogName !== '') result.name = dogName
  if(temperamentName !== '') result.temperament = temperamentName

  result.page = page
  return result
}
export default paramsObject