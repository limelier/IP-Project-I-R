// mock db functions
async function getSome(criteria) {
    return Array(10).fill(await getOne());
}

async function getOne(id) {
    return {
        id: 1,
        name: 'Il Ristorante',
        description: 'The most generic restaurant of all time!',
        tags: ['generic', 'fast-food', 'pizza']
    }
}

module.exports = {getOne, getSome};