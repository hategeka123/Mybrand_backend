const express = require('express');

const router = express.Router();
const postController = require('../controller/post');
const home = require('../controller/home');
const postValidation = require('../middleware/postValidation');


router.get('/', home);

router.post('/posts', postValidation, postController);

module.exports = router;