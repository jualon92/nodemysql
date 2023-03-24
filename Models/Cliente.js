import dotenv from "dotenv";
dotenv.config();
import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../Libs/sequalize.js";

export const Cliente = sequelize.define(
  "clientes",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nombre: { 
      type: DataTypes.STRING, 
      allowNull: false,  
    },
    cuit: { //podria utilizarse bcrypt para cuit
      type: DataTypes.STRING,  // no van a realizarse operaciones numericas. 
      allowNull: false,
      unique: true,
      validate: { len: [11, 11] },
    },  
  },
  { timestamps: false }
);
