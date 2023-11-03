
const filterByTemperament = (paramsData, searchText ) => {
  if(!searchText) return paramsData
  let dataResult = []

  paramsData.map((ele) => {
    const tmp = ele.temperament + ''
    if(tmp.toLowerCase().includes(searchText.toLowerCase())) {
      dataResult.push(ele)
    }
  })

  return dataResult
}

module.exports = filterByTemperament