const mongoose = require("mongoose")

const name = 'temperaments'
const config = {
  timestamps: true, // createAt, updateAt
  versionKey: false
}
const schema = {
  name: { 
    type: String,
    required: true
  }
}

const TemperamentsScheme = new mongoose.Schema(schema, config)

// add static methods (functions) to model
TemperamentsScheme.static('findAllData', () => {
  return this.find({})
})
TemperamentsScheme.static('findOneData', (id) => {
  return this.findById(id)
})
TemperamentsScheme.static('updateData', (id, body) => {
  return this.findOneAndUpdate({ _id: id }, body)
})
TemperamentsScheme.static('removeData', (id) => {
  return this.deleteOne({ _id: id })
})
BreedsScheme.static('createMany', (data = []) => {
  return this.insertMany(data, { ordered: false })
})

const TemperamentsModel = mongoose.model(name, TemperamentsScheme)

module.exports = TemperamentsModel