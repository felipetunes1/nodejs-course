class Produto {
    constructor() {
        this.id;
        this.titulo;
        this.preco;
        this.descricao;
    }

    toString () {
        return `id , titulo , preco , descricao` 
    }

    init (tituloPar, precoPar, descricaoPar) {
        this.titulo = tituloPar;
        this.preco = precoPar;
        this.descricao = descricaoPar;
    }

    getTitulo () {
        return this.titulo;
    }
    getPreco () {
        return this.preco;

    }
    getId () {
        return this.id;

    }
    getDescricao () {
        return this.descricao;

    }
}

module.exports = Produto;