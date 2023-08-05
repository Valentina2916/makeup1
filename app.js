const path = require ('path');
const express = require ('express')
const app = express()
const productos =  require ( './routes/productos');
const controls = require('./controls/controls');
const loger = require('./middlewares/middlewares.js');


app.use (express.static(path.resolve(__dirname, '../Public')));
app.use (express.urlencoded ({extended: false}));
app.use (express.json());


app.use('/productos', productos);
app.get ('/detalle/:id', controls.detalle );
app.use(loger);



app.listen(3000, () => console.log ('servidor corriendo en puerto http://localhost:3000'));



