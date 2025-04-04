import sequelize from '../configs/dbConfig.js';
import { DataTypes } from 'sequelize';
import { userDetailModel } from './userDetailModel.js';

const userFavoriteModel = sequelize.define('UserFavorite', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'UserDetails',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  favorite_user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'UserDetails',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true
});

userFavoriteModel.belongsTo(userDetailModel, { foreignKey: 'user_id', as: 'user' });
userFavoriteModel.belongsTo(userDetailModel, { foreignKey: 'favorite_user_id', as: 'favoriteUser' });

export { userFavoriteModel };
