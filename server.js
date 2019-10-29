const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The server is listeing onport ${PORT}`));

app.get('/', (req, res) => res.send('API is Running'));
