import express, { json } from "express";
import {
  createViaje,
  editViaje,
  deleteViaje,
  getViajes,
  getViaje,
} from "../api/Viaje.js";

const viajesRoutes = express();

viajesRoutes.get("/api/viajes", (req, res) => {
  getViajes(req, res);
});

viajesRoutes.get("/api/viajes/*", (req, res) => {
  getViaje(req, res);
});

viajesRoutes.put("/api/viajes", (req, res) => {
  createViaje(req, res);
});

viajesRoutes.post("/api/viajes", (req, res) => {
  editViaje(req, res);
});

viajesRoutes.delete("/api/viajes/*", (req, res) => {
  deleteViaje(req, res);
});

export default viajesRoutes;
