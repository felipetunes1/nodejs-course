const chai = require("chai")
const expect = chai.expect;
const responsive = require("../../modulos/responsive");

describe('# responsive.js', () =>{
    it('fibonacci 5 = 120', () => {
        expect(responsive(5)).to.be.equal(120);
    })
    it('fibonacci 4 = 24', () => {
        expect(responsive(4)).to.be.equal(24);
    })
    it('fibonacci 0 = 0', () => {
        expect(responsive(0)).to.be.equal(0);
    })    
})

