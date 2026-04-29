const express = require('express');
const { AddPatient, GetPatients, updatePatients, deletePatient } = require('../controllers/patientController');
const router = express.Router();


router.post('/', AddPatient);
router.get('/', GetPatients);
router.put('/:id', updatePatients);
router.delete('/:id', deletePatient);

module.exports = router;
