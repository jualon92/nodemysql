const express = require("express")
const app = express()
const port = 3000 // deberia pasarse a .env

app.use(express.json());

app.get('/', (req,res) => {
    res.send("hola mundo")
})

app.listen(port, () => {
    console.log(`app listening on port port ${port}!`)
})

