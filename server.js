import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";  
import { createCamion, getCamiones, editCamion } from "./operations.js";
 

const app = express();
app.use(json());

 
app.get("/camiones", (req, res) => {
  getCamiones(req, res);
});

app.put("/camiones", (req, res) => {
  createCamion(req, res);
});

app.post("/camiones", (req, res) => {
    editCamion(req, res);
  });

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}!`);
});
