
const express = require('express');
// const { required } = require('joi');

const router = express.Router();

const user = require('../controller/user');
const userValidation = require('../middleware/userValidation');

const signin = require('../controller/signin');
const signinValidation = require('../middleware/signinValidation');


router.post('/users', userValidation, user)

router.post('/signin', signinValidation, signin)

module.exports = router;