const express = require('express');
const { AddDoctor, GetDoctors, updateDoctors, deleteDoctor } = require('../controllers/doctorController');
const router = express.Router();


router.post('/', AddDoctor);
router.get('/', GetDoctors);

router.put('/:id', updateDoctors);
router.delete('/:id', deleteDoctor);


module.exports = router;
