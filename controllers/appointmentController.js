
const con = require('../model/db');

function AddAppointment (req, res) {
    
    const {patient_id, doctor_id, date} = req.body;
    const sql = "INSERT INTO appointments (patient_id, doctor_id, appointment_date) VALUES (?, ?, ?)";
    con.query(sql, [patient_id, doctor_id, date], (err) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: "Error adding appointment" });
        }
        return res.status(201).json({ message: "Appointment  added successfully" });
    })
}

function GetAppointments (req, res) {
    const sql = "SELECT * FROM appointments";
    con.query(sql, (err, results) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: "Error fetching appointments" });
        }
        return res.status(200).json({ appointments: results });
    })
}

function updateAppointment (req, res) {
    const { id } = req.params;
    const { patient_id, doctor_id, date } = req.body;

    const sql = "UPDATE appointments SET patient_id = ?, doctor_id = ?, appointment_date = ? WHERE appointment_id = ?";

    con.query(sql, [patient_id, doctor_id, date, id], (err) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: "Error updating appointment" });
        }
        return res.status(200).json({ message: "Appointment updated successfully" });
    });

}

function deleteAppointment (req, res) {
    const { id } = req.params;
    const sql = "DELETE FROM appointments WHERE appointment_id = ?";
    con.query(sql, [id], (err) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ error: "Error deleting appointment" });
        }
        return res.status(200).json({ message: "Appointment deleted successfully" });
    });
}

module.exports = {AddAppointment, GetAppointments, updateAppointment, deleteAppointment}