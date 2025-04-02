// backend/models/item.js
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


// const Item = sequelize.define("items", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   name: { type: DataTypes.STRING, allowNull: false },
//   description: { type: DataTypes.TEXT },
//   size: { type: DataTypes.ENUM("S", "M", "L") },
//   price: { type: DataTypes.INTEGER },
//   tag: { type: DataTypes.ENUM("new", "sale", "featured") },
//   favorite: { type: DataTypes.ENUM("yes", "no"), allowNull: false },
//   userSell_id: { type: DataTypes.INTEGER, allowNull: false },
//   bought_id: { type: DataTypes.INTEGER },
//   item_image: { type: DataTypes.STRING },  // Ruta de la imagen del artículo
//   created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
// }, {
//   timestamps: false, // No crea `createdAt` y `updatedAt` automáticamente
// });

// module.exports = Item;


