const router = require('express').Router();
const userRoutes = require('./api/user');

router.get('/', (req, res) => {
  res.send('Server is up');
});

router.use('/api/users', userRoutes);

module.exports = router;
