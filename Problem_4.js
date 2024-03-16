const express = require("express");

const app = express();

const HOSTNAME = "localhost";
const PORT = 3004;

app.get("/", (req, res) => {
    res.send("<h1>Generate Random Number</h1>");
});

app.get("/random", (req, res) => {
    let random = Math.floor(Math.random() * 100);
    res.send(`${random}`);
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at ${HOSTNAME}:${PORT}`);
});
