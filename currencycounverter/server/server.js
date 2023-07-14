const express = require('express');
const db = require('./db');
const routes = require('./routes');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
