

const express = require('express');
const cors= require ('cors');
const app = express();
require('dotenv').config();

const productoRoutes = require('./src/routes/productoRoute'); // Importa el route.js

app.use(cors());
app.use(express.json());

app.use('/api/productos', productoRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`App escuchando en puerto ${PORT}`));

