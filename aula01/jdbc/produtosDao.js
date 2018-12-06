class ProdutoDao {

    constructor() {
        this.ConnectionFactory = require("./connectionFactory"); 
    }

    getProdutos (where, callback) {
        console.log(`## produtosDAO -> getProdutos in`);
        new this.ConnectionFactory().getQuery(`id , titulo , preco , descricao`, `livros`, where, callback);
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
        return new this.ConnectionFactory()
                .insert(`titulo, preco, descricao`
                    , `livros`
                    , `'${produto.getTitulo()}' , ${produto.getPreco()} , '${produto.getDescricao()}'`);
    }
}
module.exports = ProdutoDao;