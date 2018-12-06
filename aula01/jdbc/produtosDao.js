const ConnectionFactory = require("./connectionFactory"); 
class ProdutoDao {

    constructor() {
        this.connectionFactory = new ConnectionFactory();
    }

    getProdutos (where, callback) {
        console.log(`## produtosDAO -> getProdutos in`);
        this.connectionFactory.get(`id , titulo , preco , descricao`, `livros`, where, callback);
    }

    getAllProdutos (callback) {
        console.log(`## produtosDAO -> getAllProdutos in`);
        this.getProdutos(``, callback);
    }

    getProdutoById (id, callback) {
        console.log(`## produtosDAO -> getProdutoById in`);
        this.getProdutos(`livros.id = ${id}`, callback);
    }

    insertProduto (produto) {
        return this.connectionFactory
                .insert(`titulo, preco, descricao`
                    , `livros`
                    , `'${produto.getTitulo()}' , ${produto.getPreco()} , '${produto.getDescricao()}'`);
    }
}
module.exports = ProdutoDao;