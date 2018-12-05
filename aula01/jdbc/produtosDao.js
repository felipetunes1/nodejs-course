const Produto = function () {
    var id;
    var titulo;
    var preco;

    var toString = () => {
        console.log(this)
        return `id , titulo , preco , descricao` 
    }
    this.id = id;
    this.toString = toString;
}

let produto = new Produto();

const getProdutos = (where, callback) => {
    console.log(produto.toString())
    require("./connectionFactory").getQuery(produto.toString(), `livros`, where, callback);
}

const getAllProdutos = (callback) => {
    getProdutos(``, callback);
}

const getProdutoById = (id, callback) => {
    getProdutos(`livros.id = ${id}`, callback);
}

module.exports = {
    getAllProdutos : getAllProdutos,
    getProdutoById : getProdutoById
};