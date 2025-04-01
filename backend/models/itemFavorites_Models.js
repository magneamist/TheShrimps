const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
const User = require("./userDetail_Model");
const Item = require("./item_Model");

const ItemFavorites = sequelize.define("itemFavorites", {
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    item_id: { type: DataTypes.INTEGER, allowNull: false },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
    timestamps: false,
});

// Relaciones
ItemFavorites.belongsTo(User, { foreignKey: "user_id", as: "user" });
ItemFavorites.belongsTo(Item, { foreignKey: "item_id", as: "item" });

module.exports = ItemFavorites;
