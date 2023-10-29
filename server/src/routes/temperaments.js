const express = require("express")
const router = express.Router()
const handlers = require("../handlers/temperaments")

// route => /temperaments/...

router.get("/", handlers.getAllTs)

router.get("/:id", handlers.getT)

router.post("/", handlers.createT)

router.put("/:id", handlers.updateT)

router.delete("/:id", handlers.deleteT)



module.exports = router