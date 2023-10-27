const ENGINE_DB = process.env.ENGINE_DB
let pathModel = ''

switch (ENGINE_DB) {
  case "postgresql":
    pathModel = 'sequelize'
    break
  case "mongodb":
    pathModel = 'mongoose'
    break
  default:
    throw new Error("Environment variable 'ENGINE_DB' is not valid.")
}

const models = {
  // itemsModel: require(`./${pathModel}/items`),
  breedsModel: require(`./${pathModel}/breeds`)
}

export default models