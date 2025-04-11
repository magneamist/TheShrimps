import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize) => {
  const UserFavorite = sequelize.define('UserFavorite', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'userdetails', key: 'id' },
      onDelete: 'CASCADE'
    },
    favorite_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'userdetails', key: 'id' },
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

  return UserFavorite;
};
