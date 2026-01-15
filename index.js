const express=require('express');
const app=express();
const port=3000;

app.use(express.json());

app.get('/api/saludo/:nombre',(req, res)=>{
    const usuario = req.params.nombre;

    res.json({
        mensaje: `Hola ${usuario} bienvenido`,
        tipo: `Request por parametros`
    });
});

app.get('/api/buscar', (req, res)=>{
    const consulta= req.query;

    res.json({
        mensaje: `Busqueda`,
        filters: consulta
    });
});

app.post ('/api/registro', (req, res)=>{
    const usuario= req.body;

    if(!usuario.email){
        return res.status(400).json({
            mensaje: `El email es requerido`,
            status: `error`
        });
    }

    res.status(201).json({
        mensaje:`Usuario creado con éxito`,
        datos: usuario,
        id: 999
    });
});

app.listen (port, ()=>{
    console.log('Servidosr utilizando el puerto 3000')
});