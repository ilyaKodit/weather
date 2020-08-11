const express = require('express');
const path = require('path');
const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes/indexRouter');
app.use('/', indexRouter);

module.exports = app;