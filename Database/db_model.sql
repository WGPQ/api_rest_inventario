CREATE TABLE tbl_productos(
    id INT NOT NULL AUTO_INCREMENT UNIQUE,
    descripcion VARCHAR(100) NOT NULL,
    precioUnitario FLOAT NOT NULL,
    stock FLOAT NOT NULL,
    iva FLOAT NOT NULL,
    CONSTRAINT pk_tbl_productos PRIMARY KEY (id),
)