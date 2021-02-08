const app = require('../app');

const port = 3000;

// Start web server
// Listen function, port number helps external entities figure out where it's running
app.listen(port, () => console.log(`listening on port ${port}`));