const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');
// const dashboardRoutes = require('../homepageRoutes')

router.use('/users', userRoutes);
router.use('/blogpost', blogPostRoutes);
// router.use('/', dashboardRoutes)

module.exports = router;