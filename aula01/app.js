const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const consign = require("consign")
const cors = require("cors")

app.set('view engine', 'ejs');

app.use(cors());

app.use(bodyParser.json( { extended : false } ));
app.use(bodyParser.urlencoded( { extended : false } ));
app.use(express.static(`./public`));

// require("./rotas/home")(app);
// require("./rotas/produtos")(app);

consign()
    .include('./rotas')
    .into(app)

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
