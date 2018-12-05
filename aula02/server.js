
const app = require("./app");
const port = 3000;

app.listen(port, () => {
    console.log(`
        Servidor subiu com sucesso!!!
        Acesso por meio de http://localhost:${port}
    `)
});
