const express = require('express');
const con = require('./db');

const app = express();

app.use(express.json());


// test
app.get('/', (req, res) => {
    return res.send("Hello BAHATI")
})

app.get('/patients', (req, res) => {
    return res.send("Patients lists")
})

app.post('/add-user', (req, res) => {
    const {username, password} = req.body;
    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";

    con.query(sql, [username, password], (err) => {
        if (err) {
            console.error("Error inserting user: ", err);
            return res.status(500).json({ error: "Error adding user" });
        }
        return res.status(201).json({ message: "User added successfully" });
    })
});


con.connect((err) => {
    if (err) throw err;
    console.log("connected to database");
    app.listen(3001, (err) => {

        console.log('server is running on port 3001');
    })
})
