const ENGINE_DB = process.env.ENGINE_DB

const getProperties = () => {
  switch (ENGINE_DB) {
    case "postgresql":
      return { id: 'id' }
    case "mongodb":
      return { id: '_id' }
    default:
      throw new Error("Environment variable 'ENGINE_DB' is not valid.")
  }
}

module.exports = getProperties