require('dotenv').config()
const axios = require('axios')
const apiKeyName = process.env.DOG_API_KEYNAME
const apiKey = process.env.DOG_API_KEY
const apiUrl = process.env.DOG_API_URL

const instanceAPI = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  headers: {[apiKeyName]: apiKey}
})

module.exports = instanceAPI