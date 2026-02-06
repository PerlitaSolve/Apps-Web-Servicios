const boton = document.getElementById('btnCargar');
const lista = document.getElementById('listaProductos');

boton.addEventListener('click', async ()=>{
    try{
        const respuesta = await fetch('http://localhost:4000/api/productos'); //puerto de aplicacxion backend

        const datos = await respuesta.json();

        lista.innerHTML = "";

        datos.forEach(producto => {
            const li = document.createElement('li');

            if (producto.stock <= 0){
                li.innerHTML = `${producto.nombre} - ${producto.precio}- ${producto.stock}`;//inyeccion de html con el innerhtml
                
            }else{
                li.innerHTML = `${producto.nombre} - ${producto.precio} - <span style="color:red">${producto.stock}</span>`;//inyeccion de html a stock
                
            }
            lista.appendChild(li);
            
        });
    }catch (error){
        console.error("Error al cargar:", error);
        alert("No se pudo conectar con la API");
    }
});