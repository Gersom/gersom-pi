const express = require("express")
const router = express.Router()
const handlers = require("../handlers/breeds")

// route => /breeds/...

router.get("/", handlers.getAllBreeds)

router.get("/:id", handlers.getBreed)

router.post("/", handlers.createBreed)

router.put("/:id", handlers.updateBreed)

router.delete("/:id", handlers.deleteBreed)



module.exports = router