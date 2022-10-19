const express = require('express');
const routes = require('./routes')
const db = require('./database');
const app = express();
const handlerError = require('./middlewares/handlerError');
const port = 3000;

db.hasConnection();
app.use(express.json());
app.use(routes);
app.use(handlerError);

app.listen(port, () => {
    console.log('listening on port ' + port);
})