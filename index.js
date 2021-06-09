const express = require('express');
const app = express();
const config = require('./config');
const bodyParser = require('body-parser');

//db
require('./db/mongoose')

//parsery
//Content-type: application/json
app.use(bodyParser.json())
//routes 
const apiRouter = require('./routes/api');
app.use('/api/', apiRouter);

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`)
})