const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');

app.use(bodyParser.json( { extended : false } ));
app.use(bodyParser.urlencoded( { extended : false } ));
app.use(express.static(`./public`));

require("./rotas/home")(app);
require("./rotas/produtos")(app);

app.use((req, res) => {
    res.status(404);

    res.format({
        html : () => {
            res.send('Error 404: Not Found')
        },
        json : () => {
            res.send({
                message : 'Error 404: Not Found'
            })
        }
    })
})

module.exports = app;
