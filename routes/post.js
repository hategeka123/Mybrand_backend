import express from 'express';
import postController from '../controller/posts/post';
import home from '../controller/posts/home';
import postValidation from '../middleware/postValidation';
import allPost from '../controller/posts/getPosts';
import singlePost from '../controller/posts/singlePost';
const router = express.Router();

router.get('/', home);

router.post('/posts', postValidation, postController);
router.get('/getposts', allPost);
router.get('/getposts/:id', singlePost);

export default router;