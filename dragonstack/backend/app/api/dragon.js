const { Router } = require('express'); // not root export so we need to require it within the {}

const router = new Router();

// GET method web request (endpoint, callback(request, response));
router.get('/new', (req, res) => {
    // respond back to the user with some json. configure object with dragon key and define value to get current generation
    res.json({ dragon: req.app.locals.engine.generation.newDragon() });
});

module.exports = router;