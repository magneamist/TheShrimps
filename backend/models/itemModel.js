import sequelize from '../configs/dbConfig.js'
import { DataTypes, Model } from 'sequelize';

export class itemModel extends Model {}

itemModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  size: {
    type: DataTypes.ENUM("S", "M", "L")
  },

  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  
  tag: {
    type: DataTypes.ENUM("NEW", "SALE", "FEATURED")
  },

  favorite: {
    type: DataTypes.ENUM("YES", "NO")
  },

  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  bought_id: {
    type: DataTypes.INTEGER
  },

  image: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: "item",
  tableName: "item"
})