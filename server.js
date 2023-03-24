import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
 
import { testDBConnection } from  "./Libs/sequalize.js"; 
import { fileURLToPath } from "node:url"; 
import clientesRoutes from "./routes/clientes.js"
import viajesRoutes from "./routes/viajes.js"
const app = express();
app.use(json());
testDBConnection();
 

app.get("/", (req, res) => {
  res.sendFile( fileURLToPath(new URL("./public/index.html", import.meta.url)));
});

app.use(clientesRoutes)
app.use(viajesRoutes)

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}!`);
});
