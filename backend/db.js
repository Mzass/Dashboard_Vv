// backend/db.js
const mysql = require('mysql2');

// Crear la conexión
const connection = mysql.createConnection({
  host: '172.23.186.86',  // O '127.0.0.1'
  user: 'user',
  password: 'user_password',
  database: 'dashboard_db'
});

// Conectar a MySQL
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao MySQL');
  }
});

// Exportar la conexión para usarla en otras partes del código
module.exports = connection;
