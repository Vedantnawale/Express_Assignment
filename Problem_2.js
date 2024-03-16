const express = require("express")

const app = express()

const PORT = 3002;
const HOSTNAME = 'localhost';

let counter = 0

app.get("/", (req, res) => {
    res.send(`counter : ${counter}`)
})

app.get("/increment", (req, res) => {
    counter++;
    res.send(`counter : ${counter}`)
})
app.get("/decrement", (req, res) => {
    counter--;
    res.send(`counter : ${counter}`)
})

app.listen(PORT, () => {
    console.log(`Server is running at ${HOSTNAME}: ${PORT}`);
})