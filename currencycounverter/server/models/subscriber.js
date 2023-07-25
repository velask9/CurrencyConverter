const mongoose = require('mongoose');

const SubscriberSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String, 
});

const SubscriberModel = mongoose.model("Subscriber", SubscriberSchema);
module.exports = SubscriberModel;
