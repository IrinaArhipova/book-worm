require('@babel/register');

const express = require('express');
const config = require('./config/config');

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);

// app.use('/', homeRouter)

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
