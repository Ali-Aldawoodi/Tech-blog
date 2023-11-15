const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/withAuth');


router.get('/', withAuth, async (req, res) => {
    console.log('here')
    try {
        const commentData = await Comment.findAll({
            where: {
                user_id: req.session.user_id
            }
        });
        const comment = commentData.map((commentPost) => commentPost.get({ plain: true }));
        console.log(comment)
        res.render('homepage', {
            comment,
            logged_in: req.session.logged_in
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            content: req.body.content,
        });
        res.status(200).json(newComment)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;