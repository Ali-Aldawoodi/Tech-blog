// WHEN I click on the dashboard option in the navigation
// THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
// dashboard button that routes to dash board page
// How would i render the blogposts that I have created? Maybe somethign that allows me to use the user email to render the blogposts associated with it?
// Here I will do the create a blogpost.


const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/withAuth');


router.get('/', withAuth, async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll({
            where: {
                user_id: req.session.user_id
            }
        });
        const blogPost = blogPostData.map((blog) => blog.get({ plain: true }));
        console.log(blogPost)
        res.render('dashboard', {
            blogPost,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {

    try {
        const newBlogPost = await BlogPost.create({
                title: req.body.title,
                content: req.body.content,
                user_id: req.session.user_id,
        });
        console.log(newBlogPost)
        res.status(200).json(newBlogPost);
    } catch (err) {
        res.status(400).json(err);
    }


});


module.exports = router;