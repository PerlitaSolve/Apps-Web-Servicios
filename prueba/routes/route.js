const express = require('express');
const router = express.Router();
const productoController = require('../controllers/prodController');

router.get('/', productoController.getProductos);

router.post('/', productoController.createProducto); 

router.put('/', productoController.putProducto);

router.delete('/', productoController.deleteProducto);
module.exports= router;