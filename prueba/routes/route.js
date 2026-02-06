const express = require('express');
const router = express.Router();
const productoController = require('../controllers/prodController');

router.get('/', productoController.getProductos);

router.post('/', productoController.createProducto); 

router.put('/:id', productoController.putProducto);

router.delete('/:id', productoController.deleteProducto);
module.exports= router;