const router = require('express').Router();
const db = require('../db/restaurants');

router.route('/')
    .get(async (req, res) => {
        const criteria = req.body ? req.body : {};
        const restaurants = await db.getSome(criteria);

        res.json(restaurants);
    });

router.route('/:id')
    .get(async (req, res) => {
        const {id} = req.params;
        const restaurant = await db.getOne(id);

        if (!restaurant) {
            res.status(404).json({message: 'not found'});
        } else {
            res.json(restaurant);
        }
    });

module.exports = router;