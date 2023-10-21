const router = require('express').Router();
const { User } = require('../../models')

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const usersData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect information try again.'});
            return;
        }

        const validPassword = await usersData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect information try again.'})
            return;
        }

        res.session.save(() => {
            req.session.user_id = usersData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Logged in!'});
            res.redirect('/')
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;