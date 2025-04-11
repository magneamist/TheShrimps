import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize) => {
  const ItemFavorite = sequelize.define('ItemFavorite', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'userdetails', key: 'id' },
      onDelete: 'CASCADE'
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Items', key: 'id' },
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
    timestamps: false
  });

  return ItemFavorite;
};
