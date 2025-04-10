import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize) => {
  const Item = sequelize.define('Item', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    size: { type: DataTypes.ENUM("S", "M", "L") },
    price: { type: DataTypes.INTEGER, allowNull: false },
    tag: { type: DataTypes.ENUM("NEW", "SALE", "FEATURED") },
    favorite: { type: DataTypes.ENUM("YES", "NO") },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'userdetails', key: 'id' },
      onDelete: 'CASCADE'
    },
    bought_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: { model: 'userdetails', key: 'id' },
      onDelete: 'SET NULL'
    },
    image: { type: DataTypes.STRING, allowNull: false },
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
    timestamps: false
  });

  return Item;
};
