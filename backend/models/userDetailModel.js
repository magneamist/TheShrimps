import { DataTypes, Sequelize } from 'sequelize';

export default (sequelize) => {
  const UserDetail = sequelize.define('UserDetail', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
    clerk_user_id: { type: DataTypes.STRING, allowNull: false, unique: true },
    firstname: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    phoneNum: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    zip: { type: DataTypes.STRING },
    billAddress: { type: DataTypes.STRING },
    favorite: { type: DataTypes.ENUM("YES", "NO") },
    profile_image: { type: DataTypes.STRING },
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

  return UserDetail;
};
