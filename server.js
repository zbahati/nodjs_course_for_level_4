const express = require('express');
const bcrypt = require('bcrypt');
const con = require('./db');

const app = express();

app.use(express.json());


app.get('/patients', (req, res) => {
    return res.send("Patients lists")
})

app.post('/add-user',async (req, res) => {
    
    const {username, password} = req.body;
    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";

    const base = 10;
    const passwordHash = await bcrypt.hashSync(password, base);

    con.query(sql, [username, passwordHash], (err) => {
        if (err) {
          
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
