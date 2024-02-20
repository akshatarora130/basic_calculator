const express = require('express')
const cors = require("cors");
const app = express()
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
})

app.get("/sub", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a - b;
    res.send(sum.toString());
})

app.get("/div", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a / b;
    res.send(sum.toString());
})

app.get("/mul", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a * b;
    res.send(sum.toString());
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})