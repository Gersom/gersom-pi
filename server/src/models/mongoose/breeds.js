const mongoose = require("mongoose")

const name = 'breeds'
const config = { 
  timestamps: true, // createAt, updateAt
  freezeTableName: true
}
const schema = {
  image: { 
    type: String,
    required: true
  },
  name: { 
    type: String,
    required: true
  },
  height: { 
    type: String,
    required: true
  },
  weight: { 
    type: String,
    required: true
  },
  life_span: { 
    type: String,
    required: true
  },
}

const BreedsScheme = new mongoose.Schema(schema, config)

// add static methods (functions) to model
BreedsScheme.static('findAllData', () => {
  return this.find({})
})
BreedsScheme.static('findOneData', (id) => {
  return this.findById(id)
})
BreedsScheme.static('updateData', (id, body) => {
  return this.findOneAndUpdate({ _id: id }, body)
})
BreedsScheme.static('removeData', (id) => {
  return this.deleteOne({ _id: id })
})
BreedsScheme.static('createMany', (data = []) => {
  return this.insertMany(data, { ordered: false })
})
BreedsScheme.static('dataExist', async () => {
  const amountData = await this.countDocuments()
  return amountData > 0
})

const BreedsModel = mongoose.model(name, BreedsScheme)

module.exports = BreedsModel