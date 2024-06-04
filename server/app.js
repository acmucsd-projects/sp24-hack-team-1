const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const usersRouter = require('./routes/users');
const router = require('./routes/placeRoutes');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);
app.use('/api', router);

dotenv.config();

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then((client) => {
  mongoose.connection.db.dropDatabase();

  console.log('Connected to Hack Tours database');
});

module.exports = app;
