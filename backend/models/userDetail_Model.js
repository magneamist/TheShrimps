const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

const User = sequelize.define("usersDetails", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  first_Name: { type: DataTypes.STRING, allowNull: false },
  last_Name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  phone_Num: { type: DataTypes.STRING },
  street: { type: DataTypes.STRING },
  city: { type: DataTypes.STRING },
  country: { type: DataTypes.STRING },
  zip_Code: { type: DataTypes.INTEGER },
  bill_Address: { type: DataTypes.STRING },
  favorite: { type: DataTypes.ENUM("yes", "no") },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  timestamps: false, // No crea `createdAt` y `updatedAt` automáticamente
});

module.exports = User;
