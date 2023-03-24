import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import {
  createCamion,
  getCamiones,
  editCamion,
  deleteCamion,
  getCamion,
} from "./operations.js";
import { testDBConnection } from "./Models/Camion.js";
import path from "path" 
 

const app = express();
app.use(json());
const __dirname = path.resolve();
testDBConnection();
 


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/camiones", (req, res) => {
  getCamiones(req, res);
});

app.get("/camiones/*", (req, res) => {
  getCamion(req, res);
});

app.put("/camiones", (req, res) => {
  createCamion(req, res);
});

app.post("/camiones", (req, res) => {
  editCamion(req, res);
});

app.delete("/camiones/*", (req, res) => {
  deleteCamion(req, res);
});

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}!`);
});
