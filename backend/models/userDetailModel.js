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

// backend/models/user.js
// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/database");

// const User = sequelize.define("usersDetails", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   first_Name: { type: DataTypes.STRING, allowNull: false },
//   last_Name: { type: DataTypes.STRING, allowNull: false },
//   email: { type: DataTypes.STRING, allowNull: false, unique: true },
//   password: { type: DataTypes.STRING, allowNull: false },
//   phone_Num: { type: DataTypes.STRING },
//   street: { type: DataTypes.STRING },
//   city: { type: DataTypes.STRING },
//   country: { type: DataTypes.STRING },
//   zip_Code: { type: DataTypes.INTEGER },
//   bill_Address: { type: DataTypes.STRING },
//   favorite: { type: DataTypes.ENUM("yes", "no") },
//   profile_image: { type: DataTypes.STRING },  // Ruta de la imagen de perfil
//   created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
// }, {
//   timestamps: false, // No crea `createdAt` y `updatedAt` automáticamente
// });

// module.exports = User;
