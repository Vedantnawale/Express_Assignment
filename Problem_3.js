const express = require("express")

const app = express();

const HOSTNAME = "localhost"
const PORT = 3003;

const home  = " I am homepage" 
const about  = " I am about page" 
const email = "support@pwskills.com"

app.get("/", (req, res) => {
    res.send(`msg : ${home}`)
})

app.get("/about", (req, res) => {
    res.send(`msg : ${about}`)
})

app.get("/email", (req, res) => {
    res.send(`email : <strong> ${email} <strong>`)
})

app.listen(PORT, ()=>{
    console.log(`Server is running at ${HOSTNAME}: ${PORT}`);
})