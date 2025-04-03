import sequelize from '../configs/dbConfig.js';
import { DataTypes } from 'sequelize';

const itemFavoriteTable = {
  name: 'ItemFavorite',
  cols: {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }
};

const itemFavoriteModel = sequelize.define(itemFavoriteTable.name, itemFavoriteTable.cols, {
  timestamps: false
});

export { itemFavoriteModel };
