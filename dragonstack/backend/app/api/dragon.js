const { Router } = require('express'); // not root export so we need to require it within the {}
const DragonTable = require('../dragon/table');

const router = new Router();

// GET method web request (endpoint, callback(request, response));
router.get('/new', (req, res, next) => {
    const dragon = req.app.locals.engine.generation.newDragon();

    DragonTable.storeDragon(dragon)
        .then(({ dragonId }) => {
            console.log('dragonId', dragonId);

            dragon.dragonId = dragonId;

            // respond back to the user with some json. configure object with dragon key and define value to get current generation
            res.json({ dragon });
        })
        .catch(error => next(error));
});

module.exports = router;