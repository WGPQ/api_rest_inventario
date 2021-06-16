module.exports={
    HOST: "mysql-34929-0.cloudclusters.net", // Replace it with your own host address
    USER: "admin", // Replace with your own username
    PASSWORD: "Williamp95", // Replace with your own password
    DB: "db_inventario",
    port:"34944",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging:false   
}