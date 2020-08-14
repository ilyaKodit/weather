const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const CitySchema = new Schema({
  city: String,
  count: Number,
});

module.exports = model('city', CitySchema);