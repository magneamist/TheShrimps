import sequelize from '../configs/dbConfig.js';
import { DataTypes, Model } from 'sequelize';

export class UserDetailModel extends Model { }

UserDetailModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },

  clerk_user_id: {  // Identificador de Clerk
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
    type: DataTypes.INTEGER
  },

  billAddress: {
    type: DataTypes.STRING
  },

  favorite: {
    type: DataTypes.ENUM("YES", "NO")
  },

  profile_image: {  // Nombre consistente con la tabla
    type: DataTypes.STRING
  },

  // created_at: {
  //   type: DataTypes.DATE,
  //   defaultValue: DataTypes.NOW
  // }
})
