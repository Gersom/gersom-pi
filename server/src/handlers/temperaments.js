const {
  getAllTsController,
  getTController,
  postTController,
  updateTController,
  deleteTController
} = require("../controllers/temperaments")

// READ ITEMS
const getAllTs = async (_, res) => {
  try {
    const breeds = await getAllTsController()
    res.status(200).json(breeds)
  }
  catch (error) {
    res.status(500).json({error: error.message})
  }
}

// DETAIL ITEM
const getT = async (req, res) => {
  try {
    const { id } = req.params
    const breed = await getTController(id)
    res.status(200).json(breed);
  } 
  catch (error) {
    res.status(500).json({error: error.message})
  }
}

// CREATE ITEM
const createT = async (req, res) => {
  try {
    const success = await postTController(req.body)
    res.status(200).json(success);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

// UPDATE ITEM
const updateT = async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const success = await updateTController(id, body)
    res.status(200).json(success)
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

// DELETE ITEM
const deleteT = async (req, res) => {
  try {
    const { id } = req.params
    const success = await deleteTController(id)
    res.status(200).json(success)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = {
  getAllTs,
  getT,
  createT,
  updateT,
  deleteT
};
