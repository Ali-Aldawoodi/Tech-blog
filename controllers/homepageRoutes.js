const router = require('express').Router();
const { BlogPost, Comment, User } = require('../models')
const withAuth = require('../utils/withAuth')

// merge two datasets together into one array. 
router.get('/', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll();

        const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));
    console.log(blogPosts)
    const commentData = await Comment.findAll({
        // where: {
        //     user_id: req.session.user_id
        // }
    });
    // console.log(commentData)
    const comment = commentData.map((commentPost) => commentPost.get({ plain: true }));
   console.log(comment)
        res.render('homepage', {
            blogPosts,
            comment,
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

// Does my route for comments go here or in the comment routes? 
// 
router.get('/comment', withAuth, async (req, res) => {
     
    try {
        
        const commentData = await Comment.findAll({
            // where: {
            //     user_id: req.session.user_id
            // }
        });
        console.log(commentData)
        const comment = commentData.map((commentPost) => commentPost.get({ plain: true }));
       
        res.render('homepage', {
            comment,
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    // const body= req.body
    try {
        const newComment = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        
        res.status(200).json(newComment)
    } catch (err) {
        res.status(400).json(err);
    }
    console.log('here2')
});


module.exports = router;