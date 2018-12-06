const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded( { extended : false } ));
app.use(express.static(`./public`));

require("./rotas/produtos")(app);
require("./rotas/home")(app);

module.exports = app;
