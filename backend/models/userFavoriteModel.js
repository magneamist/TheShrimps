import sequelize from '../configs/dbConfig.js';
import { DataTypes, Sequelize } from 'sequelize';
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
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  timestamps: false // Desactivamos los timestamps automáticos
});

userFavoriteModel.belongsTo(userDetailModel, { foreignKey: 'user_id', as: 'user' });
userFavoriteModel.belongsTo(userDetailModel, { foreignKey: 'favorite_user_id', as: 'favoriteUser' });

export { userFavoriteModel };