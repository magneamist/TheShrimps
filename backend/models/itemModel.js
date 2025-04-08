import sequelize from '../configs/dbConfig.js';
import { DataTypes, Sequelize } from 'sequelize';
import { userDetailModel } from './userDetailModel.js';

const itemModel = sequelize.define('Item', {
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
    allowNull: false,
    references: {
      model: 'UserDetails',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  bought_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'UserDetails',
      key: 'id'
    },
    onDelete: 'SET NULL'
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
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

itemModel.belongsTo(userDetailModel, { foreignKey: 'seller_id', as: 'seller' });
itemModel.belongsTo(userDetailModel, { foreignKey: 'bought_id', as: 'buyer' });

export { itemModel };
