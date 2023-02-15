require('@babel/register');

const express = require('express');
const config = require('./config/serverConfig');
const session = require('express-session')

const homeRouter = require('./routes/render/home.routes');
const regRouter = require('./routes/render/reg.routes');
const loginRouter = require('./routes/render/login.routes');
const logoutRouter = require('./routes/render/logout.routes.js');
const sessionConfig = require('./config/sessionConfig');

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);

//render
app.use(session(sessionConfig));
app.use('/', homeRouter);
app.use('/reg', regRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
