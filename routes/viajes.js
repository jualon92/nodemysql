import express, { json } from "express";
import {
  createViaje,
  editViaje,
  deleteViaje,
  getViajes,
  getViaje,
} from "../api/Viaje.js";

const viajesRoutes = express();

viajesRoutes.get("/viajes", (req, res) => {
  getViajes(req, res);
});

viajesRoutes.get("/viajes/*", (req, res) => {
  getViaje(req, res);
});

viajesRoutes.put("/viajes", (req, res) => {
  createViaje(req, res);
});

viajesRoutes.post("/viajes", (req, res) => {
  editViaje(req, res);
});

viajesRoutes.delete("/viajes/*", (req, res) => {
  deleteViaje(req, res);
});

export default viajesRoutes;
