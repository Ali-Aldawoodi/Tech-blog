const router = require('express').Router();
const { BlogPost, User } = require('../models')
const withAuth = require('../utils/withAuth')

router.get('/', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll();

        const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));
    console.log(blogPosts)
        res.render('homepage', {
            blogPosts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete('/blogpost/:id', withAuth, async (req, res) => {
   
    try {
        const blogPostData = await BlogPost.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!blogPostData) {
            res.status(404).json({ message: 'No blog post found !'});
            return;
        }

        res.status(200).json(blogPostData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;