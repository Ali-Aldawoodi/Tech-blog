const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashboardRoutes = require('./dashboard')
const commentRoutes = require('./comment')

router.use('/users', userRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/comment', commentRoutes)

module.exports = router;