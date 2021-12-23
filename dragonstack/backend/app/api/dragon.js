const { Router } = require('express'); // not root export so we need to require it within the {}
const DragonTable = require('../dragon/table');
const AccountDragonTable = require('../accountDragon/table');
const { authenticatedAccount } = require('./helper');

const router = new Router();

// GET method web request (endpoint, callback(request, response));
router.get('/new', (req, res, next) => {
    let accountId, dragon;

    authenticatedAccount({ sessionString: req.cookies.sessionString })
    .then(({ account }) => {
        accountId = account.id;

        dragon = req.app.locals.engine.generation.newDragon();

        return DragonTable.storeDragon(dragon);
    })
    .then(({ dragonId }) => {
        dragon.dragonId = dragonId;

        return AccountDragonTable.storeAccountDragon({ accountId, dragonId });
    })
    .then(() => res.json({ dragon }))
    .catch(error => next(error));
});

module.exports = router;