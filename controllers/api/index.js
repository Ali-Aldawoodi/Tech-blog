const router = require('express').Router();
const userRoutes = require('./userRoutes');
const blogPostRoutes = require('./blogPostRoutes');
const dashboardRoutes = require('../homepageRoutes')

router.use('/users', userRoutes);
router.use('/blogposts', blogPostRoutes);
router.use('/dashboard', dashboardRoutes)

module.exports = router;