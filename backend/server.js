const express = require('express');
const cors = require('cors');
const db = require('./config/db.js'); // Import the db.js file 
const dotenv = require('dotenv');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});