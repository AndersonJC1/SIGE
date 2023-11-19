const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: '',
  password: '',
  database: 'sige',
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

// Rutas y lógica de autenticación aquí

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
