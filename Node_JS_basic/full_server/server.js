const express = require('express');
const routes = require('./routes');

const app = express();

app.use('/', routes);

app.listen(1245);

export default app;
