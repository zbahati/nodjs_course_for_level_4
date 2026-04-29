const express = require('express');
const { AddUser, GetUsers, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();


router.post('/',AddUser);
router.get('/',GetUsers);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);


module.exports = router;
