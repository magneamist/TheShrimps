import sequelize from '../configs/dbConfig.js';
import { DataTypes } from 'sequelize';

// Definir la estructura de la tabla
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

// Definir el modelo con sequelize.define
const itemFavoriteModel = sequelize.define(itemFavoriteTable.name, itemFavoriteTable.cols, {
  timestamps: false  // No agrega createdAt y updatedAt automáticamente
});

// Exportar el modelo
export { itemFavoriteModel };
