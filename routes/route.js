import express from 'express';
import home from '../controller/posts/home'
import ContactMessag from '../controller/posts/contact'
import Comment from '../controller/users/comment'
import Skill from '../controller/posts/skills'
import Article from '../controller/posts/article'
import profile from '../controller/users/profile'
// import valid from '../middleware/schemaValidation'
import postValidation from '../middleware/postValidation';
const router = express.Router()
// home page

router.get('/', home)
// contact page

router.post('/newContact',  ContactMessag.createContact )
router.get('/contacts', ContactMessag.getContacts)
// articles
router.post('/newArticle',  Article.createArticle)
router.get('/blogs', Article.getAllBlogs)
router.get('/blogs/:id', Article.singleBlog)
router.delete('/blogs/:id', Article.deleteBlog)
router.patch('/blogs/:id/edit', Article.updateBlog)
// postCommet
router.post('/blog/:id/newComment',  Comment.createComments)

// Skills router
router.post('/addSkills',  Skill.createSkills);
router.get('/skills', Skill.getSkills)
router.get('/skills/:id', Skill.singleSkill);
router.delete('/skills/:id/delete', Skill.deleteSkills);
router.patch('/skills/:id/edit', Skill.updatekills)

// user profile
router.get('/profile', profile.getProfile)


export default router