// const listaProdutos = [
//     { livro : 'Livro 01' , preco : 40.00 } ,
//     { livro : 'Livro 02' , preco : 50.00 }
// ];

function getProdutos (app) {

    const ProdutoDao = require('../jdbc/produtosDao');
    const Produto = require('../dto/produtoDto');

    const render = (response, result) => {
        console.log(`## produtos -> render in\n`);
        response.render("produtos/lista" , {
            listaProdutos : result
        });
    }

    const send = (response, result) => {
        console.log(`## produtos -> send in\n`);
        response.send({
            listaProdutos : result
        });
    }

    app.get('/produtos', (request, response) => {

        console.log(`\n## produtos -> /produtos in`);

        const produtoDao = new ProdutoDao();
        response.setHeader("Access-Control-Allow-Origin", "*");

        produtoDao.getAllProdutos((result) => {
            console.log(`## produtos -> /produtos out`);

            response.format({
                html : function (){
                    render(response, result)
                } ,
                json : function (){
                    send(response, result)
                }
            })
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

    app.post('/produtos', (req, res) => {
        console.log(`\n$$ produtos > /produtos in`);

        console.log('$$req.body : ' , req.body);

        let produto = new Produto();
 
        produto.init(req.body.titulo, req.body.preco, req.body.descricao);

        produto.validator()
            .then((result) => {
                const produtoDao = new ProdutoDao();
                produtoDao
                    .insertProduto(produto)
                    .then((result) => {
                        console.log(`\n$$ produtos > /produtos out success`);
                        console.log(result)

                        res.status(201)

                        res.format({
                            html : function (){
                                res.send(`Voce cadastrou um produto =)`);
                            } ,
                            json : function (){
                                res.send({
                                    success : `Voce cadastrou um produto =)`
                                })
                            }
                        })

                    }).catch((error) => {
                        console.log(`\n$$ produtos > /produtos out error`);
                        res.status(400)
                        res.format({
                            html : function (){
                                res.send(`Erro ao cadastrar o produto =(`);
                            } ,
                            json : function (){
                                res.send({
                                    errors : `Erro ao cadastrar o produto =(`
                                })
                            }
                        })
        
                        
                    });
            })
            .catch((error)=>{
                // res.send(`Erro ao cadastrar o produto =(<br/>${JSON.stringify(error)}`);
                res.status(400)
                res.format({
                    html : function (){
                        res.render('produtos/form', {
                            errors : error.details 
                        });
                            } ,
                    json : function (){
                        res.send({
                            errors : error.details 
                        })
                    }
                })

            })
 
    })

    app.get('/produtos/form', (req, res) => {
        console.log(`\n## produtos -> produtos/form in`);
        res.format({
            html : function (){
                res.render('produtos/form');
            } ,
            json : function (){
                res.status(404);
                res.send({
                    message : 'Error 404: Not Found'
                })
            }
        })
        
        
    })

    app.get('/produtos/:id', (req, response) => {
        console.log(`\n## produtos -> /produtos/:id`);

        const produtoDao = new ProdutoDao();

        produtoDao.getProdutoById(req.params.id, (result) => {
            console.log(`## produtos -> /produtos/:id out`);
            response.format({
                html : function (){
                    render(response, result)
                } ,
                json : function (){
                    send(response, result)
                }
            })
    
        })

    })

}

module.exports = getProdutos;