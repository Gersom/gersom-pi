const { DataTypes } = require("sequelize")
const { sequelize } = require("../../config/dbConnect/engines/postgresql")

const name = 'temperaments'
const config = { 
  timestamps: true, // createAt, updateAt
  freezeTableName: true
}
const schema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}

const TemperamentsModel = sequelize.define(name, schema, config)

// Add static methods (functions) to model
TemperamentsModel['findAllData'] = () => {
  return TemperamentsModel.findAll()
}
TemperamentsModel['findOneData'] = (id) => {
  return TemperamentsModel.findByPk(id)
}
TemperamentsModel['updateData'] = (id, body) => {
  return TemperamentsModel.update(body, { where: {id} })
}
TemperamentsModel['removeData'] = (id) => {
  return TemperamentsModel.destroy({ where: {id} })
}
TemperamentsModel['createMany'] = (data = []) => {
  return TemperamentsModel.bulkCreate(data, { ignoreDuplicates: true })
}

module.exports = TemperamentsModel
