const { DataTypes, Sequelize } = require('sequelize');
const { sequelize } = require("../../config/dbConnect/engines/postgresql")
const TemperamentsModel = require(`./temperaments`)

const name = 'breeds'
const config = { 
  timestamps: true, // createAt, updateAt
  freezeTableName: true
}
const schema = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV1,
  },
  source: {
    type: DataTypes.STRING,
    defaultValue: 'database',
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

// Add many-to-many relationship
BreedsModel.belongsToMany(TemperamentsModel, { through: 'breeds_temperaments' });
TemperamentsModel.belongsToMany(BreedsModel, { through: 'breeds_temperaments' });

// Add static methods (functions) to model
BreedsModel['findAllData'] = () => {
  return BreedsModel.findAll({
    include: [
      {
        model: TemperamentsModel,
        attributes: ['name']
      }
    ]
  })
}
BreedsModel['findOneData'] = (id) => {
  return BreedsModel.findByPk(id)
}
BreedsModel['updateData'] = (id, body) => {
  return BreedsModel.update(body, { where: {id} })
}
BreedsModel['removeData'] = (id) => {
  return BreedsModel.destroy({ where: {id} })
}
BreedsModel['createMany'] = (data = []) => {
  return BreedsModel.bulkCreate(data, { ignoreDuplicates: true })
}
BreedsModel['dataExist'] = async () => {
  const amountData = await BreedsModel.count()
  return amountData > 0
}
BreedsModel['findByPartial'] = (key, value) => {
  return BreedsModel.findAll({
    where: {
      [key]: {
        [Sequelize.Op.like]: `%${value}%`
      }
    }
  });
}


module.exports = BreedsModel

