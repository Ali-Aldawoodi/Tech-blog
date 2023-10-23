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

        if (!usersData) {
            res
                .status(400)
                .json({ message: 'Incorrect information try again.'});
            return;
        }
        
        const validPassword = await usersData.checkPassword(req.body.password);
        console.log('validPassword', validPassword)
        console.log(req.body.password)

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect information try again123123.'})
            return;
        }

        req.session.save(() => {
            req.session.user_id = usersData.id;
            req.session.logged_in = true;

            res.json({ user: usersData, message: 'Logged in!'});
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;