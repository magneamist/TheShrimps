import sequelize from '../configs/dbConfig.js';
import { DataTypes, Sequelize } from 'sequelize';

const userDetailModel = sequelize.define('UserDetail', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  clerk_user_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phoneNum: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  zip: {
    type: DataTypes.STRING
  },
  billAddress: {
    type: DataTypes.STRING
  },
  favorite: {
    type: DataTypes.ENUM("YES", "NO")
  },
  profile_image: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') // o `new Date()`
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // o `new Date()`
  }
}, {
  timestamps: false // Desactivamos los timestamps automáticos
});

export { userDetailModel };
