import express, { json } from "express";
import {
  createCliente,
  editCliente,
  deleteCliente,
  getCliente,
  getClientes,
} from "../api/cliente.js";

const clientesRoutes = express();

clientesRoutes.get("/clientes", (req, res) => {
  getClientes(req, res);
});

clientesRoutes.get("/clientes/*", (req, res) => {
  getCliente(req, res);
});

clientesRoutes.put("/clientes", (req, res) => {
  createCliente(req, res);
});

clientesRoutes.post("/clientes", (req, res) => {
  editCliente(req, res);
});

clientesRoutes.delete("/clientes/*", (req, res) => {
  deleteCliente(req, res);
});

export default clientesRoutes;
