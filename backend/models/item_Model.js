// backend/models/item.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Item = sequelize.define("items", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  size: { type: DataTypes.ENUM("small", "medium", "large") },
  price: { type: DataTypes.INTEGER },
  tag: { type: DataTypes.ENUM("new", "sale", "featured") },
  favorite: { type: DataTypes.ENUM("yes", "no"), allowNull: false },
  userSell_id: { type: DataTypes.INTEGER, allowNull: false },
  bought_id: { type: DataTypes.INTEGER },
  item_image: { type: DataTypes.STRING },  // Ruta de la imagen del artículo
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  timestamps: false, // No crea `createdAt` y `updatedAt` automáticamente
});

module.exports = Item;
