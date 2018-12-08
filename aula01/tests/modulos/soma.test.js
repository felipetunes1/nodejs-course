const chai = require("chai")
const expect = chai.expect;
const soma = require("../../modulos/soma");


describe('# soma.js', () =>{
    it('1 + 1 tem que ser igual a 2', () => {
        expect(soma(1,1)).to.be.equal(2);
    })
    it('2 + 2 tem que ser igual a 4', () => {
        expect(soma(2,2)).to.be.equal(4);
    })
})
