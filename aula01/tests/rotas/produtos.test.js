const request = require("supertest");
const app = require('../../app')
const { expect } = require("chai")

describe("# rotas/produtos", () => {
    it('Deve retornar uma listagem', (done) => {
        request(app)
            .get('/produtos')
            .set('Accept', 'application/json')
            .end(function(err, res){
                if(err) throw err;

                expect(res.status).to.be.equals(200);
                expect(res.body.listaProdutos).to.be.an("array")
                expect(res.body.listaProdutos[0]).to.have.own.property('id')
                expect(res.body.listaProdutos[0]).to.have.own.property('titulo')
                expect(res.body.listaProdutos[0]).to.have.own.property('preco')
                expect(res.body.listaProdutos[0]).to.have.own.property('descricao')

                done();
            })

    })
    it.skip('Deve cadastrar um produto', (done) => {
        request(app)
            .post('/produtos')
            .send({ "titulo" : "teste","preco" : "100", "descricao" : "gkldnsgojsogdj" })
            .set('Accept', 'application/json')
            .set('Content-type', 'application/json')
            .end(function(err, res){
                if(err) throw err;

                expect(res.status).to.be.equal(201);
                expect(res.body).to.have.own.property('success')
                expect(res.body.success).not.be.empty;

                done();
            })

    })
    it('Nao Deve cadastrar um produto', (done) => {
        request(app)
            .post('/produtos')
            .send({ "titulo" : "","preco" : "50", "descricao" : "gkldnsgojsogdj" })
            .set('Accept', 'application/json')
            .set('Content-type', 'application/json')
            .end(function(err, res){
                if(err) throw err;

                expect(res.status).not.be.equal(201);
                expect(res.body).not.have.own.property('success')

                done();
            })

    })
})

