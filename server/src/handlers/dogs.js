const {
  getAllDogsController,
  getDogController,
  getDogsNameController,
  postDogController,
  updateDogController,
  deleteDogController
} = require("../controllers/dogs")

// READ ITEMS
const getAllDogs = async (req, res) => {
  try {
    let page = parseInt(req.query.page)
    if(!isNaN(page)) page = page < 1 ? 1 : page
    else page = 1

    const dogs = await getAllDogsController(page)
    res.status(200).json(dogs)
  }
  catch (error) {
    res.status(500).json({error: error.message})
  }
}

// DETAIL ITEM
const getDog = async (req, res) => {
  try {
    const { id } = req.params
    const dog = await getDogController(id)
    res.status(200).json(dog);
  } 
  catch (error) {
    res.status(500).json({error: error.message})
  }
}

// SEARCH FOR NAME
const getDogName = async (req, res) => {
  let page = parseInt(req.query.page)
  if(!isNaN(page)) page = page < 1 ? 1 : page
  else page = 1

  const name = req.query.search
  if(!name) {
    res.status(400).json({error: 'Name is missing'})
  } else {
    try {
      const dogs = await getDogsNameController(name, page)
      if(dogs.length===0) res.status(404).json({
        error: "There are no dogs with that name."
      })
      else res.status(200).json(dogs);
    }
    catch (error) {
      res.status(500).json({error: error.message})
    }
  }
}

// CREATE ITEM
const createDog = async (req, res) => {
  try {
    const success = await postDogController(req.body)
    res.status(200).json(success);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

// UPDATE ITEM
const updateDog = async (req, res) => {
  try {
    const { id } = req.params
    const { body } = req
    const success = await updateDogController(id, body)
    res.status(200).json(success)
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

// DELETE ITEM
const deleteDog = async (req, res) => {
  try {
    const { id } = req.params
    const success = await deleteDogController(id)
    res.status(200).json(success)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

module.exports = {
  getAllDogs,
  getDog,
  getDogName,
  createDog,
  updateDog,
  deleteDog
};
