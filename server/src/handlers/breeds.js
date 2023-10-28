const {
  getAllBreedsController,
  getBreedController,
  postBreedController,
  updateBreedController,
  deleteBreedController
} = require("../controllers/breeds")

// READ ITEMS
const getAllBreeds = async (_, res) => {
  try {
    const breeds = await getAllBreedsController()
    res.status(200).json(breeds)
  }
  catch (error) {
    res.status(500).json({error: error.message})
  }
}

// DETAIL ITEM
const getBreed = async (req, res) => {
  try {
    const { id } = req.params
    const breed = await getBreedController(id)
    res.status(200).json(breed);
  } 
  catch (error) {
    res.status(500).json({error: error.message})
  }
}

// CREATE ITEM
const createBreed = async (req, res) => {
  try {
    const success = await postBreedController(req.body)
    res.status(200).json(success);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

// UPDATE ITEM
const updateBreed = async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const success = await updateBreedController(id, body)
    res.status(200).json(success)
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

// DELETE ITEM
const deleteBreed = async (req, res) => {
  try {
    const { id } = req.params
    const success = await deleteBreedController(id)
    res.status(200).json(success)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = {
  getAllBreeds,
  getBreed,
  createBreed,
  updateBreed,
  deleteBreed
};
