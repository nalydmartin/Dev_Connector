const express = require('express');

const app = express();

const connectDB = require('./config/db');

// Look for an environment variable for deploying to Heroku
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

app.get('/', (req, res) => res.send('API RUNNING'));



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}....`));




