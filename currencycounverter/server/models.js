const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
  currency: String,
  name: String,
});

const exchangeRateSchema = new mongoose.Schema({
  from: String,
  to: String,
  rate: Number,
});

const Currency = mongoose.model('Currency', currencySchema);
const ExchangeRate = mongoose.model('ExchangeRate', exchangeRateSchema);

module.exports = { Currency, ExchangeRate };

