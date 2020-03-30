const express = require('express');

const config = require('./config').express;
const router = require('./routes');

const app = express();

app.use(express.json());
app.use(router);
app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}...`)
});