require("dotenv").config(); // Cargar las variables de entorno

const { Pool } = require("pg");

// Configuración de la conexión usando las variables de entorno
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const app = require("express")();
const port = 3000;

// Verificar la conexión a la base de datos
pool
  .connect()
  .then((client) => {
    console.log("Conexión a la base de datos establecida con éxito");
    client.release();
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos:", err.stack);
  });

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
