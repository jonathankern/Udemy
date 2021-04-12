const express = require('express');
const GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon'); // import dragon router
const generationRouter = require('./api/generation'); //  import generation router

const app = express(); // set up server
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use('/dragon', dragonRouter); // (subroute, router instance) attach all routes that we define on the /dragon subroute
app.use('/generation', generationRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        type: 'error', message: err.message
    })
});

engine.start();

module.exports = app;