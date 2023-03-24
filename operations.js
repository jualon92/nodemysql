import mysql from "mysql";
import connection from "./Lib/mysql.js";

export const insert = async (req, res) => {
  try {
    const { id, nombre, apellido } = req.body;

    const insertQuery = `INSERT INTO viajes (id, nombre, apellido) VALUES (${id}, ${nombre}, ${apellido})`;

    connection.query(insertQuery, (err, rows) => {
      if (err) throw err;
      return res.status(200).send({ success: true, message: rows });
    });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

export const read = (req, res) => {
  const getQuery = `SELECT * FROM viajes`;
  try {
    connection.query(getQuery, (err, rows) => {
      if (err) throw err;
      return res.status(200).send({ success: true, message: rows });
    });
  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};


 