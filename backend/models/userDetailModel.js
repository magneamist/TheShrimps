import sequelize from '../configs/dbConfig.js';
import { DataTypes, Model } from 'sequelize';

export class userDetailModel extends Model {}

userDetailModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
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

  password: {
    type: DataTypes.STRING,
    allowNull: false
  },

  city: {
    type: DataTypes.STRING
  },

  zip: {
    type: DataTypes.INTEGER
  },

  billAddress: {
    type: DataTypes.STRING
  },

  favorite: {
    type: DataTypes.ENUM("YES", "NO")
  },

  pfp: {
    type: DataTypes.STRING
  },

  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
})
