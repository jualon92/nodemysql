import dotenv from "dotenv";
dotenv.config();
import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../Libs/sequalize.js";

export const Viaje = sequelize.define(
  "viajes",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nombre_chofer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido_chofer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni_chofer: {
      type: DataTypes.STRING(14),
      allowNull: false, 
      unique: true,
      validate: { len: [7, 11] },
    },
    patente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cuit_cliente: {
      //bcrypt para cuit
      type: DataTypes.STRING, // no van a realizarse operaciones numericas.
      allowNull: false,
      unique: true,
      validate: { len: [11, 11] },
    },
    origen: {  //pos inicial
      type: DataTypes.STRING,
      allowNull: false,
    },
    destino: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);
