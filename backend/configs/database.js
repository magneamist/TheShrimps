require('dotenv').config();  // Cargar las variables del .env

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    // process.env.DB_NAME,
    // process.env.DB_USER,
    // process.env.DB_PASS,
    'shrimpsClothes',
    'root',          
    '1234',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

module.exports = sequelize;
