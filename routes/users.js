
const express = require('express');

const router = express.Router();

const user = require('../controller/user');
const userValidation = require('../middleware/userValidation');


router.post('/users', userValidation, user)

module.exports = router;