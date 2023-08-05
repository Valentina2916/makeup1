const fs = require("fs");
const path = require("path");

const rutauno = path.resolve(__dirname, "../data/productos.json");
const rutados = fs.readFileSync(rutauno, { encoding: "utf8" });
let productos = JSON.parse(rutados);

const control = {
  listar: function (req, res) {
    res.json(productos);
  },
  detalle: function (req, res) {
    let id = +req.params.id;
    let producto = productos.find((producto) => producto.id === id);
    res.json(producto);
  },
  crear: function (req, res) {
    const { name, price, description, image } = req.body;
    if (!name) {
      return res.status(400).json({ error: "No estás completando correctamente" });
    }

    const nuevo = {
      id: productos.length + 1,
      name,
      price,
      description,
      image,
    };

    productos.push(nuevo);
    let productosjs = JSON.stringify(productos, null, 4);
    fs.writeFileSync(rutauno, productosjs, { encoding: "utf8" });

    res.status(201).json(nuevo);
  },
};

module.exports = control;