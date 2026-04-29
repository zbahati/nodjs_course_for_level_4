const bcrypt = require('bcrypt');
const con = require('../model/db');

async function AddUser (req, res) {
    
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
}

function GetUsers (req, res) {
    const sql = "SELECT * FROM users";
    con.query(sql, (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: "Error fetching users" });
        }
        results.forEach(user => delete user.password);
        return res.status(200).json({ users: results });
    })
}

function updateUser (req, res) {
    const { id } = req.params;
    const { username, password } = req.body;

    const sql = "UPDATE users SET username = ?, password = ? WHERE user_id = ?";

    con.query(sql, [username, password, id], (err) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: "Error updating user" });
        }
        return res.status(200).json({ message: "User updated successfully" });
    });

}

function deleteUser (req, res) {
    const { id } = req.params;
    const sql = "DELETE FROM users WHERE user_id = ?";
    con.query(sql, [id], (err) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: "Error deleting user" });
        }
        return res.status(200).json({ message: "account deleted successfully" });
    });
}

module.exports = {
    AddUser,
    GetUsers,
    updateUser,
    deleteUser
}
