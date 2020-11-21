import express from 'express';
import home from '../controller/posts/home'
import ContactMessag from '../controller/posts/contact'
import Comment from '../controller/users/comment'
import Skill from '../controller/posts/skills'
import Article from '../controller/posts/article'
import profile from '../controller/users/profile'
import contactValidation from '../middleware/contactValidation'
import postvalidation from '../middleware/postValidation'
import skillvalidation from '../middleware/skillsValidation'
import authorization from '../middleware/authorization'

const router = express.Router()
// home page

router.get('/', home)
// contact page

router.post('/newContact',   contactValidation, ContactMessag.createContact )
router.get('/contacts', authorization.isAdmin, ContactMessag.getContacts)
// articles
router.post('/newArticle',  postvalidation, authorization.userAuth, authorization.isAdmin, Article.createArticle)
router.get('/blogs', authorization.userAuth, Article.getAllBlogs)
router.get('/blogs/:id', authorization.userAuth, Article.singleBlog)
router.delete('/blogs/:id/delete', authorization.isAdmin, Article.deleteBlog)
router.patch('/blogs/:id/edit', authorization.isAdmin, Article.updateBlog)
// postCommet
router.post('/blog/:id/newComment',  authorization.userAuth, Comment.createComments)

// Skills router
router.post('/addSkills', skillvalidation, authorization.userAuth, authorization.isAdmin, Skill.createSkills);
router.get('/skills', Skill.getSkills)
router.delete('/skills/:id/delete', authorization.isAdmin, Skill.deleteSkills);
router.patch('/skills/:id/edit', authorization.isAdmin, Skill.updatekills)

// user profile
router.get('/profile', authorization.userAuth, profile.getProfile)


export default router