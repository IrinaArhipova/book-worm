require('@babel/register');

const express = require('express');
const session = require('express-session');
const config = require('./config/serverConfig');

const homeRouter = require('./routes/render/home.routes');
const regRouter = require('./routes/render/reg.routes');

const loginLogoutRouter = require('./routes/render/logInOut.routes');

const sessionConfig = require('./config/sessionConfig');
const commentRouter = require('./routes/render/comment.routes');

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);

// render
app.use(session(sessionConfig));
app.use('/', homeRouter);
app.use('/auth', loginLogoutRouter);
app.use('/reg', regRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/comment', commentRouter);


app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
