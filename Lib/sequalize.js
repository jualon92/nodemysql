import dotenv  from "dotenv"
dotenv.config()
import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: "mysql",
});

export const User = sequelize.define("newtables", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
});
