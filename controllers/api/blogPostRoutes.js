const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/withAuth');

console.log('here')
router.get('/createBlogPost', (req, res) => {
    // if (req.session.logged_in) {
    //     res.redirect('/login')
    //     return;
    // }
    res.render('createBlogPost');
})

router.post('/', withAuth,  async (req, res) => {
    try {
        const newBlogPost = await BlogPost.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        // const newBlogPost = await BlogPost.create(req.body)
        
        res.status(200).json(newBlogPost);
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;