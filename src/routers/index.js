const express=require('express');
const router=express.Router();
const producto=require('../controllers/producto.controller');


router.get('/producto',producto.Obtener);
router.post('/producto',producto.Crear);
router.get('/producto/:id',producto.ObtenerbyId);
router.put('/producto/:id',producto.Actualizar);
router.delete('/producto/:id',producto.Eliminar);


module.exports=router;