require('dotenv').config()

const ENGINE_DB = process.env.ENGINE_DB || 'mongodb'
let dbConnect = ()=>null

switch (ENGINE_DB) {
  case "postgresql":
    dbConnect = require("./engines/postgresql")
    break
  case "mongodb":
    dbConnect = require("./engines/mongodb")
    break
  default:
    throw new Error("Environment variable 'ENGINE_DB' is not valid.")
}

module.exports = dbConnect