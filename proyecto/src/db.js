const mysql = require('mysql');

// Configura los detalles de la conexión
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'nombre_usuario',
  password: 'contraseña',
  database: 'nombre_base_de_datos'
});

module.exports = connection;

const connection = require('./db');

// Realiza consultas a la base de datos
connection.query('SELECT * FROM tabla', (err, rows) => {
  if (err) {
    console.error('Error al ejecutar la consulta:', err);
    return;
  }
  
  // Hacer algo con los resultados de la consulta
  console.log('Filas de la tabla:', rows);
});

// Cierra la conexión cuando hayas terminado
connection.end();