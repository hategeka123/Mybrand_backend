
import express from 'express';
// const { required } = require('joi');

const router = express.Router();

import signUp from '../controller/users/user';
import userValidation from '../middleware/userValidation';

import signin from '../controller/users/signin';
import signinValidation from '../middleware/signinValidation';


router.post('/users', userValidation, signUp)

router.post('/signin', signinValidation, signin)

export default router;