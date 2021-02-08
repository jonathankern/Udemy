const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
    res.json({ generation: req.app.locals.engine.generation }); // this will render the generation object
});

module.exports = router; // export router