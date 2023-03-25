import express, { json } from "express";
import {
  createCliente,
  editCliente,
  deleteCliente,
  getCliente,
  getClientes,
} from "../api/cliente.js";

const clientesRoutes = express();

clientesRoutes.get("/api/clientes", (req, res) => {
  getClientes(req, res);
});

clientesRoutes.get("/api/clientes/*", (req, res) => {
  getCliente(req, res);
});

clientesRoutes.put("/api/clientes", (req, res) => {
  createCliente(req, res);
});

clientesRoutes.post("api/clientes", (req, res) => {
  editCliente(req, res);
});

clientesRoutes.delete("/api/clientes/*", (req, res) => {
  deleteCliente(req, res);
});

export default clientesRoutes;
