const mongoose = require('mongoose');

const MONGODB_URI = 'https://us-east-2.aws.data.mongodb-api.com/app/data-culcs/endpoint/data/v1';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error.message));

module.exports = mongoose.connection;
