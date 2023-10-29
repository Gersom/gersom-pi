const getUniqueTemperaments = (data) => {
  // => [ { temperament: "ass, ss, ss" } ]
  
  let temperaments = data.map(obj => obj.temperament)
  // => ["ass, asda", "ass, ss, ss"]

  temperaments = temperaments.join(', ') 
  // => "ass, asda, ass, ss, ss"
  
  temperaments = temperaments.split(', ')
  // => ["ass", "asda", "ass", "ss", "ss"]

  const uniqueTemperaments = [
    ...new Set(temperaments.map(temp => temp.toLowerCase()))
  ] // => ["ass", "asda", "ss"]
  
  return uniqueTemperaments.filter(str => str != "")
}

module.exports = getUniqueTemperaments