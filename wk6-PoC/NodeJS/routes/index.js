const router = require('express').Router();

const restaurants = require('./restaurants');
const reviews = require('./reviews');

router.use('/restaurants', restaurants);
router.use('/reviews', reviews);

router.get('/', (req, res) => {
    res.json({message: 'it\'s alive!'})
});

module.exports = router;