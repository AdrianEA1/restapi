const express = require('express');
const app = express();

// middleware funciones que se ejecutan antes de que lleguen a la rutas
app.use(express.json())
//Con extended: false no se aceptan datos de tipo imagen o parecidos
app.use(express.urlencoded({ extended: false })); // para

//rutas
app.use(require('./routes/index')); //inicio de sesion y registro

app.listen(3000);
console.log('Server on port 3000')