const express = require("express")
const middlewares = require("./config/middlewares")
const listen = require("./config/listen")
const { dbConnect } = require("./config/dbConnect")
const insertBreeds = require("./services/database/insertBreeds")
const insertTemperaments = require("./services/database/insertTemperaments")

const app = express()

// MIDDLEWARES
middlewares(app)

// ROUTES
// http://localhost/api/
app.use("/api", require("./routes"))

// NOT FOUND
app.use((_, res) => {
  res.status(404).json({
    error: "Unconfigured route, please review the documentation."
  });
});

// LISTEN
listen(app, () => {
  // Database conexion
  dbConnect()

  // Register or Updater Temperaments from API
  // temperamentsFromAPI()

  // insert Breeds into Database.
  insertBreeds()
  insertTemperaments()
})