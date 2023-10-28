const { breedsModel } = require("../models")

const getAllBreedsController = async () => {
  const breeds = await breedsModel.findAllData()
  return breeds
}

const getBreedController = async (id) => {
  const breed = await breedsModel.findOneData(id)
  return breed
};

const postBreedController = async (data) => {
  await breedsModel.create(data)
  return {
    success: 'breed data was saved correctly.'
  }
}
const updateBreedController = async (id, data) => {
  await breedsModel.updateData(id, data)
  return {
    success: 'breed data was update correctly.'
  }
}
const deleteBreedController = async (id, data) => {
  await breedsModel.removeData(id)
  return {
    success: 'breed data was update correctly.'
  }
}

module.exports = {
  getAllBreedsController,
  getBreedController,
  postBreedController,
  updateBreedController,
  deleteBreedController
};
