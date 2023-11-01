const express = require("express")
const router = express.Router()
const handlers = require("../handlers/dogs")

// route => /dogs/...

router.get("/", handlers.getAllDogs)

router.get("/name", handlers.getDogName)
router.get("/:id", handlers.getDog)

router.post("/", handlers.createDog)

router.put("/:id", handlers.updateDog)

router.delete("/:id", handlers.deleteDog)

module.exports = router