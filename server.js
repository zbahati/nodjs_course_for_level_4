const express = require('express');
const con = require('./db');

const app = express();

// test
app.get('/', (req, res) => {
    return res.send("Hello BAHATI")
})

app.get('/patients', (req, res) => {
    return res.send("Patients lists")
})


con.connect((err) => {
    if (err) throw err;
    console.log("connected to database");
    app.listen(3001, (err) => {

        console.log('server is running on port 3001');
    })
})
