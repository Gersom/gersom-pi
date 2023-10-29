const { temperamentsModel } = require("../models")

const getAllTsController = async () => {
  const temperaments = await temperamentsModel.findAllData()
  return temperaments
}

const getTController = async (id) => {
  const temperament = await temperamentsModel.findOneData(id)
  return temperament
};

const postTController = async (data) => {
  await temperamentsModel.create(data)
  return {
    success: 'breed data was saved correctly.'
  }
}
const updateTController = async (id, data) => {
  await temperamentsModel.updateData(id, data)
  return {
    success: 'breed data was update correctly.'
  }
}
const deleteTController = async (id, data) => {
  await temperamentsModel.removeData(id)
  return {
    success: 'breed data was update correctly.'
  }
}

module.exports = {
  getAllTsController,
  getTController,
  postTController,
  updateTController,
  deleteTController
};
