module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define('tbl_productos', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        descripcion: {
            type: Sequelize.STRING,
        },
        precioUnitario: {
            type: Sequelize.STRING,
        },
        stock: {
            type: Sequelize.STRING,
        },
        iva: {
            type: Sequelize.INTEGER,
        },
    }, {
        timestamps: false
    });
    return Producto;
}
