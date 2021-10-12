const Math = require('../src/math.js');
const {expect} = require('chai');

describe('Math class', () => {
  beforeEach(function() {
    value = 5;
  })

  it('Should sum two numbers', function (done) {
    const math = new Math();

    this.timeout(3500);

    math.sum(value, 5, (value) => {
      expect(value).to.equal(10);
      done();
    })
  });
})

// A biblioteca Chai torna o teste mais descritivo e intuitivo além de adicionar formas de validação
