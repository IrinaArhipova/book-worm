require('@babel/register');
const express = require('express');
const config = require('./config/serverConfig');

const homeRouter = require('./routes/render/home.routes');
const authRouter = require('./routes/render/auth.routes');
const commentRouter = require('./routes/render/comment.routes');
const rateRouter = require('./routes/render/rate.routes');
const trendRouter = require('./routes/api/trends.routes');

const app = express();

const PORT = process.env.PORT ?? 3000;

config(app);

app.use('/', homeRouter);
app.use('/auth', authRouter);
app.use('/comment', commentRouter);
app.use('/rate', rateRouter);
app.use('/trend', trendRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
