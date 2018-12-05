// const listaProdutos = [
//     { livro : 'Livro 01' , preco : 40.00 } ,
//     { livro : 'Livro 02' , preco : 50.00 }
// ];

function getProdutos (app) {

    const produtoDao = require('../jdbc/produtosDao');

    const render = (response, result) => {
        response.render("produtos" , {
            listaProdutos : result
        });
    }

    const send = (response, result) => {
        response.send({
            listaProdutos : result
        });
    }

    app.get('/produtos', (request, response) => {

        produtoDao.getAllProdutos((result) => {
            send(response, result)
        });

        // let produtos = ``;
        // listaProdutos.forEach(produto => {
        //     produtos = `${produtos} <li> ${produto.livro} - R$ ${produto.preco} </li>`;
        // })
        // response.send(`
        //     <ul>
        //         ${produtos}
        //     </ul>
        // `);

        // response.send(`
        //     <ul>
        //         ${listaProdutos.map(produto => { return `<li> ${produto.livro} - R$ ${produto.preco} </li>`; }).join(``)}
        //     </ul>
        // `);
    });

    app.get('/produtos/:id', (req, response) => {
        produtoDao.getProdutoById(req.params.id, (result) => {
            send(response, result)
        })

    })
}

module.exports = getProdutos;