const db = require('../models');
const Producto = db.producto;
const ProductoController = {
    Obtener(req, res) {
        Producto.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })
            .then((data) => {
                res.json(
                    data
                );
            })
            .catch((err) => {
                res.status(500).send({
                    message: err.message || 'Se produjo un error al recuperar los productos',
                });
            });
    },
    async ObtenerbyId(req, res) {
        try {
            const {
                id
            } = req.params;
            const producto = await Producto.findOne({
                where: {
                    id
                }
            });
            res.json(
                 producto
            );
        } catch (e) {
            console.log(e);
        }
    },
    async Crear(req, res) {
        const {
            descripcion,
            precioUnitario,
            stock,
            iva
        } = req.body;
        try {
            let nuevoProducto = await Producto.create({
                descripcion,
                precioUnitario,
                stock,
                iva
            }, {
                fields: ['descripcion', 'precioUnitario', 'stock', 'iva']
            });
            if (nuevoProducto) {
                return res.json(
                     nuevoProducto
                );
            }
        } catch (e) {
            res.status(500).json({
                message: 'Algo salio mal',
                data: {}
            });
        }
    },
    async Actualizar(req, res) {
        const {
            id
        } = req.params;
        const {
            iva,
            descripcion,
            precioUnitario,
            stock,
        } = req.body;
        try {

            const tbl_productos = await Producto.findAll({
                attributes: ['descripcion', 'precioUnitario', 'stock', 'iva'],
                where: {
                    id
                }
            });

            if (tbl_productos.length > 0) {
                tbl_productos.forEach(async tbl_productos => {
                    await tbl_productos.update({
                        id,
                        descripcion,
                        precioUnitario,
                        stock,
                        iva
                    });
                });
            }

            return res.json(
                tbl_productos
            );
        } catch (e) {
            res.status(500).json({
                message: 'Algo salio mal',
                data: {}
            });
        }
    },
    async Eliminar(req, res) {
        try {
            const {
                id
            } = req.params;
            const eliminarProducto = await Producto.destroy({
                where: {
                    id
                }
            });
            res.json(
                 eliminarProducto
            );
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = ProductoController