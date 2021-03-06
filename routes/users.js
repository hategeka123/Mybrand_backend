
import express from 'express';
// const { required } = require('joi');

const router = express.Router();

import signUp from '../controller/users/user';
import userValidation from '../middleware/userValidation';

import signin from '../controller/users/signin';
import allUser from '../controller/users/getUser'
import singleUser from '../controller/users/singleUser'
import signinValidation from '../middleware/signinValidation';
import authorization from '../middleware/authorization'
import updateUser from '../controller/users/updateUser'


router.post('/signup', userValidation, signUp)
router.get('/getUser', allUser)
router.get('/getUser/:id', singleUser)
router.patch('/getUser/:id/update', authorization.isAdmin, updateUser)
// router.put('/getUser/:id/update', singleUser)
router.post('/signin', signinValidation, signin)

export default router;