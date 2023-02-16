require('@babel/register');

const express = require('express');
const config = require('./config/serverConfig');
const session = require('express-session')

const homeRouter = require('./routes/render/home.routes');
const regRouter = require('./routes/render/reg.routes');
const loginLogoutRouter = require('./routes/render/logInOut.routes');
const sessionConfig = require('./config/sessionConfig');

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);

//render
app.use(session(sessionConfig));
app.use('/', homeRouter);
app.use('/auth', loginLogoutRouter);
app.use('/reg', regRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
