import dotenv  from "dotenv"
dotenv.config()
import express, { json } from "express";
import { createConnection } from "mysql";
import connection from "./Lib/mysql.js";
import dbConnect from "./Lib/mysql.js";
import { insert } from "./operations.js";
 
const app = express() 
app.use(json());
 

connection.connect((error) => {
    if (error) throw error;
    console.log("connected");
});


app.get('/camiones', (req,res) => {
    read(req,res)
})

app.put('/camiones', (req,res) => {
    insert(req,res)
})

app.listen(process.env.PORT, () => {
    console.log(`app listening on port port ${process.env.PORT}!`)
})

