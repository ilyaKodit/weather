const express = require('express');
const path = require('path');
const cors = require('cors');

const mongoose = require('mongoose');
const { connect } = mongoose;

const bodyParser = require('body-parser');

const app = express();

connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes/indexRouter');
app.use('/', indexRouter);

module.exports = app;