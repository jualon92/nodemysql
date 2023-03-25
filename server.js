import dotenv from "dotenv";
dotenv.config();
import express, { json } from "express";
import helmet from "helmet";
import { testDBConnection } from  "./Libs/sequalize.js"; 
import { fileURLToPath } from "node:url"; 
import clientesRoutes from "./routes/clientes.js"
import viajesRoutes from "./routes/viajes.js"
import cors from "cors" 
import compression from "compression"


const app = express();
app.use(compression());
app.use(express.static(fileURLToPath(new URL("./public/dist", import.meta.url))))  
app.use(cors());
app.use(json());
testDBConnection();

app.use(express.urlencoded({extended: true})) //  pedido url encoded
app.use(helmet({
    crossOriginResourcePolicy: false,
  }));
 

app.use(clientesRoutes)
app.use(viajesRoutes)

app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}!`);
});
