const express = require("express")
const app = require("app")

app.use(express.json());

app.get('/', (req,res) => {
    res.send("hola mundo")
})