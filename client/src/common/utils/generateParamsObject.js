const paramsObject = (
  dogName, temperamentName, page, origin=''
) => {
  let result = {}

  if(dogName !== '') result.name = dogName
  if(temperamentName !== '') result.temperament = temperamentName
  if(origin !== '') result.origin = origin

  result.page = page
  return result
}
export default paramsObject