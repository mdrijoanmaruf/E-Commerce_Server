const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

// Basic Route
app.get('/', (req, res) => {
  res.send('E-Commerce Server is Running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;