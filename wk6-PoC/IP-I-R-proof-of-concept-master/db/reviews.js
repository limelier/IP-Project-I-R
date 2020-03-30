// helper functions
function getRandomScore() {
    return Math.ceil(Math.random() * 10) / 2;
}

function getRandomReview() {
    return {
        reviewer: 'John Doe',
        score: getRandomScore(),
        description: 'It was an experience.'
    }
}


// mock db functions
async function getAverageScore(restaurantId) {
    return getRandomScore();
}

async function getReviews(restaurantId) {
    return Array(10).fill(getRandomReview());
}

async function addReview(restaurantId, review) {
    // do nothing
}

module.exports = {getAverageScore, getReviews, addReview};