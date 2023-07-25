const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 
const SubscriberModel = require('./models/subscriber');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  credentials: true,
}));
app.use(morgan('tiny'));
app.disable('x-powered-by');

// Connect to the MongoDB database
const dbURI = "mongodb://localhost:27017/my_database"; // Replace 'my_database' with your desired database name
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbURI, mongooseOptions);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  SubscriberModel.findOne({ email: email })
    .then(user => {
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            res.json("Success");
          } else {
            res.json("Password is incorrect");
          }
        });
      } else {
        res.json("No record existed");
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "An error occurred while processing the login request." });
    });
});

app.post('/register', (req, res) => {
  console.log(req.body); // Log the request body

  // Hash the password before saving it to the database
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "An error occurred while hashing the password." });
    }

    // Create the new subscriber with the hashed password
    SubscriberModel.create({ 
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    .then(subscriber => {
      console.log(subscriber); // Log the created subscriber object
      res.json(subscriber);
    })
    .catch(err => {
      console.error(err); // Log any errors that occur
      res.status(500).json({ error: "An error occurred while saving the data." });
    });
  });
});

// Get the default connection from Mongoose
const db = mongoose.connection;

// Event listener for the 'open' event
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

// Event listener for the 'error' event
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
