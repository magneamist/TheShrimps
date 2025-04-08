import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbConfig = new Sequelize(
    // process.env.DB_NAME,
    // process.env.DB_USER,
    // process.env.DB_PASS,
    "shrimpsclothes",
    "root",
    "1234",
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false,
    }
);

export default dbConfig;
