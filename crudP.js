const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

let productos=[
    {id:"1", nombre: "Jabon", precio: 25, categoria: "Limpieza"},
    {id:"2", nombre: "Toalla", precio: 180, categoria: "blancos"},
    {id:"3", nombre: "Refresco", precio: 22, categoria: "Bebidas"}
];

app.get ('/api/productos', (req, res)=>{
    res.json (productos);
});

app.get ('/api/productos/:id', (req, res)=>{
    const idBusqueda= parseInt (req.params.id);

    const indice= productos.findIndex(prod=> prod.id === idBusqueda);

    if (indice === -1){
        return res.status(404).json ({error: "Producto no encontrado"});
    }

    res.json(productos[indice]);
});

app.post ('/api/productos', (req, res)=>{
    const nuevoProducto = {
        id: productos.length +1,
        nombre: req.body.nombre,
        precio: req.body.precio,
        categoria: req.body.categoria
    };

    if (!nuevoProducto.nombre){
        res.status(400).json ({error: "Ingrese el nombre del producto"});
    }else if(nuevoProducto.precio<10){
        res.status(400).json ({error: "El precio debe ser mayor a 10"});
    }

    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

app.put ('/api/productos/:id', (req, res)=>{
    const idBusqueda= parseInt (req.params.id);

    const indice=productos.findIndex (prod=> prod.id === idBusqueda);

    if (indice === -1){
        return res.status(404).json ({error: "Producto no encontrado"});
    }

    productos[indice].nombre= req.body.nombre || productos[indice].nombre;
    productos[indice].precio= req.body.precio || productos[indice].precio;
    productos[indice].categoria= req.body.categoria || productos[indice].categoria;

    res.json ({mensaje:"Producto actualizado", producto: productos[indice]});
});

app.delete ('/api/productos/:id', (req, res)=>{
    const idBusqueda= parseInt (req.params.id);

    const productosIniciales= productos.length;
    productos= productos.filter(prod=> prod.id !== idBusqueda);

    if(productos.length === productosIniciales){
        return res.status(404).json({ error: "No se pudo borrar, producto no encontrado"});
    }

    res.status(200).json ({ mensaje:"Producto eliminado correctamente"});
});

app.listen (PORT, ()=>{
    console.log (`Proyecto corriendo en el puerto ${PORT}`);
});