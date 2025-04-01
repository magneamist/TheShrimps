const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
const User = require("./userDetail_Model");

const UserFavorites = sequelize.define("userFavorites", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  favorite_user_id: { type: DataTypes.INTEGER, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  timestamps: false,
});

// Relaciones
UserFavorites.belongsTo(User, { foreignKey: "user_id", as: "user" });
UserFavorites.belongsTo(User, { foreignKey: "favorite_user_id", as: "favoriteUser" });

module.exports = UserFavorites;
