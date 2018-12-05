const express = require("express");
const app = express();

app.set('view engine', 'ejs');

require("./rotas/produtos")(app);
require("./rotas/home")(app);

module.exports = app;
