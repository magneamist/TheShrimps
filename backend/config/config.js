// import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();


export default {
  development: {
    username: process.env.MYSQL_USER_DEV,
    password: process.env.MYSQL_PASSWORD_DEV,
    database: process.env.MYSQL_DATABASE_DEV,
    host: process.env.DB_HOST_DEV || "localhost",  // Cambiar según el entorno
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
  },
  test: {
    username: process.env.MYSQL_USER_TEST,
    password: process.env.MYSQL_PASSWORD_TEST,
    database: process.env.MYSQL_DATABASE_TEST,
    host: process.env.DB_HOST_TEST || "localhost",
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.DB_HOST,  // 'db' en Docker
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,  // El puerto correcto es 3306
  },
};

