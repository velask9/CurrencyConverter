const express = require('express');
const { Currency, ExchangeRate } = require('./models');

const router = express.Router();

// Create a new currency
router.post('/currencies', async (req, res) => {
  try {
    const currency = await Currency.create(req.body);
    res.status(201).json(currency);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all currencies
router.get('/currencies', async (req, res) => {
  try {
    const currencies = await Currency.find();
    res.json(currencies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new exchange rate
router.post('/exchange-rates', async (req, res) => {
  try {
    const exchangeRate = await ExchangeRate.create(req.body);
    res.status(201).json(exchangeRate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Convert currency
router.get('/convert', async (req, res) => {
  try {
    const { from, to, amount } = req.query;
    const exchangeRate = await ExchangeRate.findOne({ from, to });
    if (!exchangeRate) {
      return res.status(404).json({ error: 'Exchange rate not found' });
    }
    const convertedAmount = amount * exchangeRate.rate;
    res.json({ from, to, amount, convertedAmount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
