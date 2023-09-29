import { Sequelize } from 'sequelize';
import dotenv from"dotenv";
dotenv.config();

const db = new Sequelize(
    "sdgp_skin_care",
    "root",
    "root",
    {
      host: process.env.DB_HOST,
      dialect: "mysql"
    }
);

export default db;



