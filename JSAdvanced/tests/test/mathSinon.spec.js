const Math = require('../src/math.js');
const {expect} = require('chai');
const sinon = require('sinon');

describe('Math class', () => {
  beforeEach(function() {
    value = 5;
  })

  it.only("Shold Call res with sum and index values", function() {
    const req = {};
    const res = {
      load: sinon.spy() // Verifica se as funções foram chamadas adicionando um spy();
    };
    const math = new Math();
    math.printSum(req, res, 5, 5);
    expect(res.load.calledOnce).to.be.true;
  });
})

// Com o Sinon se torna possível mockar funções para realizar os testes.
