const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/currency_converter_db';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error.message));

module.exports = mongoose.connection;
