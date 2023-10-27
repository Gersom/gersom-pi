const { DataTypes } = require('sequelize');
const { sequelize } = require("../../config/dbConnect/engines/postgresql")

const name = 'breeds'
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
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  height: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weight: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  life_span: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}

const BreedsModel = sequelize.define(name, schema, config)

// add static methods (functions) to model
BreedsModel['findAllData'] = () => {
  return BreedsModel.findAll()
}
BreedsModel['findOneData'] = (id) => {
  return BreedsModel.findByPk(id)
}

module.exports = BreedsModel

