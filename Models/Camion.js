import dotenv from "dotenv";
dotenv.config();
import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../Libs/sequalize.js";
 


export const Camion = sequelize.define("newtables", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
});
