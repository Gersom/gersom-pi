const { TemperamentsModel } = require("../models")

const getAllTsController = async () => {
  const breeds = await TemperamentsModel.findAllData()
  return breeds
}

const getTController = async (id) => {
  const breed = await TemperamentsModel.findOneData(id)
  return breed
};

const postTController = async (data) => {
  await TemperamentsModel.create(data)
  return {
    success: 'breed data was saved correctly.'
  }
}
const updateTController = async (id, data) => {
  await TemperamentsModel.updateData(id, data)
  return {
    success: 'breed data was update correctly.'
  }
}
const deleteTController = async (id, data) => {
  await TemperamentsModel.removeData(id)
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
