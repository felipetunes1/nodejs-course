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
    
    validator() {
        console.log("start validator")
        return new Promise((resolve, reject) => {
            const Joi = require("joi");
            const livroSchema = Joi.object().keys({
                titulo : Joi.string().required(),
                preco : Joi.number().required(),
                descricao : Joi.string()
            })

            Joi.validate(this, livroSchema, { abortEarly : false })
            .then((valor) =>{
                console.log("success")
                resolve("success")    
            }).catch((error) => {
                console.log("reject", error.details)
                reject(error)    
            })
        });
    }
}

module.exports = Produto;