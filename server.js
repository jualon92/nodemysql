require('dotenv').config();
const express = require("express")
const app = express() 
const mysql = require("mysql")
app.use(express.json());

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

connection.connect( (error) => {
    if (error) throw error
    console.log("connected")
})

app.get('/', (req,res) => {
    res.send("hola mundo")
})

app.listen(process.env.PORT, () => {
    console.log(`app listening on port port ${process.env.PORT}!`)
})

