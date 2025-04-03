import sequelize from '../configs/dbConfig.js';
import { DataTypes } from 'sequelize';
import { userDetailModel } from './userDetailModel.js';

// Definir la estructura de la tabla
const userFavoriteTable = {
  name: 'UserFavorite',
  cols: {
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
  }
};

// Crear el modelo con sequelize.define
const userFavoriteModel = sequelize.define(userFavoriteTable.name, userFavoriteTable.cols, {
  timestamps: true
});

// Definir las relaciones
userFavoriteModel.belongsTo(userDetailModel, { foreignKey: "user_id", as: "user" });
userFavoriteModel.belongsTo(userDetailModel, { foreignKey: "favorite_user_id", as: "favoriteUser" });

export { userFavoriteModel };
