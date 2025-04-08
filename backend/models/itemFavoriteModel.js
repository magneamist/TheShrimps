import sequelize from '../configs/dbConfig.js';
import { DataTypes, Sequelize } from 'sequelize';
import { userDetailModel } from './userDetailModel.js';
import { itemModel } from './itemModel.js';

const itemFavoriteModel = sequelize.define('ItemFavorite', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'UserDetails',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Items',
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

itemFavoriteModel.belongsTo(userDetailModel, { foreignKey: 'user_id', as: 'user' });
itemFavoriteModel.belongsTo(itemModel, { foreignKey: 'item_id', as: 'item' });

export { itemFavoriteModel };

