const express=require('express');
const morgan=require('morgan');
const app=express();

const router=require('../src/routers/index');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });


  //midelwares
  app.use(morgan('dev'));
  app.use(express.json());


  //routers
  app.use('/api/inventario',router);

  app.get('/',(req,res)=>{
      res.send('Bienvenido al sistema de inventario 2021');
  });

  module.exports=app