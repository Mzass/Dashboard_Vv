// backend/server.js
const express = require('express');
const app = express();
const port = 3000;

// Importar la conexión a MySQL desde db.js
const connection = require('./db');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


