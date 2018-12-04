const express = require("express");
const app = express();

app.get('/', (request, response) => {
    response.send(`Home !!!`);
});

app.get('/produtos', (request, response) => {

    const listaProdutos = [ { livro : 'Livro 01' , preco : 40.00 } ,
                            { livro : 'Livro 02' , preco : 50.00 } ];


    // let produtos = ``;
    // listaProdutos.forEach(produto => {
    //     produtos = `${produtos} <li> ${produto.livro} - R$ ${produto.preco} </li>`;
    // })

    response.send(`
        <ul>
            ${listaProdutos.map(produto => { return `<li> ${produto.livro} - R$ ${produto.preco} </li>`; }).join(``)}
        </ul>
    `);
});

const port = 3000;

app.listen(port, () => {
    console.log(`
        Servidor subiu com sucesso!!!
        Acesso por meio de http://localhost:${port}
    `)
});
