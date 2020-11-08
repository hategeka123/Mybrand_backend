import express from 'express';
import ContactMessag from '../controller/posts/contact'
import Comment from '../controller/users/comment'
import Article from '../controller/posts/article'
import profile from '../controller/users/profile'
import validation from '../middleware/validation'
import authorization from '../middleware/authorization'

const router = express.Router()
// contact page

router.post('/newContact', ContactMessag.createContact )
router.get('/contacts', ContactMessag.getContacts)
// articles
router.post('/newArticle',  Article.createArticle)
router.delete('/blogs/:id', Article.deleteBlog)
router.put('/blogs/:id/edit', Article.updateBlog)
// postCommet
router.post('/blog/:id/newComment', Comment.createComments)

// user profile
router.get('/profile',  authorization.isAdmin, profile.getProfile)


export default router