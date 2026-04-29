
const con = require('../model/db');

 function AddDoctor (req, res)  {
    
    const {name, phone, specialization} = req.body;
    const sql = "INSERT INTO doctors (name, phone, specialization) VALUES (?, ?, ?)";
    con.query(sql, [name, phone, specialization], (err) => {
        if (err) {
          
            return res.status(500).json({ error: "Error adding doctor" });
        }
        return res.status(201).json({ message: "Doctor added successfully" });
    })
}


function GetDoctors (req, res) {
    const sql = "SELECT * FROM doctors";
    con.query(sql, (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: "Error fetching doctors" });
        }
        return res.status(200).json({ doctors: results });
    })
}

function updateDoctors (req, res) {
    const { id } = req.params;
    const { name, phone, specialization } = req.body;

    const sql = "UPDATE doctors SET name = ?, phone = ?, specialization = ? WHERE doctor_id = ?";

    con.query(sql, [name, phone, specialization, id], (err) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: "Error updating doctor" });
        }
        return res.status(200).json({ message: "Doctor updated successfully" });
    });

}

function deleteDoctor (req, res) {
    const { id } = req.params;
    const sql = "DELETE FROM doctors WHERE doctor_id = ?";
    con.query(sql, [id], (err) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: "Error deleting doctor" });
        }
        return res.status(200).json({ message: "Doctor deleted successfully" });
    });
}

module.exports = {AddDoctor, GetDoctors, updateDoctors, deleteDoctor}