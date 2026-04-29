const express = require('express');
const { AddAppointment, GetAppointments, updateAppointment, deleteAppointment } = require('../controllers/appointmentController');
const router = express.Router();


router.post('/', AddAppointment);
router.get('/', GetAppointments);

router.patch('/:id', updateAppointment);
router.delete('/:id', deleteAppointment);

module.exports = router;
