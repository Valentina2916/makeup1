const express = require ('express');
const router = express.Router ();
const  controls= require ("../controls/controls");


router.get('/detalle/:id',controls.detalle)

router.get('/listar',controls.listar);

router.post ('/crear', controls.crear);

module.exports = router;