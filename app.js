const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const corsOptions = require('./config/corsOptions');

const userRouter = require('./routes/user');

const app = express();

require('dotenv').config();

app.use(helmet());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by');

process.env.NODE_ENV === 'production' ? app.use(cors(corsOptions)) : app.use(cors());

app.use('/user', userRouter);

app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});

module.exports = app;
