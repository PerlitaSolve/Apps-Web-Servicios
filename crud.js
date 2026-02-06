const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

let usuarios= [
    {id: 1, nombre: "Juan", rol: "Administrador"},
    {id: 2, nombre: "María", rol: "Usuario"}
];

app.get ('/api/usuarios', (req, res)=>{
    res.json(usuarios);
});

app.post ('/api/usuarios', (req, res)=>{
    const nuevoUsuario= {
        id: usuarios.length + 1,
        nombre: req.body.nombre,
        rol: req.body.rol
};
    usuariios.push (nuevoUsuario);
    res.status(201).json({
        mensaje: `Usuario creado con éxito`,
        datos: nuevoUsuario
    });
});

app.put ('/api/usuarios/:id', (req, res)=>{
    const id= parseInt (req.params.id);

    const indice= usuarios.findIndex (user => user.id === idBusqueda);

    if(indice === -1){
        return res.status(404).json({ error: "Usuario no encontrado" }); 
    }

    usuarios[indice].nombre = req.body.nombre || usuarios[indice].nombre;
    usuarios[indice].rol = req.body.rol || usuarios[indice].rol;

    res.json({ mensaje: "Actualizado", usuario: usuarios[indice] });
});

app.delete('/api/usuarios/:id', (req, res) => {
    const idBusqueda = parseInt(req.params.id);
    
    const usuariosIniciales = usuarios.length;
    usuarios = usuarios.filter(user => user.id !== idBusqueda);

    if (usuarios.length === usuariosIniciales) {
        return res.status(404).json({ error: "No se pudo borrar, ID inexistente" });
    }

    res.status(200).json({ mensaje: "Usuario eliminado correctamente" });
});

app.listen(PORT, () => {
    console.log(`CRUD corriendo en puerto ${PORT}`);
});