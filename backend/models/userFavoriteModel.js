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