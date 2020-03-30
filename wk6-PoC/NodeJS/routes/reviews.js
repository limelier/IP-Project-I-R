const router = require('express').Router();
const db = require('../db/reviews');

router.route('/')
    .get(async (req, res) => {
        const {restaurantId, justScore} = req.body;
        if (!restaurantId) {
            res.status(400).json({message: 'Missing restaurantId'});
        } else {
            if (justScore) {
                const score = await db.getAverageScore(restaurantId);
                res.json({score: score});
            } else {
                const reviews = await db.getReviews(restaurantId);
                res.json(reviews);
            }
        }
    })
    .post(async (req, res) => {
       const {restaurantId, review} = req.body;
       if (!restaurantId) {
           res.status(400).json({message: 'Missing restaurantId'});
       } else if (!review) {
           res.status(400).json({message: 'Missing review'});
       } else if (!review.reviewer || !review.score) {
           res.status(400).json({message: 'Invalid review, missing reviewer and/or score'});
       } else {
           await db.addReview(restaurantId, review);
           res.json({message: 'Review posted'});
       }
    });

module.exports = router;