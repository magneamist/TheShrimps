import sequelize from '../configs/dbConfig.js';
import { DataTypes } from 'sequelize';

// Definir la estructura de la tabla
const itemTable = {
  name: 'Item',
  cols: {
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
      allowNull: false
    },
    bought_id: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }
};

// Crear el modelo en Sequelize
const itemModel = sequelize.define(itemTable.name, itemTable.cols, {
  timestamps: true
});

export { itemModel };
