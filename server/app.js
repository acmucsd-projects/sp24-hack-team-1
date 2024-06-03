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

mongoose.connect("mongodb+srv://prtran:hacktours@cluster0.yoypzlo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then((client) => {
  mongoose.connection.db.dropDatabase();

  console.log('Connected to Hack Tours database');
});

module.exports = app;
