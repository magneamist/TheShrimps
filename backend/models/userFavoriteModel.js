import sequelize from '../configs/dbConfig.js'
import { DataTypes, Model } from 'sequelize'

import { userDetailModel } from './userDetailModel.js'

export class userFavoriteModel extends Model {}

userFavoriteModel.init({
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  favorite_user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

userFavoriteModel.belongsTo(User, { foreignKey: "user_id", as: "user"});
userFavoriteModel.belongsTo(User, { foreignKey: "favorite_user_id", as: "favoriteUser"})


// const { DataTypes } = require("sequelize");
// const sequelize = require("../configs/dbConfig");
// const User = require("./userDetail_Model");

// const UserFavorites = sequelize.define("userFavorites", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   user_id: { type: DataTypes.INTEGER, allowNull: false },
//   favorite_user_id: { type: DataTypes.INTEGER, allowNull: false },
//   created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
// }, {
//   timestamps: false,
// });

// // Relaciones
// UserFavorites.belongsTo(User, { foreignKey: "user_id", as: "user" });
// UserFavorites.belongsTo(User, { foreignKey: "favorite_user_id", as: "favoriteUser" });

// module.exports = UserFavorites;
