//const {Pool} = require('pg');
const pg= require('pg');
require('dotenv').config();

const pool= new pg.Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});     

pool.connect()
    .then(client=> {
        console.log('Posgrest Conectado Exitosamente');
        client.release();
    })
    .catch(err => console.error('Error de conexion:', err));

module.exports= pool; 