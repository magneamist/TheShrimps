const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
const User = require("./userDetail_Model");

const Item = sequelize.define("items", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  size: { type: DataTypes.ENUM("small", "medium", "large") },
  price: { type: DataTypes.INTEGER, allowNull: false },
  tag: { type: DataTypes.ENUM("new", "used") },
  favorite: { type: DataTypes.ENUM("yes", "no"), allowNull: false },
  userSell_id: { type: DataTypes.INTEGER, allowNull: false },
  bought_id: { type: DataTypes.INTEGER },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  timestamps: false,
});

// Relación con usuarios
Item.belongsTo(User, { foreignKey: "userSell_id", as: "seller" });
Item.belongsTo(User, { foreignKey: "bought_id", as: "buyer" });

module.exports = Item;
