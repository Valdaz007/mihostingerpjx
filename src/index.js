const express = require("express")


const app = express()
const PORT = 3000

app.listen(PORT, () => {
    console.log(`LISTENING ON ${PORT}`)
})

app.get("/", async(req, res) => {
    res.status(201).send("Hello, World!")
})