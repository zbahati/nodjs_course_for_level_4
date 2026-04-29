const con = require('../model/db');

async function AddPatient (req, res) {
    
    const {name, phone} = req.body;
    const sql = "INSERT INTO patients (name, phone) VALUES (?, ?)";
    con.query(sql, [name, phone], (err) => {
        if (err) {
          
            return res.status(500).json({ error: "Error adding patient" });
        }
        return res.status(201).json({ message: "Patient added successfully" });
    })
}


function GetPatients (req, res) {
    const sql = "SELECT * FROM patients";
    con.query(sql, (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: "Error fetching patients" });
        }
        return res.status(200).json({ patients: results });
    })
}

function updatePatients (req, res) {
    const { id } = req.params;
    const { name, phone } = req.body;

    const sql = "UPDATE patients SET name = ?, phone = ? WHERE patient_id = ?";

    con.query(sql, [name, phone, id], (err) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: "Error updating patient" });
        }
        return res.status(200).json({ message: "Patient updated successfully" });
    });

}

function deletePatient (req, res) {
    const { id } = req.params;
    const sql = "DELETE FROM patients WHERE patient_id = ?";
    con.query(sql, [id], (err) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: "Error deleting patient" });
        }
        return res.status(200).json({ message: "Appointment deleted successfully" });
    });
}

module.exports = {
    AddPatient, 
    GetPatients,
    updatePatients,
    deletePatient
}