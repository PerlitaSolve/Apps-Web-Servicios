const {Pool} = require('pg');
require('dotenv').config();

const pool= new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit:10,
    queueLimit:0
});

pool.connect()
    .then(client=> {
        console.log('Posgrest Conectado Exitosamente');
        client.release();
    })
    .catch(err => console.error('Error de conexion:', err));

module.exports=pool; 