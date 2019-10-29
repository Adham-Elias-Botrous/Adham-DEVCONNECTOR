const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The server is listening on http://localhost:${PORT}`));

app.get('/', (req, res) => res.send('API is Running'));
