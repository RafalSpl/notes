const express = require('express');
const app = express();
const config = require('./config');

//db
require('./db/mongoose')
//routes 
const apiRouter = require('./routes/api');
app.use('/', apiRouter);

app.listen(config.port, () => {
  console.log(`Example app listening at http://localhost:${config.port}`)
})