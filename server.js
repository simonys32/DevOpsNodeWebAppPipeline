'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello FS2026 DevOps Course!!! :-) Azure Test with Docker and GH action, FIRST CHANGE 2 SECOND CHANGE 3 CHANGE 4 TEST AZURE!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
